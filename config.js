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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717869574";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_51_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDgxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo4SDlwcXFWZGd5R2tFcnRIL011STcycmJkYVBDZVRrNEd3OGMzRlkyem89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJaQmNLZ09XVE5lVTVnWi14alVkTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDNiOGIxMzAtZjkwOC00NjJjLWEyMzAtZmNkNTM0MzcwOTE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDEwNixcbiAgICAgIDEwLFxuICAgICAgMTU5LFxuICAgICAgMTI4LFxuICAgICAgODAsXG4gICAgICAxNjUsXG4gICAgICA0NCxcbiAgICAgIDg0LFxuICAgICAgNDIsXG4gICAgICAxMzUsXG4gICAgICAxODIsXG4gICAgICAyNTIsXG4gICAgICAyNTIsXG4gICAgICAxMjgsXG4gICAgICA3NixcbiAgICAgIDYwLFxuICAgICAgMTM2LFxuICAgICAgMTMsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxMCxcbiAgICAgIDE3MyxcbiAgICAgIDExMixcbiAgICAgIDIxNSxcbiAgICAgIDEzNSxcbiAgICAgIDIxOSxcbiAgICAgIDIwLFxuICAgICAgMjI1LFxuICAgICAgMjI1LFxuICAgICAgNzcsXG4gICAgICAzLFxuICAgICAgMTY5LFxuICAgICAgMjAzLFxuICAgICAgMTgwLFxuICAgICAgNjYsXG4gICAgICAxMTgsXG4gICAgICAyMixcbiAgICAgIDgwLFxuICAgICAgMTMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdUTFZXR0pIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc4Njk1NzQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzM0MjMwMTc0MTEwODoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMaWxuZW1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONm0xOGtIRU1HcHBMSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImV5N0pHSndmd2djTzRjOFZUZmdKZ25CbGVpa0tVaEtsZi8vZHZ1K0FjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGdTa0tyNVpTWVQ3SHdOSTZUVkFXWlI4WERqV2hMenA3QzYzQnJFT0FjZ1MyYThlb09oOU1GYVFQc3k1eHhmdy81R0lFbFN2a2drWFFRVEhxbnRnQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTWNES1N6eDF5T0d6ZnhMMlZ0RFZQN1ZrdDdCRHROZEJxV2M2akhLTE91VWxLQ3lVcXpVU1N4Sy9GZU1ZZGV0ekYyL3NOZ0pHQXZNL0g5SjRNVDJxaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3ODY5NTc0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MDY1NDc2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
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
