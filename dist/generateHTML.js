const HTMLTemplate = data => {
    // you passed teamMembers into here as a set of arguments objects with the types of employees
    // create a flow for creating an individual card for each item in the data array
    // put the if statements inside a loop
    // 
    function loopFunction(data) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === "Manager") {
                manager
            } else if (data[i] === "Engineer") {
                engineer
            } else {
                intern
            }
        }
        // Header HTML 
        return 
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
            ${loopFunction(manager, engineer, intern)}
            `
        // Creating each new employee based on chosen inputs
            `          
             </article>
        </section>
    
    </body>
    
    </html>
`}
}
    module.exports = HTMLTemplate