/**
 * SIABfilms enquiry form → Google Sheets
 *
 * Paste this into Extensions → Apps Script in your enquiries sheet,
 * deploy it as a Web app, and put the /exec URL in main.js → SETTINGS.sheetEndpoint.
 * Full steps are in google-sheets/SETUP.md.
 */

// Name of the tab enquiries are written to (created automatically if missing)
const SHEET_NAME = "Enquiries";

// Optional: get an email for every new enquiry. Leave "" to turn this off.
const NOTIFY_EMAIL = "";

// Column order in the sheet: [header shown in the sheet, form field name]
const COLUMNS = [
  ["Received",        "_timestamp"],
  ["Status",          "_status"],
  ["Project type",    "type"],
  ["Name",            "name"],
  ["Email",           "email"],
  ["Company",         "company"],
  ["Film purpose",    "purpose"],
  ["Ad platforms",    "platforms"],
  ["Event type",      "event_type"],
  ["Venue / city",    "event_location"],
  ["Event needs",     "event_needs"],
  ["Budget",          "budget"],
  ["Date / deadline", "date"],
  ["Message",         "message"],
  ["Came from",       "source"]
];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Spam trap: real visitors never see or fill the "website" field
  if (p.website) return reply_({ result: "success" });

  if (!p.name || !p.email || !p.message) {
    return reply_({ result: "error", error: "Missing name, email or message" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet_();
    const values = Object.assign({}, p, { _timestamp: new Date(), _status: "New" });
    sheet.appendRow(COLUMNS.map(([, key]) => clean_(values[key])));
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    const lines = COLUMNS.filter(([, k]) => p[k]).map(([label, k]) => `${label}: ${p[k]}`);
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: p.email,
      subject: `New SIABfilms enquiry: ${p.type || "Project"} from ${p.name}`,
      body: lines.join("\n")
    });
  }

  return reply_({ result: "success" });
}

// Lets you open the /exec URL in a browser to check the deployment is live
function doGet() {
  return reply_({ result: "ok", message: "SIABfilms enquiry endpoint is running." });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(([label]) => label));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stops values starting with = + - @ from being run as spreadsheet formulas
function clean_(v) {
  if (v === undefined || v === null) return "";
  if (v instanceof Date) return v;
  const s = String(v).slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
