import { Client } from 'discord.js';

export const ready = (client: Client) => {
    client.on('ready', () => {
        console.log(`Bot en ligne ✅, connecté en tant que ${client.user?.tag}!`);
    });
};