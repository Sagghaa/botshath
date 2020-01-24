import * as Discord from "discord.js";
import * as config from "./config.json";

const client = new Discord.Client();

let akhat = false;

client.login(config.token);

client.on("ready", async () => {
    console.log("Ready!");
});

client.on("message", async (message: Discord.Message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if (message.content === "!toggle") akhat = !akhat;
    else if (message.content === "!roast") {
        const choice = Math.floor(Math.random() * 11) + 1;
        switch(choice) {
            case 1:
                await message.channel.send("Stfu u dumb ass harvard sweatshirt wearin ass too retarded to go to harvard lookin ass");
                break;
            case 2:
                await message.channel.send("I ain't messin' with these guys");
                break;
            case 3:
                await message.channel.send("Get outta here you muster");
                break;
            case 4:
                
                await message.channel.send("Kill yourself, gimme my beta dooklet!");
                break;
            case 5:
                await message.channel.send("You have no rights, you moor");
                break;
            case 6:
                if(message.member.user.username == "Kid from Hyderabad (yash)")
                    await message.channel.send("Shut up, you unironically use airpods");
                else if(message.member.user.username == "Akshath")
                    await message.channel.send("Shut up, you unironically use wired headphones")
                else
                    await message.channel.send("Shut up, you unironically use galaxy buds");
                break;
            case 7:
                await message.channel.send("Go get some ketchup, yes sir");
                break;
            case 8:
                await message.channel.send("Go commit sudoku");
                break;
        }	
    }
    else if(message.content.match(/[aou]/gi)) {
        const msg = message.content
            .replace(/a/gi, "ä")
            .replace(/o/gi, "ö")
            .replace(/u/gi, "ü");
        await message.channel.send("Oh my, did you maybe mean:\n" + msg);
    }
})