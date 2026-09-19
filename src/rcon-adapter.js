// Rust Console RCON integration boundary.
// Implement this with the API/RCON method supported by your host.
// Keep credentials in environment variables or a secret manager, never in git.
export async function executeConsoleCommand({ server, command }) {
  throw new Error(`RCON adapter not configured for ${server.name}; refused to run: ${command}`);
}
