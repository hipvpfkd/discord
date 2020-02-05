const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("674665230814543873")
setInterval(function() {
channel.send(`hi pro hi pro hi pro hi pro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);