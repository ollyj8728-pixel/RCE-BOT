# NexioHost deployment

NexioHost can be used to run the Discord bot process. The bot host and the Rust Console server are separate concerns.

## Bot hosting variables

Set these in the NexioHost environment/settings panel:

- `DISCORD_TOKEN` — Discord bot token
- `DISCORD_CLIENT_ID` — Discord application client ID
- `DB_PATH` — use a persistent writable path supplied by NexioHost, such as `./data/rce-bot.sqlite`
- `LOG_LEVEL` — `info`

Start command:

```bash
npm install && npm start
```

For Pterodactyl, set the startup variable `MAIN_FILE` to `index.js` (not `./index.js`, and not `src/index.js` if the panel expects a root file). The repository includes a root `index.js` shim that loads the real bot from `src/index.js`. If the panel uses a separate startup command, use `node index.js`.

Use Node.js 20 or newer. Keep the process running and enable automatic restart.

## Rust Console in-game connection

NexioHost hosting the Discord process does not by itself give the bot access to a Rust Console server. The Rust server owner must provide a supported, authorized RCON/API endpoint from the Rust server host.

Required non-secret connection information:

- Rust server host/provider name
- RCON/API protocol supported by that provider
- RCON/API hostname or IP
- RCON/API port
- Whether the endpoint is reachable from an external bot host
- Kill-feed/player-stat API or log method, if available

Never commit the RCON password to GitHub or send it in chat. Store it as a private NexioHost secret. Until an actual supported endpoint and protocol are configured, `/console`, teleport, kits, kill feed, playtime, custom zones, and automatic in-game commands must remain disabled rather than pretending to work.

## Health checks

After starting, confirm the NexioHost logs show `RCE bot online`. Then invite the bot with the `bot` and `applications.commands` scopes and test `/help`.
