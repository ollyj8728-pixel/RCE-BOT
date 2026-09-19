# Railway deployment

1. Connect the GitHub repository `ollyj8728-pixel/RCE-BOT` to a Railway service.
2. Use the Node.js environment.
3. Set the start command to:

```bash
npm start
```

4. Add variables in Railway (never commit these):

```env
DISCORD_TOKEN=your_private_discord_bot_token
DISCORD_CLIENT_ID=your_discord_application_client_id
DB_PATH=/data/rce-bot.sqlite
LOG_LEVEL=info
```

5. Attach a persistent Railway volume mounted at `/data`, otherwise SQLite data can be lost on redeploy.
6. Deploy and check logs for `RCE bot online`.

The repository auto-registers global slash commands when the bot starts. Discord global command updates can take time to appear. The bot should be invited with `bot` and `applications.commands` scopes.

## Current command boundary

Community, clan, event, home, VIP, schedule, zone, leaderboard, player, logs, automod, and setup records are stored per Discord server. In-game actions still require an authorized provider-supported Rust Console RCON/API adapter. The bot does not execute shell commands or arbitrary user input.
