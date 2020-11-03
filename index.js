const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Client({
	disableMentions: "all"
});

const preffix = "t"

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);

client.user.setActivity(`Lmao no stream`, {
type: "STREAMING",
url: "https://www.twitch.tv/aliexstrasza"})
  .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
  .catch(console.error);
});

bot.on("message", async msg => {
  if (!msg.content.startsWith(preffix)) return;

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(preffix.length);

  if (command === "help") {
  	const helpembed = new Discord.MessageEmbed()
  	.setColor("#7289DA")
  	.setAuthor(client.user.tag, client.user.displayAvatarURL())
  	.setDescription(
  	  `
  	 __**My List**__
  	 >\`This section is not finished yet!\``)

  		.setFooter("©️ 2020 AliexStrasza Development");
  	  msg.channel.send(helpembed);
  }
});
client.login("MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc");
