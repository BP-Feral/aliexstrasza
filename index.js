const Discord = require('discord.js');
const client = new Discord.Client();

const preffix = "na"

client.on('ready', () => 
  console.log(`Logged in as ${client.user.tag}!`));

client.on('ready', () =>{
client.user.setActivity('𝙥𝙚𝙤𝙥𝙡𝙚 𝙖𝙣𝙙 𝙩𝙝𝙚𝙞𝙧 𝙖𝙞𝙧', {type: "STREAMING", //AVAILABLE
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
  		.setFooter("©️ 2020 𝗡𝗮𝗺𝗶 Development");
  	  msg.channel.send(helpembed);
  }
  //========================EXCLUSIVE COMMAND============================
  if ( command === "sum" && msg.author.id === "268746806521888768") {
    msg.channel.send("My EUNE summoner name is \`Gwen Βot\`");
     console.log(`Summoner name requested by ${msg.author}! -got reply-`);
  } else if ( command == "sum" && msg.author.id != "268746806521888768" )
             {
              console.log(`Summoner name requested, but wasn't the owner! -noreply-`);
             return
             }
    if ( command === "opgg" && msg.author.id === "268746806521888768") {
    msg.channel.send("https://eune.op.gg/summoner/userName=%C3%98phaqui%C5%82le");
     console.log(`opgg requested by ${msg.author}! -got reply-`);
  } else if ( command == "opgg" && msg.author.id != "268746806521888768" )
             {
              console.log(`opgg requested, but wasn't the owner! -noreply-`);
             return
  }
   if ( command === "embed1" && msg.author.id === "268746806521888768") {
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#eb9234')
	.setTitle('Announcement!')
	.setDescription('We are oppening a modded factorio server!')
	.setThumbnail('https://factorio.com/static/img/factorio-wheel.png')
	.addField('Factorio Version', '1.1.32 (build 58364, win64)')
	.addBlankField()
	.addField('How to join us?', 'there are two ways to join our server!')
	.addField('Steam Game',`
If you own Factorio on Steam, then you just have
to join our server. The mods will be installed automatically.` )
    
	.addField('Non-Steam Game',`
If you don't have Factorio on Steam, our server accepts connections trough Radmin VPN. First of all you have to make sure you run the same game version
(check above) and install Radmin VPN.
> https://mega.nz/file/osIBXILD#BvLdEDMrRkA5wo95uFX0II5Sk_gRjxJ9BGRwlPUXeXo - **Factorio**
> https://www.radmin-vpn.com/download/Radmin_VPN_1.1.4288.10.exe - **RadminVPN**

Once Radmin is installed, connect to our network using:
> Network name: **PolarOrbit** 
> Network password: **factorio4life**

Now you can open Factorio, go to multiplayer, 
choose **Connect to address**
and use the following ip address: 26.31.113.148

The mods will be downloaded automatically.
`)
    	.addField('For a complete mod list check this link:', 'https://aliexstrasza.herokuapp.com/')
	.setTimestamp()
	.setFooter('Play nice everybody!');

msg.channel.send(exampleEmbed);
   }
  
  if ( command === "fb" && msg.author.id === "268746806521888768") {
    msg.channel.send("https://www.facebook.com/mihai.pricob");
     console.log(`fb requested by ${msg.author} -got reply-`);
  } else if ( command == "fb" && msg.author.id != "268746806521888768" )
             {
              console.log(`fb requested, but wasn't the owner! -noreply-`);
             return
  }
  if ( command === "lmao" && msg.author.id === "268746806521888768") {
    msg.channel.send("", {files: ["vildred.jpeg"] } );
     console.log(`photo requested by ${msg.author}! -got reply-`);
  } else if ( command == "lmao" && msg.author.id != "268746806521888768" )
             {
              console.log(`vildred requested, but wasn't the owner! -noreply-`);
             return
  }
  //========================EXCLUSIVE COMMAND============================
  
  //=========================ONLY WRITE ABOVE============================
});
//client.login("MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc");
client.run('mfa.MjY4NzQ2ODA2NTIxODg4NzY4.X6Byew.QLSvq8jcXNFK5dyJUNcy2kQoQgc', bot=false)
