# Jump2Digital-2022-Backend-hackathon API creation



> Implementation of the solutions to the Jump2Digital 2022 Backend hackathon event.

[![CodeFactor](https://www.codefactor.io/repository/github/jelisa/jump2digital-2022-backend-hackathon/badge)](https://www.codefactor.io/repository/github/jelisa/jump2digital-2022-backend-hackathon)

## Usage

This is a server that offers an API to process companies information.
It follows the ES6 style and uses async functions to manage the asynchronous comunnications with the DB. 

## API/Component

This project connects to a MySQL server and it creates and populates a database using the provided information.
It then raises a server on the http://localhost:4000, or the enviroment HOSTNAME and PORT (it can also be provided when executing the program).

The API can be accesed via the following URLs:
 - http://localhost:4000/API : Is a webpage that provides a summary of what information each endpoint returns.
 - http://localhost:4000/API : Is a webpage that provides the links to each of the endpoints.
 - http://localhost:4000/API/orderbysize : Provides a Json containing all the companies information with the companies ordered by their size in ascending order.
 - http://localhost:4000/API/orderbyCreationDate : Provides a Json containing all the companies information with the companies ordered by the year they were founded in ascending order, starting by the companies wiht no founding year.
 - http://localhost:4000/API/statistics : Provides a Json containing the number of companies in each industry, the number of companies in each size range, and the number of companies in each fpunding year. 


## Installation

Dentro de un ecosistema en particular, puede haber una forma común de instalar cosas, como usar Yarn, NuGet o Homebrew. Sin embargo, considere la posibilidad de que quien esté leyendo su archivo README sea un novato y desee más orientación. Enumerar los pasos específicos ayuda a eliminar la ambigüedad y hace que las personas usen su proyecto lo más rápido posible. Si solo se ejecuta en un contexto específico, como una versión de lenguaje de programación o un sistema operativo en particular, o tiene dependencias que deben instalarse manualmente, agregue también una subsección de Requisitos.


```shell
    # Clone or install commands
    npm i [project] o npm/yarn i 
```

```shell
    # test o run commands
    npm start
    npm run dev ...
```
## Stack

The project is implemented in Node.js v19.0.0.
It uses the npm packages:
 - **mysql2** package to connect to a mariaDB.
 - **express** packagage to raise and manipulate the HTTP server.
It requires a MySQL compatible database available. Listening on port 3306.


## License 

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
