const moment = require("moment-timezone");
const PhoneNumber = require("awesome-phonenumber");
const fs = require("fs");
const fetch = require("node-fetch");
const os = require("os");
module.exports = {
    help: ["menu"].map((a) => a + " *[view main menu]*"),
    tags: ["main"],
    command: ["menu"],
    code: async (m, {
        conn,
        usedPrefix,
        command,
        args
    }) => {
        const perintah = args[0] || "all";
        const tagCount = {};
        const tagHelpMapping = {};
        const user = global.db.data.users[m.sender];

        Object.keys(global.plugins)
            .filter((plugin) => !plugin.disabled)
            .forEach((plugin) => {
                const tagsArray = Array.isArray(global.plugins[plugin].tags) ?
                    global.plugins[plugin].tags : [];

                if (tagsArray.length > 0) {
                    const helpArray = Array.isArray(global.plugins[plugin].help) ?
                        global.plugins[plugin].help : [global.plugins[plugin].help];

                    tagsArray.forEach((tag) => {
                        if (tag) {
                            if (tagCount[tag]) {
                                tagCount[tag]++;
                                tagHelpMapping[tag].push(...helpArray);
                            } else {
                                tagCount[tag] = 1;
                                tagHelpMapping[tag] = [...helpArray];
                            }
                        }
                    });
                }
            });

        let help = Object.values(global.plugins)
            .filter((plugin) => !plugin.disabled)
            .map((plugin) => {
                return {
                    help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
                    tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                    prefix: "customPrefix" in plugin,
                    limit: plugin.limit,
                    premium: plugin.premium,
                    enabled: !plugin.disabled,
                };
            });

        if (perintah === "tags") {
            const daftarTag = Object.keys(tagCount)
                .sort()
                .join(`\n    ◦ ${usedPrefix + command} `);
            const more = String.fromCharCode(8206);
            const readMore = more.repeat(4001);
            let _mpt;
            if (process.send) {
                process.send("uptime");
                _mpt =
                    (await new Promise((resolve) => {
                        process.once("message", resolve);
                        setTimeout(resolve, 1000);
                    })) * 1000;
            }
            let mpt = clockString(_mpt);
            let name = m.pushName || conn.getName(m.sender);
            let prn = thumb;
            let fitur = Object.values(plugins)
                .filter((v) => v.help && !v.disabled)
                .map((v) => v.help)
                .flat(1);
            let popular = Object.keys(db.data.respon).map((a) => ({
                ...db.data.respon[a],
                command: a
            })).sort((a, b) => b.total - a.total)
            let syaii = `Hi✨@${m.sender.split("@")[0]}
 Welcome to Dashboard Bot !

*–  I N T R O  - D U C T I O N*

 my name is Nazir *( WhatsApp bot )*, who will help you in many ways on WhatsApp.
 
 –  *I N F O - B O T*

┌  ◦  Bahasa Pemrograman : Javascript
│  ◦  Conecting To : baileys@latest
│  ◦  Moderator : Nazir
│  ◦  Wa-web Version : ${conn.ws.config.version}
└  ◦  Browsers : ${conn.ws.config.browser[0]}

┌  ◦  Running - on : ${process.env.USER == "root" ? "vps" : process.env.USER === "container" ? "panel" : "Hosting/local"}
│  ◦  Node Version : ${process.version}
│  ◦  Run-time  : ${Func.toTime(process.uptime() * 1000)}
│  ◦  Memory : ${Func.formatSize(require("os").totalmem() - require("os").freemem())} / ${Func.formatSize(require("os").totalmem())}
└  ◦ Total User : ${Func.h2k(Object.keys(db.data.users).length)}

*– I N F O - U S E R*

┌  ◦  Name : ${m.name}
│  ◦  Device : ${m.device}
│  ◦  Limit : ${db.data.users[m.sender].limit}
└  ◦  Status : ${!db.data.users[m.sender].registered  ? "Not Registered" : global.owner.includes(m.sender.split("@")[0]) ? "Developer Bot" : db.data.users[m.sender].premium ? "Premium User" : "Free User" }

If you find a bug in this bot, please contact the bot owner.

*– L I S T - M E N U*

    ◦ ${usedPrefix  + command} all
    ◦ ${usedPrefix  + command} ${daftarTag}

© Simple WhatsApp bot by Nazir👑`;

            conn.sendMessage(
                m.chat, {
                   text: syaii,
                   contextInfo: {
                     mentionedJid: [m.sender],
                     externalAdReply: {
                        title: namebot,
                        body: "https://whatsapp.com/channel/0029Vb3LR5XD38CUOYS3Ry2B",
                        mediaType: 1,
                        thumbnailUrl: thumb,
                        renderLargerThumbnail: true
                     }
                  }
                }, {
                    quoted: fkontak,
                },
            );
        } else if (tagCount[perintah]) {
            const daftarHelp = tagHelpMapping[perintah]
                .map((helpItem, index) => {
                    return `${helpItem}`;
                })
                .join("\n    ◦ ");
            let syaii = `🍟 Hi @${m.sender.split("@")[0]}
 Welcome to Dashboard Bot !

*–  I N T R O  - D U C T I O N*

 my name is nazir
 your virtual assistant *( WhatsApp bot )*, who will help you in many ways on WhatsApp.
 
 –  *I N F O - B O T*

┌  ◦  Bahasa Pemrograman : Javascript
│  ◦  Conecting To : baileys@latest
│  ◦  Moderator : Nazir
│  ◦  Wa-web Version : ${conn.ws.config.version}
└  ◦  Browsers : ${conn.ws.config.browser[0]}

┌  ◦  Running - on : ${process.env.USER == "root" ? "vps" : process.env.USER === "container" ? "panel" : "Hosting/local"}
│  ◦  Node Version : ${process.version}
│  ◦  Size Script : 515.42KB
│  ◦  Run-time  : ${Func.toTime(process.uptime() * 1000)}
│  ◦  Memory : ${Func.formatSize(require("os").totalmem() - require("os").freemem())} / ${Func.formatSize(require("os").totalmem())}
└  ◦ Total User : ${Func.h2k(Object.keys(db.data.users).length)}

*– I N F O - U S E R*

┌  ◦  Name : ${m.name}
│  ◦  Device : ${m.device}
│  ◦  Limit : ${db.data.users[m.sender].limit}
└  ◦  Status : ${!db.data.users[m.sender].registered  ? "Not Registered" : global.owner.includes(m.sender.split("@")[0]) ? "Developer Bot" : db.data.users[m.sender].premium ? "Premium User" : "Free User" }
 
*– 乂 M E N U - ${perintah.split("").join(" ").toUpperCase()}*
                    
    ◦ ${daftarHelp}
    
© Simple WhatsApp bot by Nazir👑`;

            conn.sendMessage(
                m.chat, {
                   text: syaii,
                   contextInfo: {
                     mentionedJid: [m.sender],
                     externalAdReply: {
                        title: namebot,
                        body: "",
                        mediaType: 1,
                        thumbnailUrl: thumb,
                        renderLargerThumbnail: true
                     }
                  }
                }, {
                    quoted: fkontak,
                },
            );
        } else if (perintah === "all") {
            let name = m.pushName || conn.getName(m.sender);
            const more = String.fromCharCode(8206);
            const readMore = more.repeat(4001);
            let number = 0;
            const allTagsAndHelp = Object.keys(tagCount)
                .map((tag) => {
                    const daftarHelp = tagHelpMapping[tag]
                        .map((helpItem, index, i) => {
                            return `${usedPrefix + helpItem}`;
                        })
                        .join("\n    ◦ " + "");
                    return `*– 乂 M E N U - ${tag.split("").join(" ").toUpperCase()}*
                    
    ◦ ${daftarHelp}
    
 `;
                })
                .join("\n");
            let syaii = `Hi👑 @${m.sender.split("@")[0]}
 Welcome to Dashboard Bot !

*–  I N T R O  - D U C T I O N*

 my name is Nazir
 your virtual assistant *( WhatsApp bot )*, who will help you in many ways on WhatsApp.
 
 –  *I N F O - B O T*

┌  ◦  Bahasa Pemrograman : Javascript
│  ◦  Conecting To : baileys@latest
│  ◦  Moderator : nazir
│  ◦  Wa-web Version : ${conn.ws.config.version}
└  ◦  Browsers : ${conn.ws.config.browser[0]}

┌  ◦  Running - on : ${process.env.USER == "root" ? "vps" : process.env.USER === "container" ? "panel" : "Hosting/local"}
│  ◦  Node Version : ${process.version}
│  ◦  Run-time  : ${Func.toTime(process.uptime() * 1000)}
│  ◦  Memory : ${Func.formatSize(require("os").totalmem() - require("os").freemem())} / ${Func.formatSize(require("os").totalmem())}
└  ◦ Total User : ${Func.h2k(Object.keys(db.data.users).length)}

*– I N F O - U S E R*

┌  ◦  Name : ${m.name}
│  ◦  Device : ${m.device}
│  ◦  Limit : ${db.data.users[m.sender].limit}
└  ◦  Status : ${!db.data.users[m.sender].registered  ? "Not Registered" : global.owner.includes(m.sender.split("@")[0]) ? "Developer Bot" : db.data.users[m.sender].premium ? "Premium User" : "Free User" }

${allTagsAndHelp}

© Simple WhatsApp by Nazir👑`;
            conn.sendMessage(
                m.chat, {
                   text: syaii,
                   contextInfo: {
                     mentionedJid: [m.sender],
                     externalAdReply: {
                        title: namebot,
                        body: "https://whatsapp.com/channel/0029Vb3LR5XD38CUOYS3Ry2B",
                        mediaType: 1,
                        thumbnailUrl: thumb,
                        renderLargerThumbnail: true
                     }
                  }
                }, {
                    quoted: fkontak,
                },
            );
        }
    },
    register: false,
};

function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
