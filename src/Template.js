// generate page 
const generatePage = employees => {
    // we are creating the HTML bassed off of our template - similar technique from last weeks assignemnt 
    const managerTemplate = manager => {
        return `
    <div class="container">
    <div class="row">
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${manager.getName()} <br /><br />${manager.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getID()} </li>
                    <li class="list-group-item">Email Address: <a href="mailto:{{ email }}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Phone: ${manager.getOfficeNum()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
    }
    // we are creating the HTML bassed off of our template - similar technique from last weeks assignemnt 
    const engineerTemplate = engineer => {
        return `
    <div class="container">
    <div class="row">
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${engineer.getName()} <br /><br />${engineer.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getID()} </li>
                    <li class="list-group-item">Email Address: <a href="mailto:{{ email }}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Link: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                        rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
       `
    }
    // we are creating the HTML bassed off of our template - similar technique from last weeks assignemnt 
    const internTemplate = intern =>{
        return`
        <div class="container">
    <div class="row">
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${intern.getName()} <br /><br />${intern.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getID()} </li>
                    <li class="list-group-item">Email Address: <a href="mailto:{{ email }}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School Attended: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>
        `
    }

    
        const html = [];
      
        // pushing the info into our empty array 
        html.push(employees
          .filter(employee => employee.getRole() === "Manager")
          .map(manager => managerTemplate(manager))
        );
        html.push(employees
          .filter(employee => employee.getRole() === "Engineer")
          .map(engineer => engineerTemplate(engineer))
        );
        html.push(employees
          .filter(employee => employee.getRole() === "Intern")
          .map(intern => internTemplate(intern))
        );
      
        return html.join("");


}

module.exports = employees => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
                ${generatePage(employees)}
            </div>
        </div>
    </body>
    </html>`
}

