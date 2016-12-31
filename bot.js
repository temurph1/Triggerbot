const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`);
});

bot.on('message', msg => {

	if (msg.content === '!hugh'){
		playClip(msg, 'assets/hugh.mp3', 2000, '2');
	}
	else if (msg.content === '!wot full'){
		playClip(msg, 'assets/wotfull.mp3', 7000, '.25');
	}
	else if (msg.content === '!thisperson'){
		playClip(msg, 'assets/thisperson.mp3', 6000, '.25');
	}
	else if(msg.content === '!wot'){
		playClip(msg, 'assets/wot.mp3', 2000, '.25');
	}
	else if (msg.content === "!triggered"){
		playClip(msg, 'assets/triggered.mp3', 10000, '.25');
	}
	else if (msg.content === "!commands"){
		msg.reply("!hugh, !triggered, !wot, !wot full, !thisperson, !remix, !bruh, !nerfthis, !nerfthislmao, !highnoon, !diediedie, !pb, !no, !heff, !thousandmiles, !yaaas, !cedarrapids, !suh, !huuuuuuu, !pussy");
	}
	else if (msg.content === "Thanks!"){
		msg.reply("No Problem.");
	}
	else if (msg.content === "!remix"){
		playClip(msg, 'assets/remix.mp3', 10000, '.20');
	}
	else if (msg.content === "!bruh"){
		playClip(msg, 'assets/bruh.mp3', 2000, '.30');
	}
	else if (msg.content === "!nerfthis"){
		playClip(msg, 'assets/nerfthis.mp3', 2000, '.30');
	}
	else if (msg.content === "!nerfthislmao"){
		playClip(msg, 'assets/nerfthislmao.mp3', 4000, '.30');
	}
	else if (msg.content === "!highnoon"){
		playClip(msg, 'assets/highnoon.mp3', 4000, '.30');
	}
	else if (msg.content === "!diediedie"){
		playClip(msg, 'assets/diediedie.mp3', 4000, '.15');
	}
	else if (msg.content === "!pb"){
		playClip(msg, 'assets/pb.mp3', 4000, '.30');
	}
	else if (msg.content === "!no"){
		playClip(msg, 'assets/no.mp3', 3000, '.30');
	}
	else if (msg.content === "!heff"){
		playClip(msg, 'assets/heff.mp3', 5000, '.30');
	}
	else if (msg.content === "!thousandmiles"){
		playClip(msg, 'assets/thousandmiles.mp3', 12000, '.30');
	}
	else if (msg.content === "!yaaas"){
		playClip(msg, 'assets/yaaas.mp3', 6000, '.30');
	}
	else if (msg.content === "!cedarrapids"){
		playClip(msg, 'assets/cedarrapids.mp3', 6000, '.30');
	}
	else if (msg.content === "!suh"){
		playClip(msg, 'assets/suh.mp3', 3000, '.30');
	}
	else if (msg.content === "!huuuuuuu"){
		playClip(msg, 'assets/huuuuuuu.mp3', 9000, '.50');
	}
	else if (msg.content === "!pussy"){
		playClip(msg, 'assets/pussy.mp3', 6000, '.50');
	}
	else if (msg.content === "!mib"){
		playClip(msg, 'assets/mib.mp3', 8000, '.40');
	}
	else if (msg.content === "!darkness"){
		playClip(msg, 'assets/darkness.mp3', 12000, '.25');
	}
	else if (msg.content === "!okay"){
		playClip(msg, 'assets/okay.mp3', 5000, '.4');
	}
});




bot.login('MjU0NTA0NDQ3OTgyNTY3NDI0.CyQBRg.lPbwoHdv12RO8t1N-Ja9j-mJQq8');

function playClip(msg, clip, duration, volume){


	console.log(msg.author.username + " used " + msg.content);
	var channel = msg.member.voiceChannel;

	if (msg.member.voiceChannel == undefined){
		msg.reply("You must be in a voice channel to use this command.");
	}
	else{
	msg.member.voiceChannel.join()
	 .then(connection => {
   const dispatcher = connection.playFile(clip, {volume: volume});
   setTimeout(function(){channel.leave();}, duration);

 })
 .catch(console.error);
}
}



