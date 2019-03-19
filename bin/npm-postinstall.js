const fs = require('fs')

console.log('node modules installed!')

// Build .env
const envName = '.env'
if (!fs.statSync(envName)) {
    fs.copyFile('.env.example', envName, (err) => {
        if (err) throw err;
        console.log('.env generated!');
    });
}