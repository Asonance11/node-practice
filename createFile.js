const fs = require('fs');

fs.writeFile('myNewFile.txt', 'Hello World', (err) => {
	if (err) throw err;
	console.log('Saved!');
});
