import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

const text = (name, description, required = false) => {
  const option = { name, description, required };
  return option;
};
const sub = (name, description, options = []) => {
  const command = new SlashCommandBuilder().setName(name).setDescription(description);
  for (const item of options) command.addSubcommand(item);
  return command;
};
const s = (name, description, options = []) => {
  const command = new SlashCommandBuilder().setName(name).setDescription(description);
  for (const option of options) command.addStringOption(o => { o.setName(option.name).setDescription(option.description).setRequired(Boolean(option.required)); return o; });
  return command;
};
const local = (name, description, options = []) => s(name, description, options);
const child = (name, description, options = []) => {
  const command = new SlashCommandBuilder().setName(name).setDescription(description);
  for (const option of options) command.addStringOption(o => { o.setName(option.name).setDescription(option.description).setRequired(Boolean(option.required)); return o; });

  return command;
};

export const FIRST_RELEASE_COMMANDS = [
  local('dashboard', 'Open the Valora community dashboard'),
  local('bot-status', 'Show Valora bot and adapter status'),
  sub('settings', 'View Valora server settings', [
    child('view', 'View saved settings'), child('channels', 'View configured channels'), child('roles', 'View configured roles'), child('permissions', 'View permission policy'), child('appearance', 'View Valora appearance')
  ]),
  sub('clan', 'Manage local Valora clan records', [
    child('profile', 'View your clan profile'), child('roster', 'View your clan roster'), child('emblem', 'View or save your clan emblem', [text('value', 'Emblem text or URL')]), child('settings', 'View clan settings'), child('list', 'List local clans'), child('search', 'Search local clans', [text('query', 'Name or tag', true)]), child('disband', 'Request a confirmation-safe clan disband', [text('confirmation', 'Type DISBAND exactly', true)])
  ]),
  local('link', 'Save a local player link', [text('player', 'Rust player name or ID', true)]),
  local('link-status', 'View your local player link'),
  local('unlink', 'Remove your local player link'),
  sub('profile', 'Manage your local Valora profile', [child('view', 'View your profile'), child('set', 'Set a profile field', [text('field', 'Field: name, pronouns, timezone', true), text('value', 'Value', true)])]),
  sub('recruit', 'Manage local recruitment posts', [child('post', 'Post a recruitment message', [text('message', 'Recruitment message', true)]), child('list', 'List recruitment posts'), child('close', 'Close a recruitment post', [text('id', 'Post ID', true)])]),
  sub('ticket', 'Use the existing Valora support ticket panel safely', [child('panel', 'Show panel instructions'), child('status', 'Show your ticket status')]),
  sub('report', 'Create and review local reports', [child('create', 'Create a report', [text('subject', 'Player or subject', true), text('details', 'Details', true)]), child('status', 'View your report status'), child('list', 'Staff: list reports'), child('view', 'Staff: view a report', [text('id', 'Report ID', true)])]),
  sub('staff', 'Valora staff tools', [child('command-center', 'Open the staff command center'), child('player-inspect', 'Inspect a local player record', [text('player', 'Player name or Discord ID', true)]), child('audit-log', 'View recent audit records'), child('permission-check', 'Check your Valora permissions')]),

  // Server is already registered in the existing source; these subcommands are appended by the main file only when absent.
  local('rates', 'Show current Valora rate records'),
  local('wipe-reminder', 'Show the local wipe reminder')
].map(command => command.toJSON());

export const FIRST_RELEASE_NAMES = new Set(FIRST_RELEASE_COMMANDS.map(command => command.name));
export const FIRST_RELEASE_SUBCOMMANDS = { settings: ['view', 'channels', 'roles', 'permissions', 'appearance'], clan: ['profile', 'roster', 'emblem', 'settings', 'list', 'search', 'disband'], profile: ['view', 'set'], recruit: ['post', 'list', 'close'], ticket: ['panel', 'status'], report: ['create', 'status', 'list', 'view'], staff: ['command-center', 'player-inspect', 'audit-log', 'permission-check'] };
export const serializeFirstReleaseCommands = () => FIRST_RELEASE_COMMANDS.map(command => ({ name: command.name, options: command.options?.map(option => option.name) || [] }));
