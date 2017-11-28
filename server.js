"user strict";
  const fs = require("fs"); // работа с файловой системой, загружаем файл
  const path = require("path"); // для работы с путями
  const express = require("express"); //
  const bodyParser = require("body-parser"); // модуль необходим для работы с телом запроса
  const todos = require("./api/todo");
  const app = express();

  let nextId = 4;

  app.set("port", (process.env.PORT || 3000));


  //считаем корнем нашего локального сайта папку src
  // app.use(express.static("dist"));
  app.use(express.static(path.join(__dirname, "src")));


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(function log(req, res, next) {
    res.setHeader("Cache-Control", "no-cache");
    console.log([req.method, req.url].join(" "));
    next();
  });

  app.get('/api/todos', (req, res) => {
    res.send(todos);
  });

  app.post('/api/todos', (req, res) => {
    const todo = {
      id: nextId++,
      title: req.body.title,
      completed: false
    };
    todos.push(todo);
    res.send(todos);
  });

  app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);
    if (!todo) return res.sendStatus(404);
    todo.title = req.body.title || todo.title;
    res.json(todo);
  });

  app.patch('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);
    if (!todo) return res.sendStatus(404);
    todo.completed = !todo.completed;
    res.json(todo);
  });

  app.delete('/api/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id == req.params.id);
    if (index === -1) return res.sendStatus(404);
    todos.splice(index, 1);
    res.sendStatus(204);
  });

  app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/src/index.html`, (error, html) => {
      if (error) throw error;
      res.setHeader("Cache-Control", "text/html");
    });
    if (index === -1) return res.sendStatus(404);
    res.send(html);
  });

  // слушаем на порту 3000 и выводим в console.loge
  // app.listen(3000, function() {
  //   console.log("Server started on port 3000");
  // });
  // app.listen(process.env.PORT || 3000);

  app.listen(app.get('port'), () => {
    console.log(`Server is listening: http://localhost:${app.get('port')}`);
  });



