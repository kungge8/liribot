var req = require('request-promise-native');

function search (str) {
	if (!str){
		return search('Mr.Nobody');
	}
	return req('http://www.omdbapi.com/?apikey=40e9cece&t=' + str
	);
}

function write(val){
	let temp = JSON.parse(val);
	let temp2 = ("\n Title: " + temp.Title +
							"\n Year: " + temp.Year +
							"\n imdb Rating: " + temp.Ratings[0].Value +
							"\n RT Rating: " + temp.Ratings[1].Value +
							"\n Country: " + temp.Country +
							"\n Language: " + temp.Language +
							"\n Plot: " + temp.Plot +
							"\n Actors: " + temp.Actors);
	console.log(temp2);
	return temp2;
}

module.exports = {
	search: search,
	write: write
}