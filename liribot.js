var keys = require('./keys.js');
var fs = require('fs');
var tweets = require('./assets/tweets.js');
var spot = require('./assets/spotify.js');
var omdb = require('./assets/omdb.js');

function random() {
	fs.readFile("random.txt", "utf8", function (error, data){
		if(error){
			console.log(error);
			return error;
		}
		decision(data.split(",")[0],data.split(",")[1]);
	});
	return " Did what it says";
}

function writeToLog(call, re){
	fs.appendFile("log.txt", "\n\n" + call + "\n" + re, function(err){
			if(err){
				console.log(err);
			} else {
				console.log("log updated");
			}
		});
}

function decision(str, str2){
	switch(str){
	case ("my-tweets"):
		tweets.init(keys.twitterKeys);
		tweets.getTweets().then(
			function(val){
				writeToLog(str, tweets.write(val));
			}
		);
		break;
	case ("spotify-this-song"):
		spot.init(keys.spotifyKeys);
		spot.search(str2).then(
			function (val){
				writeToLog(str, spot.write(val));
			}
		).catch(
			function(r){
				console.log(r);
			});
		break;
	case ("movie-this"):
		omdb.search(str2).then(
			function (val){
				writeToLog(str, omdb.write(val));
			}
		);
		break;
	case ("do-what-it-says"):
		writeToLog(str, random());
		break;
	}
}

decision(process.argv[2], process.argv[3]);