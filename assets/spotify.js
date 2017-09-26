var spot = require("node-spotify-api");
var client;

function init(obj){
	client = new spot(obj);
}

function search (str){
	if (!str){
		return search('the sign');
	}

	return client.search({type: 'track', query: '"' + str + '"'});
}

function write(val){
	let temp = val.tracks.items[0];
	let str = "\n Artist: " + temp.album.artists[0].name + 
							"\n Title: " + temp.name + 
							"\n Album: " + temp.album.name + 
							"\n Preview: " + temp.external_urls.spotify;
	console.log(str);
	return str;
}

module.exports = {
	init: init,
	search: search,
	write: write
}