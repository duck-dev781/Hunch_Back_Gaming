# Hunch_Back_Gaming

**A Nintendo retro-gaming web vault and built-in community.**

Hunch_Back_Gaming is a work-in-progress website concept for browsing a Nintendo-only retro game catalog, managing a private vault, and bringing players together with built-in friends, messaging, and community features. The user's device should act as a browser client; the intended production architecture runs compatible emulators on the server and streams gameplay to the browser.

## Current status

The repository now contains a responsive front-end prototype:
- `index.html` — page structure and screens.
- `styles.css` — responsive dark retro-gaming interface.
- `app.js` — demo catalog filtering, navigation, and local-only interaction examples.

The prototype does **not** yet implement real sign-in, server storage, ROM uploads, network chat, friend accounts, parental controls, or server-side emulation. The chat and settings examples are local UI demonstrations, not real services.

## Product goals

- Support **Nintendo retro consoles and handhelds only**, including older home consoles and portable systems; each system must be evaluated for emulator availability and server performance.
- Organize the catalog by Nintendo system with search and filters.
- Keep each user's vault private by default.
- Build site-native accounts, friend requests, messaging, blocking, reporting, and moderation. No external social platform is required.
- Offer age-appropriate game discovery and parent-configurable permissions.
- Under-13 accounts will not have ROM-upload access and will use the approved library.
- Make the server run compatible emulators and stream gameplay to the browser when technically feasible.
- Share only original homebrew or other content for which redistribution permission has been verified.

## Legal boundaries

Old games are not automatically copyright-free. Do not assume a ROM is legal to redistribute because another website hosts it. Do not bundle or publicly distribute copyrighted game ROMs, proprietary BIOS files, or firmware without permission. A private upload feature is not a guarantee that every upload is lawful. Review rights and applicable law before publishing a catalog or accepting uploads. The project is independent and is not affiliated with or endorsed by Nintendo.

## Security and child safety requirements before public launch

- Implement secure authentication, session handling, account recovery, and per-user authorization.
- Store uploaded files outside public executable paths; enforce size limits, validate formats, and treat uploads as untrusted.
- Never execute uploaded files as server programs.
- Enforce age and parental-consent workflows where legally required; do not rely on a birth-date field alone.
- Enforce parental permissions on the server, not just in the browser UI.
- Keep child accounts' ROM upload permission disabled.
- Build reporting, blocking, moderation, abuse response, privacy controls, and retention/deletion policies before enabling real social features.
- Use TLS, rate limits, backups, security updates, and operational monitoring before public deployment.
- Do not expose a development server directly to the public internet.

## Development roadmap

1. **Front-end prototype** — responsive Nintendo-only library and social/family-control screens. (Started)
2. **Backend foundation** — database, secure accounts, sessions, authorization, and deployment configuration.
3. **Library and vault** — verified catalog metadata, safe upload policy, storage quotas, and private file handling.
4. **Community** — friends, messaging, blocking/reporting, moderation tools, and age-aware permissions.
5. **Remote gameplay** — integrate appropriately licensed emulators, test each system, and stream gameplay from the server.
6. **Hardening and launch review** — child privacy, legal review, security tests, backup and recovery, and accessibility testing.

## License

A license for the project's own source code has not yet been selected. A code license does not grant rights to Nintendo trademarks, games, ROMs, BIOS files, or firmware.