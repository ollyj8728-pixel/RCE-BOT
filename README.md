# RCE Bot — Rust Console Edition Discord Bot

An original, free, public Discord bot foundation for Rust Console Edition communities. It is not copied from another bot or project.

## Included command modules

- `/help`
- `/server list|add`
- `/console`
- `/clan create|info|invite`
- `/event start|list|end` — Nuketown, KOTH, Maze, Snowroams, Custom
- `/leaderboard` — kills, playtime, events
- `/home set|list|remove`
- `/kit give`
- `/vip add|list`
- `/config`
- `/setup`
- `/player info|stats`
- `/zone create|list|delete`
- `/logs`
- `/announcement`
- `/automod`
- `/maintenance`

## Railway deployment

See `RAILWAY.md`. Use `npm start`, set `DISCORD_TOKEN`, `DISCORD_CLIENT_ID`, and a persistent `DB_PATH` such as `/data/rce-bot.sqlite`.

## Important status

This repository includes the Discord command layer, SQLite persistence, permissions, and event/clan/home/leaderboard foundations. Rust Console execution, kill-feed ingestion, kit delivery, timed commands, zones, and teleportation require a server-side integration supported by your host/RCON provider. The adapter boundary is intentionally kept separate so credentials are never committed.

## Run locally

1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env`.
4. Create a Discord application and bot at the Discord Developer Portal.
5. Add `DISCORD_TOKEN` and `DISCORD_CLIENT_ID` to `.env`.
6. `npm start`

Register the bot with the `bot` and `applications.commands` scopes. Use the minimum permissions needed for your server; do not blindly grant Administrator.

## GitHub

```bash
git init
git add .
git commit -m "Initial original RCE Discord bot"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPO.git
git push -u origin main
```

Never commit `.env`, bot tokens, RCON passwords, or database files.

## License

MIT — free to use and modify.
