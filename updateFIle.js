const fs = require('fs');

fs.writeFile('myNewFile.txt', 'Hello Mom', (err) => {
	if (err) throw err;
	console.log('updated!');
});
