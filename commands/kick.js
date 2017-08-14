module.exports = {
    main: function(bot, msg) {
        if (msg.member.hasPermission("KICK_MEMBERS") == true) {
            const mention = msg.mentions.users.first();
            var kickPerms = msg.guild.member(bot.user).hasPermission('KICK_MEMBERS')
            if (!mention) {
                msg.channel.send('Please mention a user, that you would like to kick from the server.')
            }
            else {
                if (!kickPerms) {
                    msg.channel.send("I Don't Have The Permissions To Kick A User From The Server!")
                }
                else {
                    var kickable = msg.guild.member(mention).kickable
                    if (!kickable) {
                        msg.channel.send(mention + " isn't kickable.Be Sure The Bot Is Above The User In Role Hierarchy ")
                    }
                    else {
                        msg.guild.member(mention).kick()
                        msg.channel.send(mention + ' has been kicked from the server. farewell friend.')
                    }
                }
            }
        }
		else {
			msg.reply("I'm sorry, but you do not have the `KICK_MEMBERS` permission to be able to use this command")
		}
    },
    args: '<mention>',
    help: '*Kicks a user*'
};
