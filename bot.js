const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("531190846201004045")
setInterval(function() {
channel.send(` ! ʷᶤᶰᵍˢ CuzImMnK_ ! ʷᶤᶰᵍˢ CuzImMnK_ ! ʷᶤᶰᵍˢ CuzImMnK_ ! ʷᶤᶰᵍˢ CuzImMnK_ ! ʷᶤᶰᵍˢ CuzImMnK_ ! ʷᶤᶰᵍˢ CuzImMnK_ `);
}, 30)
})

client.login(process.env.BOT_TOKEN);