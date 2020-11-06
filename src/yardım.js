const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#c57eba')
.setThumbnail(client.user.avatarURL)
.setAuthor('Yardım Komudu')
.addField('Komut Adı', 'Komut Açıklaması')
.addField('Komut Adı', 'Komut Açıklaması')
.setFooter('Ser Eve')
message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y', 'help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
