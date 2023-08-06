const fs = require('fs');

fs.rename('myNewFile.txt', 'renamedFile.txt', (err) => {
	if (err) throw err;
	console.log('Renamed!');
});
