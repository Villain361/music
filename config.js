module.exports = {
  TOKEN: "", 
  language: "en",
  ownerID: ["1238074550097543201", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/y9tUcrb536",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Hunter",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 80,
      secure: false
    }
  ]
}
