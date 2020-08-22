const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', (ready) => console.log('why would you make me do this carps'));

client.on('message', (message) => {
  if (message.content === '!carps')
    message.channel.send(new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('Carpitty Carpitty')
      .setImage('https://cdn.discordapp.com/attachments/699222200787402762/746824608493338774/image0.png')
    );
};

client.login('put your token here');
