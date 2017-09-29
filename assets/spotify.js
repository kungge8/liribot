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
	console.log(val);
	let temp = val.tracks.items.reduce(function(acc, n){
		return acc + "\n\n Artist: " + n.album.artists[0].name + 
						"\n Title: " + n.name + 
						"\n Album: " + n.album.name + 
						"\n Preview: " + n.external_urls.spotify;
	}, "");
	console.log(temp);
	return temp;
}

module.exports = {
	init: init,
	search: search,
	write: write
}