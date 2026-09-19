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
6. Deploy and check logs for `Rustworks RCE bot online`.

The repository auto-registers global slash commands when the bot starts. Discord global command updates can take time to appear. Invite the bot with `bot` and `applications.commands` scopes.

## Support tickets

Run `/ticket-panel` in the support channel. It posts the Rustworks RCE panel with:

- Support Tickets
- Support Status
- Open total, EU, and NA counts
- Fast response label
- 12-minute estimated help time
- Rustworks branding
- Support option select menu
- EU/NA region selection
- Question modal
- Private ticket channel creation
- Close-ticket button

The bot needs `Manage Channels`, `View Channel`, `Send Messages`, and `Read Message History` permissions for ticket channels.
