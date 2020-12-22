/*
* "Jangan modal nama doang bro!!!"
* (Scriptnya XP-TN)
* jangan ubah semuanya kecuali nama bot instagram yt itu ajah yg lain jangan!!!
* hargai pembuat skrip woy!!!
* reupload izin anjg gua gua cape buat nya!!
* ini script pribadi gua!!
*/
const XPTN = '🍁GUSTIAN BOT🍁'; // Nama Bot Whatsapp
const instagram = 'https://instagram.com/ahmad_gustian_adi_nugrha'; // Nama Instagramlu cok
const nomer = 'https://Wa.me/+6282137409151'; // Nomor whatsapplu cok
const aktif = 'Tergantung jaringan'; // Kapan bot lu aktif
const groupwa = 'https://chat.whatsapp.com/LA5k2AFAjrbAMcn7HXSQgP'; // OFFICIAL GRUP LU 1
const youtube = 'https://youtube.com/channel/UC_AT8gCroj0-ZwNEc__2QMw'; // OFFICIAL GRUP LU 2
//
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const xp = require("./lib/xp.js");
const donate = require("./lib/donate.js");
const info = require("./lib/info.js");
const xp1 = require("./lib/xp1.js");
const xp2 = require("./lib/xp2.js");
const xp3 = require("./lib/xp3.js");
const xp4 = require("./lib/xp4.js");
const xp5 = require("./lib/xp5.js");
const xp6 = require("./lib/xp6.js");
const speed = require('performance-now');
const sellernomor = require("./lib/sellernomor.js");
const readTextInImage = require('./lib/ocr')
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:XP Ganss\n' // full name
            + 'ORG:Owner XPTN Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6289655478810:+62 896-5547-8810\n' // WhatsApp ID + phone number
            + 'END:VCARD'
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
   GroupSettingChange,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] XP-TN Ready scan now!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated$`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @mragung23`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @mragung23`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   // Groups

if (text.includes(".buatgrup"))
   {
var nama = text.split(".buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("created group with id: " + group.gid)
conn.sendMessage(group.gid, "hello everyone", MessageType.extendedText) // say hello to everyone on the group

}

// FF XP-TN
if(text.includes(".cek")){
var num = text.replace(/.cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn+'@s.whatsapp.net'

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`${gg} ${exists ? " exists " : " does not exist"} on WhatsApp`, MessageType.text)
}

//Chat XP-TN
else if (text == 'assalamualaikum'){
conn.sendMessage(id, '3aalaikumsalam, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh #help' ,MessageType.text);
}
else if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'p'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'P'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Halo'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
else if (text == '.owner'){
conn.sendMessage(id, 'Owner XP-TN wa.me/+6289655478810' ,MessageType.text);
}
else if (text == 'Agung'){
conn.sendMessage(id, 'Aku BOT nya XP-TN' ,MessageType.text);
}
else if (text == 'wenda'){
conn.sendMessage(id, 'pacar owner ihh' ,MessageType.text);
}
else if (text == 'bangsat'){
conn.sendMessage(id, 'toxic terdeteksi' ,MessageType.text);
}
else if (text == 'Ngentod'){
conn.sendMessage(id, 'Pengin ngentod?' ,MessageType.text);
}
else if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
else if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
else if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik .help' ,MessageType.text);
}
else if (text == 'Hai'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == '.ttp'){
conn.sendMessage(id, ' *COMMAND PREMIUM CHAT WA https://wa.me/6289655478810* ' ,MessageType.text);
}
else if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Eoy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Hi'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Min'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Sayang'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
else if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == '.frendsowner'){
conn.sendMessage(id, 'kawan1 iskandar wa.me/+60136670107' ,MessageType.text);
}
else if (text == '.coowner'){
conn.sendMessage(id, 'kawan2 testing script wa.me/+6282232931618' ,MessageType.text);
}
else if (text == '.groupbot'){
conn.sendMessage(id, 'group bot whatsapp https://chat.whatsapp.com/GDdd0I3WlF5LnMVifmS7rN' ,MessageType.text);
}
else if (text == '.tools1'){
conn.sendMessage(id, ' *Menampilkan Fitur tools1!!!* ' ,MessageType.text);
}
else if (text == '.tools2'){
conn.sendMessage(id, ' *Menampilkan Fitur tools2!!!* ' ,MessageType.text);
}
else if (text == '.tools3'){
conn.sendMessage(id, ' *Menampilkan Fitur tools3!!!* ' ,MessageType.text);
}
else if (text == '.tools4'){
conn.sendMessage(id, ' *Menampilkan Fitur tools4!!!* ' ,MessageType.text);
}
else if (text == '.tools5'){
conn.sendMessage(id, ' *Menampilkan Fitur tools5!!!* ' ,MessageType.text);
}
else if (text == '.tools6'){
conn.sendMessage(id, ' *Menampilkan Fitur tools6!!!* ' ,MessageType.text);
}
else if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, Ketik .help/.info/.donasi Contoh .help' ,MessageType.text);
}
else if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
else if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

// Fitur

if (text.includes('.nulis')){
  var teks = text.replace(/.nulis /, '')
    axios.get('https://bangandre.herokuapp.com/nulis?teks='+teks)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
if (text.includes('~tts2')){
  var teks = text.replace(/~tts2 /, '')
    axios.get('http://scrap.terhambar.com/tts?kata=${teks}')
    .then((res) => {
      audioToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[WAIT] Searching...❗', MessageType.text)
            let hasil = hasil.from(ress, 'base64')
            conn.sendMessage(from, hasil, MessageType.audio, {ptt: true})
        })
    })
}

if (text.includes(".say")){
  const teks = text.replace(/.say /, "")
conn.sendMessage(id, teks, MessageType.text)
}

if (text.includes(".ytmp5")){
const teks = text.replace(/.ytmp5 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
else if (text == '.speed') {
const timestamp = speed();
const latensi = speed() - timestamp
conn.sendMessage(id, `PONG!!\nSpeed: ${latensi.toFixed(4)} _Second_`, MessageType.text, {quoted: m})
}
if (text.includes('.texthunder')){
  var teks = text.replace(/.texthunder /, '')
    axios.get('http://jojo-api-
