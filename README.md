# Chess club administration system
This system allows chess players to easily register for a chess club tournament.
## Tech Stack

**Front-end:** HTML, CSS (SCSS, Bootstrap), JavaScript

**Back-end:** Spring/Spring Boot, Java 17

**Duomenu bazė:** MySql


## Features

- Player registration to the tournament
- List of tournament participants
- Administration of the players on the participants list:
    1. Editing (except for personal code)
    2. Replacement
    3. Deleting
- The list of the participants contains the players gender and age determined by the personal code.
- Chess playing experience is determined by the date from which the player started playing chess.
## Installation

- You can download the project code from https://github.com/JenLoVangas/last_exam.git.
- Open the terminal and go to the project directory.
- Run the command ./mvnw spring-boot:run.
- Open your web browser and enter the URL http://localhost:8080.


Additional information

- The database login credentials are specified in the application.properties file.

## Run Locally

Clone the project

```bash
  gh repo clone JenLoVangas/last_exam
```

Go to the project directory

```bash
  cd last_exam
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## License

Copyright (c) 2023  Chess Tournament

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

