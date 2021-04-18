const Discord = require('discord.js');
const client = new Discord.Client();

const preffix = "na "

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`));

client.on('ready', () =>{
client.user.setActivity('𝙥𝙚𝙤𝙥𝙡𝙚 𝙖𝙣𝙙 𝙩𝙝𝙚𝙞𝙧 𝙖𝙞𝙧', {type: "STREAMING",
                                        url: "https://www.twitch.tv/epicseven"
                                                   })
.then(presence => console.log(`Your Status has been set to streaming pog  ${presence.game ? presence.game.none : 'none'}`))
.catch(console.error);
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "alo" && msg.author.id === "424894078631542795") {
    msg.channel.send(` Buna Dimineata!`);
    console.log(`Greeting requested - got reply!`);
    return;
  } else if (msg.content.toLowerCase() === "alo" && msg.author.id != "424894078631542795") {
    console.log(`Greeting requested - no reply!`);
    return;
  }
//    if (msg.author.id === "424894078631542795") {
//    msg.channel.send(` Da <@424894078631542795> cub mistic baa`);
//    console.log(`cub mistic reply sent`);
//    return;
//  } else if (msg.author.id != "424894078631542795") {
//    console.log(`author id didn't match`);
//    return;
//  }
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
     The following commands can only be run by the owner of the program,
    \`aliexsum\` - request summoner name from League of Legends.
    \`opgg\` - request link to opgg profile.
    \`fb\` - request owner's Facebook contact link.
     Contact me on private to suggest some functions!
     I can even add user-id exclusive commands ;}`)
  		.setFooter("©️ 2020 <@268746806521888768> Development");
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
