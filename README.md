# Hunch_Back_Gaming

**A Nintendo retro-gaming web vault and built-in community.**

Hunch_Back_Gaming is a work-in-progress website concept for browsing a Nintendo-only retro game catalog, managing a private vault, and bringing players together with built-in friends, messaging, and community features. The intended production architecture runs compatible emulators on the server and streams gameplay to the browser.

## Current status

The repository contains a responsive front-end prototype and an initial Render-ready Node/Express server foundation:
- `index.html` — page structure and screens.
- `styles.css` — responsive dark retro-gaming interface.
- `app.js` — demo catalog filtering, navigation, and local-only interaction examples.
- `server.js` — serves the website and provides health and upload-policy endpoints.
- `package.json` — Node.js dependencies and scripts.
- `render.yaml` — Render web-service configuration.
- `.gitignore` — excludes local dependencies, secrets, and upload folders.

The server foundation does **not** yet implement real sign-in, server storage, file uploads, network chat, friend accounts, parental controls, or server-side emulation. The chat and settings examples are local UI demonstrations, not real services. The upload-policy endpoint reports the intended limit but uploads are deliberately disabled.

## Product goals

- Support **Nintendo retro consoles and handhelds only**, including older home consoles and portable systems; each system must be evaluated for emulator availability and server performance.
- Organize the catalog by Nintendo system with search and filters.
- Keep each user's vault private by default.
- Enforce a strict per-file size rule: files must be **smaller than 2 GiB** (2,147,483,648 bytes). A file at or above that size must be rejected. The largest permitted file size is 2,147,483,647 bytes. This is a per-file cap, not a promise of unlimited total vault storage.
- Build site-native accounts, friend requests, messaging, blocking, reporting, and moderation. No external social platform is required.
- Offer age-appropriate game discovery and parent-configurable permissions.
- Under-13 accounts will not have ROM-upload access and will use the approved library.
- Make the server run compatible emulators and stream gameplay to the browser when technically feasible.
- Share only original homebrew or other content for which redistribution permission has been verified.

## Legal boundaries

Old games are not automatically copyright-free. Do not assume a ROM is legal to redistribute because another website hosts it. Do not bundle or publicly distribute copyrighted game ROMs, proprietary BIOS files, or firmware without permission. A private upload feature is not a guarantee that every upload is lawful. Review rights and applicable law before publishing a catalog or accepting uploads. The project is independent and is not affiliated with or endorsed by Nintendo.

## Security and child safety requirements before public launch

- Implement secure authentication, session handling, account recovery, and per-user authorization.
- Keep uploads disabled until authentication, age-based permissions, private storage, and file validation are implemented.
- Enforce the strict under-2-GiB file size limit on the server; never rely only on browser-side checks.
- Store uploaded files outside public executable paths; validate formats and treat uploads as untrusted.
- Never execute uploaded files as server programs.
- Enforce age and parental-consent workflows where legally required; do not rely on a birth-date field alone.
- Enforce parental permissions on the server, not just in the browser UI.
- Keep child accounts' ROM upload permission disabled.
- Build reporting, blocking, moderation, abuse response, privacy controls, and retention/deletion policies before enabling real social features.
- Use TLS, rate limits, backups, security updates, and operational monitoring before public deployment.
- Do not expose a development server directly to the public internet.

## Render deployment

The repository includes a basic `render.yaml` blueprint for a Node web service. After connecting this GitHub repository in Render, review the service settings and deploy the prototype. Render's free service storage is not suitable for keeping user uploads permanently; production vault files need an appropriate persistent/object-storage design and access controls. A 2-GiB file cap does not mean Render will accept or store files that large on every plan. Confirm request, storage, bandwidth, and service limits before enabling uploads.

The `/api/health` endpoint is intended for Render health checks. The `/api/upload-policy` endpoint publishes the size policy while explicitly reporting that uploads are disabled.

## Development roadmap

1. **Front-end prototype** — responsive Nintendo-only library and social/family-control screens. (Started)
2. **Backend foundation** — Node/Express server, health endpoint, upload-policy endpoint, and Render configuration. (Started)
3. **Accounts and database** — secure authentication, sessions, authorization, and persistent account settings.
4. **Library and vault** — verified catalog metadata, private file storage, server-enforced size limits, and storage quotas.
5. **Community** — friends, messaging, blocking/reporting, moderation tools, and age-aware permissions.
6. **Remote gameplay** — integrate appropriately licensed emulators, test each system, and stream gameplay from the server.
7. **Hardening and launch review** — child privacy, legal review, security tests, backup and recovery, and accessibility testing.

## License

A license for the project's own source code has not yet been selected. A code license does not grant rights to Nintendo trademarks, games, ROMs, BIOS files, or firmware.
