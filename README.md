# Jump2Digital-2022-Backend-hackathon API creation



> Implementation of the solutions to the Jump2Digital 2022 Backend hackathon event.

[![CodeFactor](https://www.codefactor.io/repository/github/jelisa/jump2digital-2022-backend-hackathon/badge)](https://www.codefactor.io/repository/github/jelisa/jump2digital-2022-backend-hackathon)

## Usage

This is a server that offers an API to process companies information.
It follows the ES6 style and uses async functions to manage the asynchronous comunnications with the DB. 

## API/Component

This project connects to a MySQL server and it creates and populates a database using the provided information.
It then raises a server on the http://localhost:4000, or the enviroment HOSTNAME and PORT (it can also be provided when executing the program).

Using the default values the API can be accesed via the following URLs:
 - http://localhost:4000/ : Is a webpage that provides a summary of what information each endpoint returns.
 - http://localhost:4000/API : Is a webpage that provides the links to each of the endpoints.
 - http://localhost:4000/API/orderbysize : Provides a Json containing all the companies information with the companies ordered by their size in ascending order.
 - http://localhost:4000/API/orderbyCreationDate : Provides a Json containing all the companies information with the companies ordered by the year they were founded in ascending order, starting by the companies wiht no founding year.
 - http://localhost:4000/API/statistics : Provides a Json containing the number of companies in each industry, the number of companies in each size range, and the number of companies in each founding year. 


## Installation

Once the repository is cloned onto your local machine in order to use it you'll have to follow a few steps:

 1. Raise a MySQL compatible server. This IS NOT provided.
 2. Read/Modify the file Jump2Digital-2022-Backend-hackathon/src/config/env.js to match your MySQL enviroment parameters, DB_PORT and DB_HOST specially. By defautl it will attempt to connect via localhost and port 3306.
 3. Install the npm package via command line. It will automatically install any npm dependencies.
 
 ```shell
    # Install commands
    npm install 
 ```
    
 4. (Optional if no DB present) Initialize and populate the database via the following command.
 
 ```shell
    # DB Initialization
    npm run initializeDB 
 ```
 
 5. Run the server via.

 ```shell
    # API
    npm run dev
```

## Stack

The project is implemented in Node.js v19.0.0.
It uses the npm packages:
 - **mysql2** package to connect to a mariaDB.
 - **express** package to raise and manipulate the HTTP server.
 - **jsdoc** package to generate the developer documentation.

It requires a MySQL compatible database available and listening on port 3306.


## License 

Licencia 
[ISC](https://opensource.org/licenses/ISC)
