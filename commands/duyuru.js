const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require('quick.db')

exports.run = (client, message, args) => {

if(message.author.id !== ayarlar.sahip) return console.log("biri komutu denedi")

      client.users.forEach(u => {

const emd = new Discord.MessageEmbed()
.setTitle("Başlık")
.setColor("RED")
.setDescription("Açıklama")

u.send(emd).catch(err => console.log(`bir oçun dmsi kapalı`) ? console.log("bir oçun dmsi kapalı") :  null)

})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['send'],
  permlevel: 0
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};