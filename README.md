# ๐๏ธ NumeRomans

## About

This is an API developed to convert Roman Numerals to integers and vice-versa. 

|  I  |  V  |  X  |  L  |  C  |  D  |  M  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  1  |  5  |  10 |  50 | 100 | 500 | 1000|

## โจ Features
-  convert from normal numbers to Roman Numerals
-  convert a numeral to digit

## ๐งฌ Technologies
- Node.js
- Express
- TypeScript
- Husky
- Prettier
- Eslint

## ๐ Requirements
To run this project, be sure to have installed:
- [Node v14.17.0](https://nodejs.dev/download/)
- [A code editor](https://code.visualstudio.com)

After that, you need to clone this repo:
```bash
git clone https://github.com/LBeghini/NumeRomans.git
```

## โ๏ธ Setup
Before running the code, you need to install the dependencies. From a terminal at the root directory of the project, run:
```bash
npm install
```

## โถ๏ธ Running
To run the code, from a terminal, on the project's root directory, run:
```bash
npm start
```
## ๐งญ Usage
From a browser, go to url [localhost:5000](localhost:5000).
If everything is working fine, you should be able to see `It works! ๐` on the page.
### Roman to Number
To convert a roman numeral to a number, go to the url:
```
localhost:5000/roman?character={roman-number-to-convert}
```
>Replace {roman-number-to-convert} to any roman numeral you want. 


### Number to Roman
To convert a roman numeral to a number, go to the url:
```
localhost:5000/arabic?character={number-to-convert}
```
>Replace {number-to-convert} to any number you want, ranging from 1 to 3999.

## ๐งช Tests
To run the implemented tests, from a terminal, on the project's root directory, run:
```
npm test
```

## ๐ Development
The entire solution was build using TDD and Clean Code best pratices. A [GitHub Project](https://github.com/LBeghini/NumeRomans/projects/1) was created to control the tasks needed to develop the project, and each issue describes better what each step did and had to implement.

Before starting, an entire setup for a Node.js with Express and TypeScript was created, using linters and pre-commit rules.

## โ๏ธ [License](https://github.com/LBeghini/NumeRomans/blob/main/LICENSE)
Feel free to modify as you wish!
