const Discord = require('discord.js')
const bot = new Discord.Client() 

var prefix = ("+");

bot.on('guildMemberAdd', member => {

    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('id', '599169877873262593')
    const role = member.guild.roles.find("name", "Non-Approuvé")    
    member.addRole(role)
    var embed = new Discord.RichEmbed()
    .setColor('#76D880')
    .setDescription(`Hello l'ami bienvenue <@${member.user.id}> sur le serveur ${serverTag}, je t'invite a allez faire t'a carte d'identité dans #🖊-carte-identité pour avoir le fameux rôle Citoyen `)
    return welcomechannel.send({embed})
});

bot.on('guildMemberRemove', member => {

    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('id', '599169877873262593')
    var embed = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setDescription(`Ho non part pas <@${member.user.id}> tu vas beaucoup me manquer  :sob: `)
    return welcomechannel.send({embed})
});

bot.on('message', function(message) {
    if (message.content == "+purge") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERREUR: ERREUR EFFACEMENT CANAL.")})                        
        }
    }
});

bot.on('message', message => {
    if (message.content.startsWith('+suggestion')) {
    message.delete();

          const channel = message.guild.channels.find('id', '595938095531294730');
          const args = message.content.slice(12).trim().split(/ +/g);
          let suggestion = args.slice(0).join(" ");
          if (!channel) return;
  
          let embed = new Discord.RichEmbed()
          .setColor("#55FFFF")
          .setDescription('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬**«    PultionRp Suggestion    »**▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n**Suggestion par »** ' + message.author + '\n\n**Suggestion »** ' + suggestion + '\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬**«**     @everyone     **»**▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
          .setFooter('PultionRp', bot.user.avatarURL)
  
          channel.send(embed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
  
    }
  });

bot.on('ready', () => {
    console.log('PultionRp est prêt!');
});

bot.login(process.env.token);