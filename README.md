# Hunch_Back_Gaming

**A retro-gaming library and self-hosted play server.**

Hunch_Back_Gaming is a work-in-progress project for organizing games across classic gaming systems, letting users manage their own legally obtained game files, and playing compatible games in a browser where practical.

> **Legal note:** Hunch_Back_Gaming does not ship copyrighted ROMs, console BIOS files, or proprietary firmware. Users are responsible for ensuring they have the rights to upload, store, and use files. The project should support homebrew, public-domain games, and content whose license explicitly permits redistribution.

## Project goals

- Browse a library organized by gaming system and generation.
- Let users upload and manage their own game files.
- Identify likely systems from supported file extensions, with manual correction.
- Play supported games in-browser using compatible emulator integrations.
- Keep per-user saves and preferences separate.
- Provide an administrator view for storage, users, and system health.
- Start small, then expand system support after testing compatibility and performance.

## Planned milestones

### Phase 1 — Foundation
- [ ] Build a responsive library interface and project branding.
- [ ] Document the architecture, setup, and legal boundaries.
- [ ] Create a system catalog with supported formats and emulator notes.
- [ ] Add a local development workflow and basic tests.

### Phase 2 — Local library
- [ ] Add a backend API and metadata database.
- [ ] Implement safe ROM upload and validation.
- [ ] Store game files outside the public web directory.
- [ ] Add library search, filters, and system categories.

### Phase 3 — Browser gameplay
- [ ] Integrate an emulator only where its license and technical requirements permit.
- [ ] Support user-supplied firmware only where legally permitted.
- [ ] Add save-state and in-game save handling where supported.
- [ ] Clearly show which systems are experimental or unsupported.

### Phase 4 — Accounts and remote access
- [ ] Add authentication, per-user library permissions, and quotas.
- [ ] Add backups and account recovery.
- [ ] Harden deployment before exposing it to the public internet.

## Safety and security requirements

- Never execute uploaded files on the server.
- Treat every upload as untrusted; enforce size limits and validate file types.
- Keep uploaded games and firmware out of executable web paths.
- Require authentication for uploads and administration.
- Do not expose the server directly to the public internet until authentication, upload limits, TLS, backups, and update procedures are in place.
- Do not include copyrighted ROM collections, proprietary BIOS files, or other assets without redistribution permission.

## Development status

The repository is at its initial setup stage. The first implementation target should be a small, working library interface before adding uploads or emulator execution.

## License

A project license has not yet been selected. Before publishing reusable source code, choose a license for the project's own code and document third-party emulator licenses separately. A code license does not grant rights to game ROMs, trademarks, or firmware.
