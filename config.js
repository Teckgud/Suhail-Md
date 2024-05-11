const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780405420";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieVhDWis3aHlROGFGRHNpUGp6Sk02VGw0Rys2bnlQRWZoTHJ4UHdTSWYvdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODA0MDU0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFNEU1NTI4OUUxNjhCNTdBREIxMzRENjJBRDkzQkExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTQ1ODQ4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MDQwNTQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjgxQ0JCMTMwREUzNTRCOURDNDQwNTBCNEZFRUYyNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDU4NDgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRFYTVUb1NtVGdHUVdkRTdfUmVsWUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNlMTBlMGMtZGMwNS00YjZkLTg0NzYtMDRiZTgzYzgwNzE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDIzNSxcbiAgICAgIDIzMSxcbiAgICAgIDU2LFxuICAgICAgMjU0LFxuICAgICAgMjI2LFxuICAgICAgODEsXG4gICAgICAyNDgsXG4gICAgICAxMjcsXG4gICAgICA2OSxcbiAgICAgIDI2LFxuICAgICAgNjQsXG4gICAgICAxMjgsXG4gICAgICAzMixcbiAgICAgIDE1NixcbiAgICAgIDcsXG4gICAgICA3OCxcbiAgICAgIDE0MSxcbiAgICAgIDE1NSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDk2LFxuICAgICAgMjI0LFxuICAgICAgMTAsXG4gICAgICA3OSxcbiAgICAgIDQ4LFxuICAgICAgMTY4LFxuICAgICAgMjQ5LFxuICAgICAgMjUxLFxuICAgICAgNzEsXG4gICAgICA2MyxcbiAgICAgIDI1MCxcbiAgICAgIDExLFxuICAgICAgMjM2LFxuICAgICAgNDAsXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDEzNyxcbiAgICAgIDI0NSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEWVgxQlZQV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgwNDA1NDIwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDQ1NzA2NjQ5NzU4OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTeKCrMKj4oKpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2Zhc3A0QkVLcWovN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0SmU4Kyt0Ym1tTHFMVzhIenFBdFBMa1hWYUl0eFpxTEQ5NTl4NEdBZGdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9DeVlLOG1TS0Y5S1B3THRGL2p3WjhXVnJSUmY1OS9mcVFCekwwL3o0K2dyM0k4VUdRV05wVFM3V3hDUVg0K1huY3NOUSt4NWpPa08xZE1YRUp0WUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlc2bVdSbXRkbWRDREVLL1lLR3FQdkRCdEdYL2hoR3lwa1N1TVFRdkpIRkovQ0E1MFY2RWZqR2l6ZFJkYUJvRWNSY3ppa09oUUVXc3hzRlJnOXk4TmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MDQwNTQyMDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0NTg0NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLL1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsvWC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
