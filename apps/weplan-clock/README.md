# WePlan Clock apps (iPhone, iPad, Android)

The app's code lives in [`weplan-clock/`](../../weplan-clock), the same files as the website version.
This folder wraps it with [Capacitor](https://capacitorjs.com) so it can go in the App Store and Google Play.

| | |
|---|---|
| App ID (both stores) | `com.cultivateplay.weplanclock` |
| In-app purchase ID (both stores) | `weplan_plus`, non-consumable, $2.99 |
| Privacy policy URL | https://cultivateplaystudio.com/weplan-clock/privacy.html |
| Support URL | https://cultivateplaystudio.com/weplan-clock/support.html |

## What the app adds to the website version
- **WePlan Clock Plus** as a real one-time purchase (cordova-plugin-purchase), with a **parent gate** before buying and **Restore purchases**.
- **Notifications** when an activity's time is up while the app is in the background.
- **Keep awake** during a session, and **haptics** at each change.
- **Microphone recording** for voices (permission text is in `ios/App/App/Info.plist` and `android/app/src/main/AndroidManifest.xml`).
- Fonts and everything else are bundled, so the app works fully offline.

## Making changes
1. Edit `weplan-clock/index.html` (the website and both apps use it).
2. Push. The **WePlan Clock app check** on GitHub builds both apps to make sure nothing broke.
3. For a new store build, start the Codemagic workflows (below).

Locally, `npm install` then `npm run sync` copies the web files into the native projects.
`npm run assets` regenerates icons and launch screens from `assets/`.

## Cloud builds without a Mac (Codemagic)
`codemagic.yaml` (repository root) has two workflows:
- **ios-testflight**: builds, signs and uploads to TestFlight.
- **android-play-internal**: builds a signed app bundle and uploads it to Google Play internal testing as a draft.

One-time setup:
1. Sign up at codemagic.io with GitHub and add this repository.
2. **Apple**: in App Store Connect → Users and Access → Integrations, create an API key (App Manager role).
   Add it in Codemagic → Team settings → Integrations → App Store Connect, named
   `WePlan Clock App Store Connect key`. Codemagic then creates the signing certificate and profile for you.
3. **Google**:
   - Create an upload keystore and add it in Codemagic → Team settings → Code signing identities → Android keystores, named `weplan_upload_key`.
   - Create a Google Play service account with release permissions, and save its JSON key as the secure variable
     `GCLOUD_SERVICE_ACCOUNT_CREDENTIALS` in a Codemagic variable group named `google_play`.
   - Google requires the **first** app bundle to be uploaded by hand in Play Console. Download it from the first
     Codemagic build's artifacts, upload it, and later builds upload automatically.

## Store setup checklist
- App Store Connect: create the app with the bundle ID above, then create the in-app purchase `weplan_plus`
  (non-consumable, $2.99) and add it to the first version you submit.
- Play Console: create the app, then create the in-app product `weplan_plus` ($2.99).
- Both: privacy policy and support URLs above; privacy label "Data Not Collected" (Apple) and a Data safety form
  with no data collected (Google); age rating questionnaire; screenshots.
- Test purchases with a Sandbox tester (App Store Connect → Users and Access → Sandbox) and Google Play license testers.
