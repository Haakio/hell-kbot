import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { ready } from './events/ready.js';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

ready(client);

client.login(process.env.DISCORD_TOKEN);