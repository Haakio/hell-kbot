const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Bot en ligne ✅ - Connecté en tant que ${client.user.tag}`);
	},
};