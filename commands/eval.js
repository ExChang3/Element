module.exports = {
  main: (bot, msg) => {
	if (msg.author.id !== bot.OWNERID) return;
    try {
      var output = eval(msg.content)
      msg.channel.send('**Output:** ' + output)
      return
    }
    catch (error) {
      msg.channel.send('**Error:** ```' + error + '```')
      return
    }
  },
  hide: true
} 
