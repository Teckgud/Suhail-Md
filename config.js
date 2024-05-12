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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_16_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK25ZOXVGWGxldHgxd1g5ZnhQT0N1eHNSK3JHVzF5Z25OV1lISzlOdlBGMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODA0MDU0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3Mjk5N0Q0NzMwQzNFQTY5OEU0Mjg0NjUzMDQ3NjNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTUyMzM5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MDQwNTQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjg1QUFFREVBNUMyRUNEMUZBRjU3REQ3QzBFMzM1NzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NTIzMzkzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZYZjVMZmNRUUZDeTRMU1VQa1UzR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODc5YWE1OGUtZmU4ZC00NmEyLTlhOTYtNjhmZDMwM2E1MzNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgNjUsXG4gICAgICAxMzMsXG4gICAgICAyNTEsXG4gICAgICAyMCxcbiAgICAgIDk3LFxuICAgICAgMjQ4LFxuICAgICAgMjAzLFxuICAgICAgMTcsXG4gICAgICAxMDAsXG4gICAgICAyMDMsXG4gICAgICAxNjUsXG4gICAgICAxNjksXG4gICAgICAyNDEsXG4gICAgICAxODUsXG4gICAgICAzNyxcbiAgICAgIDUzLFxuICAgICAgMjM3LFxuICAgICAgMjE2LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDcyLFxuICAgICAgMjAwLFxuICAgICAgMjMzLFxuICAgICAgMTA4LFxuICAgICAgMTg4LFxuICAgICAgMjgsXG4gICAgICAxMTMsXG4gICAgICA4OSxcbiAgICAgIDE3NCxcbiAgICAgIDgyLFxuICAgICAgMTMxLFxuICAgICAgMjEzLFxuICAgICAgMTAsXG4gICAgICAxMDgsXG4gICAgICAzNixcbiAgICAgIDIyMSxcbiAgICAgIDE3NCxcbiAgICAgIDkzLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVXRkQzQTRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODA0MDU0MjA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MDQ1NzA2NjQ5NzU4OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk3igqzCo+KCqVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmYXNwNEJFTHFlZzdJR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNEplOCsrdGJtbUxxTFc4SHpxQXRQTGtYVmFJdHhacUxEOTU5eDRHQWRnYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5ZVNpWm5QVDBKekdOT2owaHA3K1lYYkZiZ1pQUDFnd1lkdWg5WWt4VDZQNFpzOENBR0hYcGpxUllDOXhpNk5VVFJNQ3JjT2RiVGFtdDZiMVdxVTdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPV01peTBNM3RWY3NWNUpXV0tsTzM3Nm1NcXZ0VWhhVEQvSHBGMGg3K0pzQlh6bHBMTXZpYVhyN0hhVUcwK2J0RXNTK1EvbTNmUWNtNEdPV1RPKzVCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODA0MDU0MjA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTUyMzM5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsvWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSy9YLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
