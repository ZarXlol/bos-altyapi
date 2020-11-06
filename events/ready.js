const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");

  client.user.setActivity(`${prefix}yardım - Ser Eve !`);
  console.log(`BOT: Ser Eve TARAFINDAN YAPILDI                                                               `);
};
