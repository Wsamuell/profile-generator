const inquirer = require ('inquirer')
const fs = require ('fs')
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
        if (err) throw err;
        console.log('New file generated!')
    })
} 


