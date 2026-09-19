import { SlashCommandBuilder, SlashCommandSubcommandBuilder } from 'discord.js';

const ticket = new SlashCommandBuilder()
  .setName('ticket')
  .setDescription('Private Valora support tickets')
  .addSubcommand(new SlashCommandSubcommandBuilder().setName('panel').setDescription('Show the ticket panel instructions'))
  .addSubcommand(new SlashCommandSubcommandBuilder().setName('status').setDescription('View your tickets'))
  .addSubcommand(new SlashCommandSubcommandBuilder().setName('open').setDescription('Open a private support ticket'))
  .addSubcommand(new SlashCommandSubcommandBuilder().setName('close').setDescription('Close the ticket in this channel'))
  .addSubcommand(new SlashCommandSubcommandBuilder().setName('claim').setDescription('Claim the ticket in this channel'));

export const COMMANDS = [
  new SlashCommandBuilder().setName('setup').setDescription('Open the Valora setup hub'),
  new SlashCommandBuilder().setName('ticket-panel').setDescription('Post the Valora support panel'),
  new SlashCommandBuilder().setName('tickets').setDescription('View open ticket status'),
  ticket,
].map(command => command.toJSON());

export function validateCommands(commands = COMMANDS) {
  const errors = [];
  const top = new Set();
  for (const command of commands) {
    if (!command?.name) errors.push('command without a name');
    if (top.has(command.name)) errors.push(`duplicate command: ${command.name}`);
    top.add(command.name);
    const options = (command.options || []).filter(option => option.type === 1 || option.type === 2);
    const names = new Set();
    for (const option of options) {
      if (names.has(option.name)) errors.push(`duplicate subcommand: ${command.name}/${option.name}`);
      names.add(option.name);
    }
  }
  return errors;
}

if (process.argv[1]?.endsWith('commands.js')) {
  const errors = validateCommands();
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log(`Validated ${COMMANDS.length} canonical commands: ${COMMANDS.map(command => `/${command.name}`).join(', ')}`);
}
