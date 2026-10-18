# Ritu Raj & Sourav Kumar — Interactive Wedding Invitation

A responsive React + Vite project wrapping the invitation page in `public/invitation.html` to preserve the envelope animation, confetti, floating hearts and sparkles, Ganesh Ji artwork, scratch-to-reveal date card, event cards, gallery, and other interactions.

## Run on Windows

1. Install Node.js (LTS) if it is not already installed: https://nodejs.org/
2. Extract this ZIP into a folder, for example `D:\ritu-sourav-wedding`.
3. Open that folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```powershell
   npm install
   npm run dev
   ```

6. Open the local URL printed by Vite, normally `http://localhost:5173`.

## Make a production build

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy on Netlify

1. Run `npm run build`.
2. Open https://app.netlify.com/drop and sign in.
3. Upload the generated `dist` folder.
4. Share the Netlify URL with family and guests.

## Customize before sharing

The invitation's visual markup, text, CSS and browser interactions are in `public/invitation.html`.

Search that file for the following values and update them when confirmed:

- `RITU RAJ` and `SOURAV KUMAR` — couple names.
- `20 November 2026`, `20 NOVEMBER 2026`, and the countdown's `2026-11-20T00:00:00+05:30` — date and time.
- `Venue details coming soon` — actual venue name/address.
- The `mapsBtn` handler — use the confirmed venue address in its Google Maps URL.
- The `rsvpForm` submit handler — configure the family's WhatsApp number before sending real RSVP messages.
- Event cards — replace draft dates/times with the family's confirmed schedule.
- Image URLs — the page tries the original reference site's image paths first and uses embedded/fallback artwork if those files cannot be loaded. Replace them with the couple's approved photos for the final version.

### Important configuration notes

- Google Maps is not configured until you add the confirmed venue address.
- The current RSVP form shows a setup message; it does not send a WhatsApp RSVP until you add the correct family number and URL handling.
- The music control currently plays a synthesized demo. Add an audio file you have permission to use if you want a song.
- The standalone HTML file is included at the project root as `Ritu-Sourav-Wedding-Invitation-Standalone.html` for quick local opening. For the Vite version, run the commands above.

## Files

- `index.html` — Vite entry point.
- `src/` — React application and shell styling.
- `public/invitation.html` — full invitation design and interaction code.
- `Ritu-Sourav-Wedding-Invitation-Standalone.html` — standalone copy of the invitation.
