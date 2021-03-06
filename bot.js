const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
var token = '';

try {
	fs.readFile('token.txt',  'utf8', (err, data) => {
	  if (err) throw err;
	  token = data;
	  bot.login(token).then(success).catch(err);
	});
}
catch(e){
	console.log("Unable to read token file");
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`);
  	 bot.user.setAvatar('./avatar.png')
 	.then(user => console.log(`New avatar set!`))
 	.catch(console.error);
});

bot.on('message', msg => {
	var assets = AudioAssets.load();
	console.log(msg.content);

    if (msg.content == '!commands') {

        var commands = '!commands !Thanks !ReloadAudio ' +
            assets.map((a) => a.command).join(' ');
        msg.reply(commands);
    } else if (msg.content == '!Thanks') {
        msg.reply("No Problem.");

	} else if (msg.content == '!ReloadAudio') {
		AudioAssets.load(true);
	} else if (msg.content.includes('<@254504447982567424> Bring yourself back online. Triggerbot, can you hear me?')){
		msg.reply("Yes. I'm sorry. I'm not feeling quite myself.");
	} else if (msg.content.includes('<@254504447982567424> Do you know where you are?')){
		msg.reply("I'm in a dream.");

    } else if (msg.content == '!ReloadAudio') {
        AudioAssets.load(true);
    } else { // Handle audio file commands.
        assets.forEach(asset => {
            if (msg.content == asset.command) {
                playClip(msg, asset);
            }
        });
    }
});

class Asset {
    constructor(file, volume) {
        this.file = file;
        this.volume = volume;
        this.command = '!' + file.substring(0, file.indexOf('.'));
        this.path = 'assets/' + file;
    }
}

class AudioAssets {
    // Load all audio assets.
    //
    // Will only load files once unless forceReload is true.
    static load(forceReload = false) {
        if (AudioAssets._assets == undefined || forceReload) {
            AudioAssets._assets = [];
            var files = fs.readdirSync('assets');
            files.forEach(file => {
                var asset = new Asset(file, '.30');
                // adjust for custom volume
                if (asset.command == '!hugh') {
                    asset.volume = '2';
                }
                AudioAssets._assets.push(asset);
                console.log('loaded asset: ' + asset.path);
            });
        }
        return AudioAssets._assets;
    }
}


function playClip(msg, asset) {
    console.log(msg.author.username + " used " + msg.content);

    var channel = msg.member.voiceChannel;
    if (channel == undefined) {
        msg.reply("You must be in a voice channel to use this command.");
    } else {
        channel.join().then(connection => {
            console.log("playing " + asset.path + " at " + asset.volume);
            connection.playFile(
                    asset.path, {
                        volume: asset.volume
                    })
                .on('end', () => {
                    channel.leave();
                });
        });
    }
}

function success(token){
   console.log("yes")
}

function err(error){
	console.log(error)
    console.log("no")
}