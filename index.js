const Discord = require('discord.js');
const client = new Discord.Client();

const preffix = "aliex"

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`));

client.on('ready', () =>{
client.user.setActivity('Join My Server!', {type: "STREAMING", url:"twitch.tv/AliexStrasza"})
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
     You can acces this menu by typing \`**aliexhelp**\`.
     My commands are hidden because all of them respond only to me,
     expect the one you just type.
     Contact me on private to suggest some functions!
     I can even add user-id exclusive commands ;}`)
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
   if ( command === "txt" && msg.author.id === "268746806521888768") {
     console.log(`txt requested`);
     const exampleEmbed = new Discord.RichEmbed()
	.setColor('#9e34eb')
	.setTitle('__Xp Information__')
	.setDescription('*XP* is gained every time you talk within a *2 minute* time interval. *XP* is not determined by the size of the message. You will not get more *XP* just because the message is bigger. 5*XP* is gained every minute in a voice channel, and everytime you send a message. To check your *XP level* go to #『command-bot』 and type *ar!member stats*')
	.addField('_Below are the various roles you can obtain with *XP*_')
	.addBlankField()
	.addField('[01] @Genin',false)
     	.addField('[02] @Chunin',false)
     	.addField('[03] @Jonin',false)
     	.addField('[04] @Anbu',false)
     	.addField('[05] @Rogue',false)
     	.addField('[06] @Jhinchuriki',false)
     	.addField('[07] @Edo Tensei',false)
     	.addField('[08] @Kage',false)
     	.addField('[09] @Sannin',false)
     	.addField('[10] @Sage',false)
     	.addField('[11] @God of Shinobi',false)
     	.addField('[12] @Jūbi',false)
     	.addField('[13] @8 Gates',false)
     	.addField('[14] @♔ Ōtsutsuki ♔', false)
	.addBlankField()
     	.addField('That pretty much sums up the basics, hope you enjoy your stay.',false)
     	.addField('*If you have any other queries please send a direct message to @S1ckBoY#8245 and our moderators will assist you!', false)
	.setTimestamp()
	//.setFooter('');
	msg.channel.send(exampleEmbed);
	   return
  }
    if ( command === "opgg" && msg.author.id === "268746806521888768") {
    msg.channel.send("https://eune.op.gg/summoner/userName=%C3%98phaqui%C5%82le");
     console.log(`opgg requested by AliexStrasza! -got reply-`);
  } else if ( command == "opgg" && msg.author.id != "268746806521888768" )
             {
              console.log(`opgg requested, but wasn't the owner! -noreply-`);
             return
  }
  
  if ( command === "fb" && msg.author.id === "268746806521888768") {
    msg.channel.send("https://www.facebook.com/mihai.pricob");
     console.log(`fb requested by AliexStrasza! -got reply-`);
  } else if ( command == "fb" && msg.author.id != "268746806521888768" )
             {
              console.log(`fb requested, but wasn't the owner! -noreply-`);
             return
  }
  if ( command === "lmao" && msg.author.id === "268746806521888768") {
    msg.channel.send("", {files: ["vildred.jpeg"] } );
     console.log(`photo requested by AliexStrasza! -got reply-`);
  } else if ( command == "lmao" && msg.author.id != "268746806521888768" )
             {
              console.log(`vildred requested, but wasn't the owner! -noreply-`);
             return
  }
  //========================EXCLUSIVE COMMAND============================
  
  //=========================ONLY WRITE ABOVE============================
});
client.login("MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc");
