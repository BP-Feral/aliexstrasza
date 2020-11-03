const Discord = require('discord.js');
const client = new Discord.Client();

const preffix = "aliex"

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`));

client.on('ready', () =>{
client.user.setActivity(`type [aliexhelp] lmaoo`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/aliexstrasza"})
  .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
  .catch(console.error);
});

client.on("message", async msg => {
  if (!msg.content.startsWith(preffix)) return;

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(preffix.length);

  if (command === "help") {
  	const helpembed = new Discord.RichEmbed()
  	.setColor("#7289DA")
  //.setAuthor(client.user.tag, client.user.displayAvatarURL())
  	.setAuthor(client.user.tag)
    //==========================DESCRIPTION==============================
  	.setDescription(`
  	 __**Help Center**__
  	 \`^-^\`This section is not finished yet!\`^-^\`
     My current commands are \`aliexhelp\` and \`aliexsum\`
     (aliexsum can only be run by @AliexStrasza#5268 @"268746806521888768")
     Contact me on private to suggest new functions!
     I can even add userid-exclusive commands ;}`)
  		.setFooter("©️ 2020 AliexStrasza Development");
  	  msg.channel.send(helpembed);
  }
  //========================EXCLUSIVE COMMAND============================
  if ( command === "sum" && msg.author.id === "268746806521888768") {
    msg.channel.send("My EUNE summoner name is \`Øphaquiłle\`");
     console.log(`Summoner name requested by AliexStrasza! -got reply-`);
  } else if ( command == "sum" && msg.author.id != "268746806521888768" )
             {
              console.log(`Summoner name requested, but wasn't the owner! -noreply-`);
             return
  }
  //========================EXCLUSIVE COMMAND============================
  
  //=========================ONLY WRITE ABOVE============================
});
client.login("MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc");
