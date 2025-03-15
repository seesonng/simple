const axios = require('axios');
const cheerio = require('cheerio');
const fs = require("fs");

const Apk4Free = {
    async search(q) {
        const {
            data
        } = await axios.get('https://apk4free.net/?s=' + q);
        const $ = cheerio.load(data);
        const res = [];
        $('.baps > .bav').each((i, e) => {
            let obj = {};
            obj.title = $(e).find('span.title').text().trim();
            obj.link = $(e).find('a').attr('href');
            obj.developer = $(e).find('span.developer').text().trim();
            obj.version = $(e).find('span.version').text().trim();
            obj.image = $(e).find('img').attr('src').replace('150x150', '300x300');
            obj.rating = parseInt($(e).find('span.stars').attr('style').replace(/\D/g, '')) / 20;
            res.push(obj);
        });

        return res;
    },
    async download(url) {
        const {
            data
        } = await axios.get(/(download\/?)$/.test(url) ? url : url.replace(/\/$/, '') + '/download');
        const $ = cheerio.load(data);
        let obj = {};
        obj.title = $('div.pxtd > h3').text().trim();
        obj.package = $('div.pxtd > table tr:eq(0) td:eq(1)').text().trim();
        obj.version = $('div.pxtd > table tr:eq(1) td:eq(1)').text().trim();
        obj.size = $('div.pxtd > table tr:eq(2) td:eq(1)').text().trim();
        obj.requirements = $('div.pxtd > table tr:eq(3) td:eq(1)').text().trim();
        obj.url = $('div.pxtd #list-downloadlinks > li:eq(1) > a').attr('href');

        return obj;
    },
};
let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    let isUrl = (url) => {
        return url.match(
            new RegExp(
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
                "gi",
            ),
        );
    };
    let fetchBuffer = async (file, options = {}) => {
        try {
            if (isUrl(file)) {
                const buffer = await (
                    await axios.get(file, {
                        responseType: "arraybuffer",
                        ...options,
                    })
                ).data;
                return buffer;
            } else {
                const buffer = fs.readFileSync(file);
                return buffer;
            }
        } catch (e) {
            return {
                status: false,
                msg: e.message,
            };
        }
    };
    if (!text) throw `*• Example :* ${usedPrefix + command} *[url/query]*`;
    if (isUrl(text)) {
        let data = await Apk4Free.download(text)
        let buffer = await fetchBuffer(data.url);
        await conn.sendFile(m.chat, buffer, "Happymod.apk", `${Object.entries(data).map(([a, b]) => `   ◦ ${a} : ${b}`).join("\n")}`, m)
    } else {
        const search = await Apk4Free.search(text);
        console.log(search)
        await m.reply("*[ APK SEARCH ]*\nDownload: *Example: .happymod [link dibawah]*\n" + search.map(
            (a, index) => `\n=========================\n*${index + 1}.* ${a.title.toUpperCase()}\n*• link:* ${a.link}\n*• Version:* ${a.version}\n*• Image:* ${a.image}\n=========================\n`));
    }
};
handler.help = ["apkmod", "happymod"].map((a) => a + " *[search/url]*");
handler.tags = ["downloader"];
handler.command = ["apkmod", "happymod"];

module.exports = handler
