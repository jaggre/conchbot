const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%";

client.on("ready", () => {
  console.log("I am ready!");
});



client.on("message", (message) => {

const badWords = ["conch"];
    
const conchResponses = ["Maybe someday.", "Follow the seahorse.", "I don't think so.", "No." , "Yes.", "Try asking again." ];

if( badWords.some(word => message.content.startsWith(prefix + word)) ) {
  var response = conchResponses [Math.floor(Math.random()*conchResponses .length)];

            message.channel.send(response).then().catch(console.error);
  // Or just do message.delete();
}

    });
 /*   
client.on("message", (message) => {
     
    
    function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let when = randomDate(new Date(2019, 5, 23), new Date());
    
 
    const reply = ["when"];

const whenResponses = [`Ask again on ${when}`]; 
    
    if( reply.some(word => message.content.startsWith(prefix + word)) ) {
  var response = whenResponses [Math.floor(Math.random()*whenResponses .length)];

            message.channel.send(response).then().catch(console.error);
  // Or just do message.delete();
}

    

    
    

  });   */ 


client.login(process.env.BOT_TOKEN);
