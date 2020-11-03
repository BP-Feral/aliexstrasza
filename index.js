const Discord = require('discord.js');
const client = new Discord.Client();

const preffix = "t"

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`));

client.on('ready', () =>{
client.user.setActivity(`**thelp** lmaoo`, {
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
  	.setDescription(`
  	 __**Testing App**__
  	        \`^-^\`This section is not finished yet!\`^-^\`
     >My current commands are thelp and tsummoner
     \`^-^\`Contact me on private to suggest new functions!\`^-^\`      `)
  		.setFooter("©️ 2020 AliexStrasza Development");
  	  msg.channel.send(helpembed);
  }
  
  if ( command === "sum" && msg.author.id === "268746806521888768") {
    msg.channel.send("My summoner name is \`Øphaquiłle\`");
     console.log(`Name matches!`);
  } else if ( command == "summoner && msg.author.client == "268746806521888768" )
             {
              console.log(`message not sent by owner!`);
             return
}
  
  
  //if (msg.author.client) { 
   // if (msg.author.id == "268746806521888768") {
  //	  if (command ==="summoner") { 
    //    msg.channel.send("My summoner name is \`Øphaquiłle\`");
    //  } 
  //  } else {
    //    msg.channel.send("Sorry, but only AliexStrasza can reveal his summoner name")
  //  }
//  }

});
client.login("MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc");
