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
  	.setDescription(`
  	 __**Testing App**__
  	        \`^-^\`This section is not finished yet!\`^-^\`
     >My current commands are \`aliexhelp\` and \`aliexsummoner\`
     \`^-^\`Contact me on private to suggest new functions!\`^-^\`      `)
  		.setFooter("©️ 2020 AliexStrasza Development");
  	  msg.channel.send(helpembed);
  }
  
  if ( command === "sum" && msg.author.id === "268746806521888768") {
    msg.channel.send("My summoner name is \`Øphaquiłle\`");
     console.log(`Summoner name requested by AliexStrasza! -got reply-`);
  } else if ( command == "sum" && msg.author.id != "268746806521888768" )
             {
              console.log(`Summoner name requested, but wasn't the owner! -noreply-`);
             return
}
  //=============================================
  if ( command === "test" && msg.author.id === "430833156095213568") {
    msg.channel.send("Congrats! You passed!");
    console.log(`derpols wrote something! -got reply-`);
  } else if ( command == "test" && msg.author.id != "430833156095213568" )
  {
    console.log(`message -test- not sent by derpols!`);
    msg.channel.send("I'm sorry, but only derpols is allowed to type that!");
    return
  }
   if ( command === "ter" && msg.author.id === "369531260831268864") {
    msg.channel.send("Congrats! You passed!");
    console.log(`TERFOLE wrote something! -got reply-`);
  } else if ( command == "ter" && msg.author.id != "369531260831268864" )
  {
    console.log(`message -ter- not sent by TERFOLE! -got reply-`);
    msg.channel.send("I'm sorry, but only TERFOLE is allowed to type that! ");
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
