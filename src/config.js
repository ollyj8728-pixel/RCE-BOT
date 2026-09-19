// Public, non-secret configuration for Valora RCE Bot.
// Keep Discord tokens, RCON passwords, and API keys in Railway variables only.
export const BOT_CONFIG = {
  prefix: '!',
  bot_name: 'Valora RCE Bot',
  bot_color: 0x7c3aed,
  channels: {
    log_channel_id: null,
    welcome_channel_id: null,
    event_channel_id: null,
    wipe_channel_id: null,
    leaderboard_channel_id: null,
  },
  roles: {
    admin_role_id: null,
    muted_role_id: null,
  },
  rust_server: {
    host: '',
    port: 28015,
    monitor_interval_seconds: 60,
  },
  wipe_schedule: {
    day: 'Thursday',
    time_utc: '19:00',
  },
  clans: {
    category_id: null,
    max_members: 20,
    max_name_length: 20,
  },
  ai: {
    enabled: true,
    channel_id: null,
    model: 'gpt-3.5-turbo',
    max_tokens: 512,
  },
  kits: {
    cooldown_hours: 24,
  },
  events_enabled: true,
  teleport_locations: {
    bandit_camp: { description: 'Safe zone — Buy & sell items, gambling, repair bench', grid: 'D-12', emoji: '🏴‍☠️' },
    outpost: { description: 'Safe zone — Vending machines, airwolf, research', grid: 'K-7', emoji: '🏛️' },
    fishing_village: { description: 'Safe zone — Fish, buy bait, fishing rods', grid: 'G-3', emoji: '🎣' },
    large_fishing_village: { description: 'Safe zone — Larger fishing village with more vendors', grid: 'M-9', emoji: '🐟' },
    launch_site: { description: 'High-tier monument — Bradley, elite crates, radiation', grid: 'B-5', emoji: '🚀' },
    power_plant: { description: 'Mid-tier monument — Puzzles, fuse boxes, blue/green cards', grid: 'E-9', emoji: '⚡' },
    train_yard: { description: 'Mid-tier monument — Puzzles, crates, scientist NPCs', grid: 'H-11', emoji: '🚂' },
    airfield: { description: 'Mid-tier monument — Puzzles, blue/red card rooms', grid: 'C-8', emoji: '✈️' },
    military_tunnel: { description: 'High-tier monument — Heavy scientists, elite crates, red card', grid: 'F-6', emoji: '🪖' },
    water_treatment: { description: 'Mid-tier monument — Puzzles, blue/red card rooms', grid: 'I-4', emoji: '💧' },
    dome: { description: 'No puzzle — Multiple elite crates, easy to run', grid: 'L-3', emoji: '🔵' },
    harbor: { description: 'Low-tier monument — Basic crates, easy loot', grid: 'A-2', emoji: '⚓' },
    supermarket: { description: 'Low-tier monument — Food, basic loot', grid: 'J-8', emoji: '🛒' },
    gas_station: { description: 'Low-tier monument — Basic loot, close spawns', grid: 'N-6', emoji: '⛽' },
    satellite_dish: { description: 'Mid-tier — Scientists, crates, green card room', grid: 'G-1', emoji: '📡' },
  },
};

export const RUST_TIPS = [
  '💡 Always craft a sleeping bag before your first raid.',
  '💡 Keep your bases above stone tier to resist fire raids.',
  '💡 Bradley at Launch Site requires careful preparation.',
  '💡 Invest in a code lock early.',
  '💡 Compound bow is ammo-efficient early game.',
  '💡 Keep a main base and a secondary backup base.',
  '💡 Recyclers provide components for higher-tier crafting.',
  '💡 Radiation protection is important at high-tier monuments.',
];
