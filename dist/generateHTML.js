const HTMLTemplate = data => {
    const {name, role, id, email, officenumber, addNew, github, school } = data;
    
    return

// Header HTML     
    `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header class="container-fluid">
            <h1> My Team </h1>
        </header>
        <section class="container">
            <article class="card-deck">
            `
// Using fs to write file into new HTML 
fs.writeFile('generate.html', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  
// Creating each new employee based on chosen inputs
            `

    
                <div class="card border-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"><br> Name <br></div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <ul class="list-group">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number</li>
                        </ul>
                    </div>
                </div>
    
                <div class="card bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header"><br> Name <br></div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <ul class="list-group">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Github: </li>
                        </ul>
                    </div>
                </div>
    
                <div class="card border-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"><br> Name <br></div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <ul class="list-group">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">School: </li>
                        </ul>
                    </div>
                </div>
    
            </article>
        </section>
    
    </body>
    
    </html>

`}
module.exports = HTMLTemplate