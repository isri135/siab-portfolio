# Send website enquiries to Google Sheets

Each enquiry becomes a new row in a Google Sheet. It takes about 5 minutes to set up.
Google sometimes renames buttons, so if a label below doesn't match exactly, look for the closest one.

## 1. Create the sheet
1. Go to sheets.google.com and create a blank spreadsheet. Name it something like **SIABfilms Enquiries**.
2. You don't need to add headings. The script creates an **Enquiries** tab with headings when the first enquiry arrives.

## 2. Add the script
1. In the sheet, open **Extensions → Apps Script**.
2. Delete everything in the `Code.gs` editor, then paste in the whole of `google-sheets/Code.gs` from this folder.
3. Optional: to get an email for every enquiry, put your address in `NOTIFY_EMAIL`, e.g. `const NOTIFY_EMAIL = "you@example.com";`
4. Click the **Save** icon.

## 3. Publish it as a web app
1. Click **Deploy → New deployment**.
2. Next to "Select type", click the gear icon and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**. "Anyone" is needed so website visitors can send the form. They can only add rows; they can't see the sheet.
4. Click **Deploy**. Google asks you to authorise the script:
   - choose your Google account
   - if you see "Google hasn't verified this app", click **Advanced**, then **Go to … (unsafe)**. This is your own script, so it's safe.
   - click **Allow**
5. Copy the **Web app URL**. It ends in `/exec`.

You can check it's live by opening that URL in a browser. You should see `"SIABfilms enquiry endpoint is running."`

## 4. Connect the website
1. Open `siab-portfolio/main.js` and paste the URL into `SETTINGS`:
   ```js
   sheetEndpoint: "https://script.google.com/macros/s/XXXX/exec",
   ```
2. Commit and push. Then send a test enquiry from the live site and check that a row appears.

## If you change the script later
Saving the code isn't enough, because the web app keeps running the old version. Go to **Deploy → Manage deployments**, click the pencil icon, set **Version** to **New version**, then click **Deploy**. The URL stays the same.

## What's in the sheet
Received · Status · Project type · Name · Email · Company · Film purpose · Ad platforms · Event type · Venue / city · Event needs · Budget · Date / deadline · Message · Came from

New rows have their **Status** set to `New`. You can change it to `Replied`, `Booked` or `Lost` to track leads.
Each enquiry only fills in the columns for its own project type. For example, the event columns stay blank for a brand film.
