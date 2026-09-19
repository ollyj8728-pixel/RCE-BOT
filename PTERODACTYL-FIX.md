# Pterodactyl startup fix

The crash is caused by the panel startup template, not by the Discord bot:

```text
if [[ "${MAIN_FILE}" == "*.js" ]]; then node ...; else ts-node --esm ...; fi
```

Because `${MAIN_FILE}` is quoted, the wildcard is not treated as a pattern. The panel therefore runs `ts-node` for `index.js`, then fails with `Cannot find module './index.js'`.

## Set the startup command

Replace the panel startup command with exactly:

```bash
if [[ -d .git ]] && [[ ${AUTO_UPDATE} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then npm uninstall ${UNNODE_PACKAGES}; fi; if [[ -f package.json ]]; then npm install; fi; node index.js
```

Set:

```text
MAIN_FILE=index.js
```

The important final part is `node index.js`, not `ts-node --esm`.

## Alternative

If the host does not allow editing the startup command, ask NexioHost support to change their Node.js egg/startup template so JavaScript files use Node:

```bash
node /home/container/${MAIN_FILE} ${NODE_ARGS}
```

Do not upload a bot token into the file manager. Add `DISCORD_TOKEN` and `DISCORD_CLIENT_ID` as Pterodactyl startup/environment variables.

After changing the command, restart the server. A successful startup will show:

```text
RCE bot online
```
