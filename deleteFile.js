const fs = require('fs');

fs.unlink('mySecondFile.txt', (err) => {
	if (err) throw err;
	console.log('Deleted!');
});
