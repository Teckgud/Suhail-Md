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
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_54_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm91YThzOHR6MjdmMjNNWjE2MjNPZURiZmtDMXUyK3J0RjJBOFNxV1Z6OWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzgwNDA1NDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNzQ2NUU0MTU0NzUwODYyRERDQzFFODQ3QzJDQjUwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU5Mjg4NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODA0MDU0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyOTIwNkM3MkYzRTg3Q0ZCOTg3MDVBQ0EzNkZCMDMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTkyODg1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqVkpud2p3aVFOV1I2dDhuQjNWSjhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1ZjM0YjgzLWRmNmUtNGEzMC1hNzY2LTQ1NzAwYWU0YmE5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDE3LFxuICAgICAgMTIyLFxuICAgICAgMTA3LFxuICAgICAgMTA0LFxuICAgICAgMTc0LFxuICAgICAgNDMsXG4gICAgICAxODksXG4gICAgICAxNjAsXG4gICAgICAzNSxcbiAgICAgIDI1MixcbiAgICAgIDE2NyxcbiAgICAgIDE1NyxcbiAgICAgIDYyLFxuICAgICAgMjE2LFxuICAgICAgNyxcbiAgICAgIDE1MSxcbiAgICAgIDg2LFxuICAgICAgNjIsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgNDksXG4gICAgICA0MyxcbiAgICAgIDIyMyxcbiAgICAgIDIxNSxcbiAgICAgIDE5NyxcbiAgICAgIDg4LFxuICAgICAgMTIsXG4gICAgICAyMjYsXG4gICAgICA1NSxcbiAgICAgIDIzMSxcbiAgICAgIDg1LFxuICAgICAgMTEsXG4gICAgICAxNDQsXG4gICAgICAyNDIsXG4gICAgICAyNTMsXG4gICAgICAxNzUsXG4gICAgICA1OCxcbiAgICAgIDE1LFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjE4S1lZNllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MDQwNTQyMDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUwNDU3MDY2NDk3NTg6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTeKCrMKj4oKpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3Jhc3A0QkVKVCttN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0SmU4Kyt0Ym1tTHFMVzhIenFBdFBMa1hWYUl0eFpxTEQ5NTl4NEdBZGdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIms3U1pvQms1cGZ1MHZPbGVsWWNHcXRUdkJJQ2lDU3AyaExqMXJHbk80MjZGQ1F4dy9Zb3BuZnkyYThEUjdySnQ2eEt5U2g3Q3p1dzZBVEU2ekJBWURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhueGVVRTVFeHJONHVqSGkvQjhhbVNSc3hodkcxVGJZTEowOWRzdldjSkVINkxLbHI4dGhpenU1aFQxM2t6L3hMZjZkQUMzVEpLV0djVCtTc1NqTWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MDQwNTQyMDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1OTI4ODU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSy9YXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLL1guanNvbiI6IHt9Cn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
