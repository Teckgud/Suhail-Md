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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_09_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkgwY09IS1F4cHF2N3FpWk5xeTFKWXhiWjcvQTZiNklQcDg1NVc0WGxPSWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlIxa25Ka1IzVHRLR1E1SEVzLWlXM2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTkxNmZlNjMtN2E3OC00OTU2LTkxZTMtZWQyNDBlNzZhODFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyNSxcbiAgICAgIDMyLFxuICAgICAgMjIsXG4gICAgICAyNDUsXG4gICAgICAyMjAsXG4gICAgICAyMjQsXG4gICAgICA3MSxcbiAgICAgIDEzOCxcbiAgICAgIDIzMCxcbiAgICAgIDIxMixcbiAgICAgIDEyNSxcbiAgICAgIDIxMixcbiAgICAgIDI0MyxcbiAgICAgIDIzNSxcbiAgICAgIDU5LFxuICAgICAgOTAsXG4gICAgICAxMjEsXG4gICAgICAxMTUsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA3NyxcbiAgICAgIDEwNSxcbiAgICAgIDE0NixcbiAgICAgIDEwMSxcbiAgICAgIDIyLFxuICAgICAgNjMsXG4gICAgICAzMixcbiAgICAgIDQ5LFxuICAgICAgMTA4LFxuICAgICAgMTk5LFxuICAgICAgNjIsXG4gICAgICAxOTcsXG4gICAgICAyMTMsXG4gICAgICA3NSxcbiAgICAgIDU1LFxuICAgICAgMjI0LFxuICAgICAgMjI3LFxuICAgICAgODAsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZVDgzWU45R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3ODY5NTc0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTczNDIzMDE3NDExMDg6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGlsbmVtXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnltMThrSEVQYTgvN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJleTdKR0p3ZndnY080YzhWVGZnSmduQmxlaWtLVWhLbGYvL2R2dStBY0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFYMXQ4K1A1NUtxN3V5MVN4eExIZytjcGxHWnNuSlZWN1c2YlRQMENSZXlYZElIa2ZwZ2dmTFdKQXRybUZGSGJTY2JUOWFMTWVYOGM4dGhvYTlieURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1Ed2d5N1BkVy9mQ1h0aXdwYjFyNTVOZ3prNEtxaHNNanVYc0MzMzV1SytjdEhTaVFlSGJOU3NJVC9PTXF1bzhEUVJWNjVoaGRiMng5WXh1OEZwQ2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzg2OTU3NDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQ2MTc1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlGNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUY1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZjVGR0h1L1FCZHhQdEpwbk1pT0lENUQxZFlzWUZtTnZuSG5QZHBEL1JXZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDMzNTcwNjUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Lilnem",


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
