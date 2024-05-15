const Discord = require('discord.js')

module.exports = {
  name: "guildMemberUpdate",
  async execute(member, member2, bot) {
      bot.db.query(`SELECT * FROM antiraid WHERE guildId = "${member2.guild.id}"`, async (err, req) => {
        if (err || req.length < 1 || req[0].antirole == "off") return;;
        const addedRoles = member2.roles.cache.filter(role => !member.roles.cache.has(role.id));
        if(member2.permissions.has(Discord.PermissionsBitField.Flags.ManageChannels) || member2.permissions.has(Discord.PermissionsBitField.Flags.ManageGuild) || member2.permissions.has(Discord.PermissionsBitField.Flags.ManageMessages) || member2.permissions.has(Discord.PermissionsBitField.Flags.Administrator) || member2.permissions.has(Discord.PermissionsBitField.Flags.ManageWebhooks) || member2.permissions.has(Discord.PermissionsBitField.Flags.ManageRoles)) {
            addedRoles.forEach(r => {
                if(r.permissions.has(Discord.PermissionFlagsBits.Administrator) || r.permissions.has(Discord.PermissionFlagsBits.ManageRoles) || r.permissions.has(Discord.PermissionFlagsBits.ManageChannels) || r.permissions.has(Discord.PermissionFlagsBits.ManageGuild) || r.permissions.has(Discord.PermissionFlagsBits.ManageMessages) || r.permissions.has(Discord.PermissionFlagsBits.ManageWebhooks) || r.permissions.has(Discord.PermissionFlagsBits.ManageRoles) || channel2.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
                    member2.roles.remove(r.id)
                }
            })
        }

      })
    }
}