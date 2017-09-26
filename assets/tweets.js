var twitter = require('twitter');
var client;

function init (obj){
	client = new twitter(obj);
}

function getTweets (){
	console.log("getTweets entered");
	return client.get('statuses/user_timeline', {screen_name: "Dota2BotREE"});
}

function write(r){
	let temp = "";
	console.log(r);
	function app(n){
		temp += "\n " + n.text + " " + n.created_at;
	}
	r.map(app);
	console.log(temp);
	return temp;
}

module.exports = {
	init: init,
	getTweets: getTweets,
	write: write
}