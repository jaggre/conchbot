const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {

const badWords = ["conch"];
    
const conchResponses = ["Maybe someday.", "Follow the seahorse.", "I don't think so.", "No." , "Yes.", "Try asking again." ];

if( badWords.some(word => message.content.includes(word)) ) {
  var response = conchResponses [Math.floor(Math.random()*conchResponses .length)];

            message.channel.send(response).then().catch(console.error);
  // Or just do message.delete();
}

    });
    
    


client.login();