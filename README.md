# React Phone Book
> A react application to get contacts with search capability

### Installation

```
npm install
```

### Run the project

This project is using **json-server** to create contacts endpoints therefore you will need to install **json-server** package globally first.

```
npm install -g json-server
```

Then you can run the server as below.
Noted that the project gets data from port 4000 and is using **data.json** in **data** folder which contains contacts information.

```
json-server data/data.json -p 4000
```
Make sure that the server is up and running by going to *localhost:4000/contacts*.
Now you can open a new terminal tab and start the project.

```
npm start
```

### Test the project

```
npm test
```

## Packages and frameworks

Here are a few of the highlighted technologies used in this project, as well as a few anticipated technologies
that will work their way into this project in the future:

- [x] React
- [x] Redux
- [x] Emotion-js: The [fastest](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md) CSS-in-JS solution!
- [x] Reselect
- [x] Enzyme and Jest 
