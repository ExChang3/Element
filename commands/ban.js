module.exports = {
    main: function(bot, msg) {
        if (msg.member.hasPermission("BAN_MEMBERS") == true) {
            const mention = msg.mentions.users.first()
            var banPerms = msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')
            if (!mention) {
                msg.channel.send('Mention A User You Would Like To Ban')
            }
            else {
                if (!banPerms) {
                    msg.channel.send("I Don't Have Enough Permissions To Ban!")
                }
                else {
                    var bannable = msg.guild.member(mention).bannable
                    if (!bannable) {
                        msg.channel.send(mention + "can't be banned! Check And See If The Bot Is Above That User In Role Hierarchy.")
                    }
                    else {
                        msg.guild.ban(mention)
                        msg.channel.send(mention + ' has been banned from the server. Bye Bye Birdie :hammer:')
                    }
                }
            }
        }
		else {
			msg.reply("I'm sorry, but you do not have the `BAN_MEMBERS` permission And I'm Not Allowed To Ban Anyone!")
		}
    },
    args: '<mention>',
    help: '*Bans a user from the server permanently unless removed*'
};
