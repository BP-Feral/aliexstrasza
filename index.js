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
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('S1ckBoY', 'https://i.imgur.com/wSTFkRM.png', 'https://cdn.discordapp.com/icons/781416926218944513/eb93ddfc962ae5b23cffbfe27b1cac3d.png?size=128')
	.setDescription('ce nub esti')
	.setThumbnail('https://cdn.discordapp.com/icons/781416926218944513/eb93ddfc962ae5b23cffbfe27b1cac3d.png?size=128')
	.addField('ia de aici niste memeuri', 'sa te simti mai bine')
	.addBlankField()
	.addField('doge', 'POG', true)
	.setImage('https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png')
	.setTimestamp()
	.setFooter('acum am plecat am treaba xd', 'https://cdn.discordapp.com/icons/781416926218944513/eb93ddfc962ae5b23cffbfe27b1cac3d.png?size=128');
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
