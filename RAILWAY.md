# Railway deployment

1. Connect `ollyj8728-pixel/RCE-BOT` to the Railway service.
2. Use Node.js.
3. Set the start command to:

```bash
npm start
```

4. Add Railway variables:

```env
DISCORD_TOKEN=your_private_discord_bot_token
DISCORD_CLIENT_ID=your_discord_application_client_id
DB_PATH=/data/rce-bot.sqlite
LOG_LEVEL=info
```

For commands to appear immediately in your test Discord server, also set:

```env
DISCORD_GUILD_ID=your_discord_server_id
```

After testing, remove `DISCORD_GUILD_ID` and redeploy to register global commands. Global Discord command propagation can take up to an hour.

5. Attach a persistent Railway volume mounted at `/data`, otherwise SQLite data may be lost on redeploy.
6. Deploy and check the logs for `slash commands registered` and `Rustworks RCE bot online`.

## Discord invite scopes and permissions

Invite the bot with both scopes:

- `bot`
- `applications.commands`

The bot needs the permissions used by your selected features. Ticket panels require Manage Channels, View Channel, Send Messages, and Read Message History.

## Support tickets

Run `/ticket-panel` in the support channel. It creates the Rustworks RCE panel, category selection, EU/NA selection, question modal, private ticket channel, and close button. NA is currently marked **COMING SOON** and will not create NA tickets.

## Troubleshooting commands

- Confirm the bot is online in Railway logs.
- Confirm `DISCORD_CLIENT_ID` is the application ID, not the bot token.
- Confirm `DISCORD_GUILD_ID` is the numeric server ID where the bot is installed.
- Restart/redeploy after changing variables.
- Make sure the bot was invited with `applications.commands`.
- Do not set `DISCORD_GUILD_ID` to a channel ID or user ID.
