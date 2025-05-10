let { Scraper, Uploader } = require("akiraa-scrape");
const moment = require("moment-timezone");

/*--------[ OWNER SETTING ]------------*/
global.owner = ["212625457341"];
global.mods = ["212625457341"]; // Moderator
global.prems = ["212625457341"]; // Premium
global.numberbot = "212625457341";
global.nameowner = "AHMED ALIGUE";
global.nomorown = "212625457341";


/*--------[ BOT SETTING ]------------*/
global.namebot = "SENKU BOT";
global.swa = "wa.me/6656756478656";
global.version = "1.0.0";
global.wm = "© SENKU BOT";
global.isPairing = true;
global.wait = "*( Loading )* Plase Wait...";
global.eror = "*Error System*";
global.done = `*Success Result*\n© *SENKU BOT*`;
global.maxwarn = '3' // Peringatan maksimum Warn
global.packname = "© Nazir";
global.author = `Time : ${moment.tz("Asia/Makassar")}`;

/*--------[ MY LINK SETTING ]------------*/
global.mail = '212625457341' 
global.sgc = "https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u";
global.sourceUrl = "https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u";
global.gc = 'https://whatsapp.com/channel/0029Vay1N34Ae5VthwAYxi0u

/*--------[ THUMBNAIL SETTING ]------------*/
global.thumb = "https://qu.ax/aJEAs.jpg";
//thumb adalah thumbail menu, dan lain lain
global.icon = "https://qu.ax/aJEAs.jpg";
//icon adalah pp kosong


/*--------[ FUNCITION SETTINGS ]------------*/
global.Uploader = require(process.cwd()+"/lib/uploader.js");
global.Func = new (require(process.cwd() + "/lib/func"))();
global.fetch = require("node-fetch");
global.axios = require("axios");
global.cheerio = require("cheerio");
  
global.Scraper = new Scraper();
global.gconly = false; //ini khusus group dan tidak bisa digunakn di private chat
global.formMe = false; //ini untuk mencegah pesan membalas diri sendiri
global.captcha = true; //ini register versi cacptha
global.menu = "button";


/*--------[ QUOTED SETTINGS ]------------*/
global.fakestatus = (txt) => {
  return {
    key: {
      remoteJid: "0@s.whatsapp.net",
      participant: "0@s.whatsapp.net",
      id: "",
    },
    message: {
      conversation: txt,
    },
  };
};

global.fkontak = {
key: {
          participants: "212625457341@s.whatsapp.net",
          remoteJid: "status@broadcast",
          fromMe: false,
          id: "Halo",
        },
        message: {
          contactMessage: {
            vcard: `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:y
item1.TEL;waid='212625457341':'212625457341'
item1.X-ABLabel:Ponsel
END:VCARD`,
          },
        },
        participant: "212625457341@s.whatsapp.net",
      };
      
      
/*=====[ NEWWESTLATER SETTINGS]==========*/
global.textsaluran = "SENKU BOT";
global.saluran = "120363368805444998@newslette";

global.capitalize = (str) => {
return str.charAt(0).toUpperCase() + str.slice(1);
};

global.lolhuman = "Akiraa";

/*=====[ RPG SETTINGS ]==========*/
global.dash = "✧────···[ *SENKU MENU* ]···────✧";
global.htki = "*––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––*"; // Hiasan Title  (KANAN)
global.multiplier = 100;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✨",
      money: "🪙",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

global.doc = pickRandom([
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/msword",
  "application/pdf",
]);

const _uptime = process.uptime() * 1000;

global.tanggal = async (numer) => {
 Here is the rewritten array in Arabic:

const myMonths = [
  "يناير", 
  "فبراير", 
  "مارس", 
  "أبريل", 
  "مايو", 
  "يونيو", 
  "يوليو", 
  "أغسطس", 
  "سبتمبر", 
  "أكتوبر", 
  "نوفمبر", 
  "ديسمبر",
];

Note that Indonesian month names you provided were rewritten to standard Arabic month names. Let me know if you need any adjustments!

  const myDays = [
  "الأحد", 
  "الاثنين", 
  "الثلاثاء", 
  "الأربعاء", 
  "الخميس", 
  "الجمعة", 
  "السبت", 
];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;
  const time = require("moment").tz("Asia/Makassar").format("DD/MM HH:mm:ss");
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor((d * 1 + gmt) / 84600000) % 5
  ];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
};

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
let fs = require("fs"); let file = require.resolve(__filename); 
fs.watchFile(file, () => {
  fs.unwatchFile(file); console.log("Update config.js"); delete 
  require.cache[file]; require(file);
});
  
