const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("Trust the Magic Conch!");
});


// Conch Listener 1

client.on("message", message => {
  
  // Help command
  
  const conchHelpWords = ["help"];

  const conchHelpResponses = [
    "My prefix is '$', my commands are 'conch,''blaze,' 'jiro,' and 'when.'"
  ];

  if (conchHelpWords.some(word => message.content.includes(prefix + word))) {
    var response =
      conchHelpResponses[Math.floor(Math.random() * conchHelpResponses.length)];

    message.channel
      .send(response)
      .then()
      .catch(console.error);
    // Or just do message.delete();
  }
// Original conch Command

  const conchWords = ["conch"];

  const conchResponses = [
    "Maybe someday.",
    "Follow the seahorse.",
    "I don't think so.",
    "No.",
    "Yes.",
    "Try asking again."
  ];

  if (conchWords.some(word => message.content.includes(prefix + word))) {
    var response =
      conchResponses[Math.floor(Math.random() * conchResponses.length)];

    message.channel
      .send(response)
      .then()
      .catch(console.error);
    // Or just do message.delete();
  }

// Weed Command

  const blazeWords = ["blaze"];

  const blazeResponses = [
    "African broccoli",
    "AK47",
    "Alligator Cigarettes",
    "Ammy",
    "Amnesia",
    "Amsterdams finest",
    "Antiguan Rocket",
    "Arathi (high quality)",
    "Assbandit",
    "Barney",
    "BC",
    "Bible worksheets",
    "Binbag",
    "Bis",
    "Bishop",
    "Blifter",
    "Bloop",
    "Bob",
    "Bob Hope",
    "Bobatti",
    "Bobby Brown",
    "Boner Soup",
    "Bongo (common usage in Cairo, Egypt)",
    "Booboo sh*t (low quality) (common usage in the African American vernacular)",
    "Boogity brown (low quality)",
    "Boone",
    "Bread",
    "Brown Buddha",
    "Brown frown (low quality)",
    "Bubble kush",
    "Bud (common usage in US)",
    "Budski",
    "Burger King (with a fork being the smoking tool of choice)",
    "c-jizz",
    "cabbage",
    "Caracas (what Latinos call low-grade marijuana)",
    "Carribean cabbage",
    "CDs",
    "cess",
    "cheatham (awful-quality weed), (South African English)",
    "checkers (low quality)",
    "cheeba",
    "cheech and chong",
    "cheg (very small amount of resin)",
    "Cherry (lit end of a Cigarette, Bong, Joint, Cigar)",
    "chess (high quality)",
    "chicken",
    "Chiquitty-Freddy",
    "chocolate",
    "chronic (high quality)",
    "Chronicles of Narnia",
    "combustible herbargy",
    "comic books",
    "course notes",
    "Crop (often shortened to cro) (UK Slang)",
    "crunch",
    "curley wurley",
    "D's",
    "dagga (from Afrikaans via South Africa)",
    "dak",
    "Dan K. Buddinhash",
    "Daniel Nuggetstone",
    "dank",
    "dankinstein",
    "Dat sticky icky icky, Poo We (Snoop Dogg)",
    "Dave",
    "Detroit",
    "Devil's Lettuce",
    "diesel (low quality resin)",
    "dime (a 10 dollar sack)",
    "dirt weed (very low-quality marijuana that tastes extremely bad)",
    "discarded bibles",
    "dodo",
    "doja",
    "doobage",
    "doobie",
    "dope",
    "draw",
    "dro (derived from hydroponics)",
    "dub sack or twamp (20 dollars)",
    "dumm",
    "dunce",
    "DVD's",
    "Edwardian Morris Baskerville",
    "eighth (standard-quantity used for trading — 1/8 imperial ounce)",
    "electric puha (from puha, a plant in New Zealand)",
    "fire",
    "freakus",
    "friendship",
    "frodis (from The Monkees)",
    "funk, (Australian English, Jamaican English)",
    "Funky falafel",
    "g-regs or gregs (general or generic regulars)",
    "gangster gumbo (a mix of several people's cannabis)",
    "ganja or ganj (abbreviated) (from Hindi)",
    "gas",
    "George",
    "goo",
    "good advice (high-quality smoke)",
    "good shit",
    "goofy boots",
    "grade — good-quality bud",
    "Grandpa's medicine",
    "grapes (purple weed)",
    "grass",
    "green",
    "Green crack",
    "green tea",
    "greenest of the goop (high quality)",
    "greenest of the green",
    "grefa",
    "Guitar Hero",
    "gwaai (pron. ga-why) (South Afican slang)",
    "harris",
    "hash (hashish, Arabic for grass)",
    "haskell",
    "hay",
    "headies",
    "hemp",
    "herb",
    "herbsteins",
    "heyman",
    "holden",
    "honey boo boo",
    "Hungarian Hummus",
    "hydro",
    "ice cream",
    "insangu",
    "instaga",
    "IZM",
    "Jay Tokenstein",
    "Jazz Cabbage",
    "Jazz Cigarette",
    "Jean",
    "Jibber",
    "Jimmy",
    "Jobb (God like)",
    "Jobb The Finest there is",
    "Jupiter's beard",
    "Kevin Bacon (euphemism for kine bud)",
    "kibs or kibbies (short for kine bud)",
    "killara",
    "killer herb, or killa (very common in Texas)",
    "kind (short for kine bud),",
    "kine bud (though commonly misinterpreted as Kind Bud, kine is the Hawaiian word for excellent)",
    "krinze",
    "Kush, (named for the Kush region of Afghanistan.)",
    "kushempeng",
    "lamb's bread",
    "lef",
    "lemon G",
    "little beasts (nuggets)",
    "loud (high-grade)",
    "lowes",
    "lula",
    "magic",
    "magic cancer",
    "marijuana (originally subcultural)",
    "Mary Jane",
    "mbanje (Zimbabwe language Shona, Mannie Fresh or mannie)",
    "Mecca (low-grade)",
    "Mexican kilobrick (low-grade, highly-compressed import)",
    "Mezz (from Mezz Mezzrow, prominent jazz era dealer)",
    "Microwave popcorn",
    "mids (middle quality)",
    "moss",
    "mota/muta",
    "muggles",
    "nay nay famous",
    "newguys",
    "nick or nickel (a 5-dollar sack)",
    "nodge (small amount of hashish)",
    "nug or nugget or nugs",
    "Old Toby",
    "outdo",
    "Pack (ie, loud pack)",
    "pakalolo (from Hawaii)",
    "Party Parsley",
    "Plingots (or The Old Plingots)",
    "Poop",
    "Portuguese plant",
    "Pot",
    "ramín",
    "reefbuds",
    "reefer",
    "Reggae cigarette",
    "Reggie Miller (regs, low grade)",
    "regs (regular strength)",
    "rodeo",
    "Sampson",
    "sappad (low quality)",
    "schwag",
    "schwanal",
    "Schweed",
    "schwugs (middle-quality – portmanteau of schwag and nugs)",
    "scooby-doo (common usage on UEA campus, England)",
    "scratchy",
    "sha-bang-a-bang-a",
    "shake (leaf and seeds at bottom of bag)",
    "Shakira",
    "Shamya (bad weed)",
    "shuzzit",
    "Silly Spinach",
    "sinsemilla or sinse",
    "skunk",
    "smeed (northwest Ohio),",
    "smookey smoke",
    "snickle-fritz (low-quality bud)",
    "soap bar (low-quality hash)",
    "solid (resin)",
    "spank",
    "squirter-farter",
    "stank",
    "sticks",
    "sticky-icky-icky",
    "stuff",
    "sweet G",
    "tacos (CHI)",
    "taima (Japanese origin)",
    "tapes",
    "tea",
    "tiger fear",
    "tooka",
    "tree",
    "trees",
    "trizer",
    "tweed",
    "wacky tobaccy",
    "weed",
    "wheat",
    "widdle (common in Bergen County, New Jersey)",
    "wizard (specifically high-grade cannabis, common usage in Pittsburgh, PA, USA)",
    "X box",
    "Yarndi (an Australian aboriginal term for weed)",
    "zig-zag",
    "Zoot (invented in Norwich in 1600)"
  ];

  if (blazeWords.some(word => message.content.includes(prefix + word))) {
    var response =
      blazeResponses[Math.floor(Math.random() * blazeResponses.length)];

    message.channel
      .send(`Smoke that ${response}.`)
      .then()
      .catch(console.error);
    // Or just do message.delete();
  }

});



client.on("message", message => {
  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  let conchDate = randomDate(
    new Date(2019, 5, 23),
    new Date()
  ).toLocaleDateString();

  const reply = ["when"];

  const whenResponses = [`Ask again on ${conchDate}`];

  if (reply.some(word => message.content.includes(prefix + word))) {
    var response =
      whenResponses[Math.floor(Math.random() * whenResponses.length)];

    message.channel
      .send(response)
      .then()
      .catch(console.error);
    // Or just do message.delete();
  }
});

client.on("message", message => {
  const uwuWords = ["uwu"];

  const uwuResponses = [
    "The UWU POLICE are on the scene! PLEASE KEEP YOUR UWUs TO YOURSELVES AT ALL TIMES."
  ];

  const uwuimageResponses = [{ files: ["https://i.imgur.com/dJrpw2t.jpg"] }];

  /* TO ADD: Random Image Selection
          "https://i.imgur.com/RRyVUxw.png"  */

  if (uwuWords.some(word => message.content.includes(prefix + word))) {
    var response =
      uwuResponses[Math.floor(Math.random() * uwuResponses.length)];

    var uwus =
      uwuimageResponses[Math.floor(Math.random() * uwuimageResponses.length)];
    message.channel
      .send(response, uwus)
      .then()
      .catch(console.error);
    // Or just do message.delete();
  }
});


client.on("message", message => {
 
});



// Fella Shit Down Here

client.on("message", message => {





  var alexWords = ["alex"];

  var alexResponses = [
    "now I don't hate minorities but ",
    "uhh dude women suck",
    "uhh dude broads suck",
    "nah dude i'm down to my last three grams bro",
    "FUCK THIS CCP PROPOGANDA",
    "broads ",
    "dude I wouldn't sell opiods, it's against my conscious.",
    "ben gay "
  ];

  if (alexWords.some(word => message.content.includes(prefix + word))) {
    
    var response =
      alexResponses[Math.floor(Math.random() * alexResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);

     // Or just do message.delete();
  }
  var benWords = ["ben"];

  var benResponses = [
    "I need to ask you a huuuuge favour ",
    "I need to use your bathroom",
    "that's definitely the best meme format of the past",
    "Arcadia",
    "bro, stop talking about my mom",
    "*takes phonecall*",
    "gonna swing by my carrel and get some work done",
    "my thesis is really coming along",
    "yeah, i've got discord up right now",
    "Nothing beats Nebraska",
    "Dude I hate LA",
    "no cap",
    "word"
  ];

  if (benWords.some(word => message.content.includes(prefix + word))) {
    
    var response =
      benResponses[Math.floor(Math.random() * benResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);

     // Or just do message.delete();
  }
  
  var dashWords = ["dash"];

  var dashResponses = [
    "chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies chicken tendies ",
    "tahir ok just shut up about quincy dude",
    "yeah i'll just stick to water tonight guys",
    "anyone want a glass of milk?",
    "thaaaaank you",
    "What's the deal with music?",
    "anyone want a firecracker?"
    
  ];

  if (dashWords.some(word => message.content.includes(prefix + word))) {
    
    var response =
      dashResponses[Math.floor(Math.random() * dashResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);

     // Or just do message.delete();
  }


// Drink Command. Bot that mimics ed, commanding someone to drink. 
// Ver 1. Random fella call out
// Ver 2. 15 minutes later it tells you to scull your drink

var chugWords = ["drink"]

var fellaNames =[
  "Alex",
  "Ben",
  "Dash",
  "Ed",
  "Jake",
  "Jiro",
  "Mark",
  "Moh",
  "Rob",
  "Tahir",
  "Tim"
];


if (chugWords.some(word => message.content.includes(prefix + word))) {

  var fellaChug =
fellaNames[Math.floor(Math.random() * fellaNames.length)];

message.channel
.send(`${fellaChug}, drink.`)
.then()
.catch(console.error)

}

  var edWords = ["ed"];


  var edResponses = [
    "Sam, drink",
    "On Jeff",
    "bruh",
    "You gotta come to the castle",
    "If we're going to drink, we're going to *drink*",
    "Does anyone have any coke?"
  ];

  if (edWords.some(word => message.content.includes(prefix + word))) {

    var response =
      edResponses[Math.floor(Math.random() * edResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);

     // Or just do message.delete();
  }
  var jakeWords = ["jake"];

  var jakeResponses = [
    "Coachella",
    "bro I was so high",
    "I know Santa Ono dude",
    "does anyone have a switch?",
    "dude the alibi room",
    "this beer isn't that gross",
    "fuck",
    "MY FUCKING DAD"
  ];

  if (jakeWords.some(word => message.content.includes(prefix + word))) {
    


    var response =
      jakeResponses[Math.floor(Math.random() * jakeResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);
  

     // Or just do message.delete();
  }
  var jiroWords = ["jiro"];

  var jiroResponses = [
    "I like porn. ",
    "clit ",
    "gay ",
    "Obama bin Epstein ",
    "We all vote Biden ",
    "Porn gay. ",
    "Riley Reid ",
    "cum ",
    " ",
    "Porn gay. ",
    "cum ",
    "Riley Reid ",
    "cum in face ",
    "I am christ. ",
    "ben mom ",
    "ben gay "
  ];

  if (jiroWords.some(word => message.content.includes(prefix + word))) {
  

    var response =
      jiroResponses[Math.floor(Math.random() * jiroResponses.length)];

      message.channel
      .send(response.repeat(jiroResponses.length, 0))
      .then()
      .catch(console.error);

      

     // Or just do message.delete();
  }

  var tahirWords = ["tahir","ty"];

  var tahirResponses = [
    "Sorry dude just at the gym right now",
    "Hey man, sorry I gotta go to this networking thing. ",
    "Sorry dude just at a meeting right now",
    "Sorry dude just gotta meet with the investment committee right now",
    "Dude, RBC is such a good client.",
    "What stocks are we picking fellas?",
    "I just spent $1000 on a J. Crew Sale ",
    "Dude, the AMS."
  ];

  if (tahirWords.some(word => message.content.includes(prefix + word))) {
  

    var response =
      tahirResponses[Math.floor(Math.random() * tahirResponses.length)];

      message.channel
      .send(response)
      .then()
      .catch(console.error);

      

     // Or just do message.delete();
  }

});


client.login(process.env.BOT_TOKEN);
