const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

const developers = [
  {
    name: 'Leonardo Reis',
    stacks: 'NodeJS',
    curriculo: 'url',
  },
  {
    name: 'Leticia xxxxx',
    stacks: 'JS',
    dev: 'url',
  },
  {
    name: 'Felipe yyyyy',
    stacks: 'JS',
    dev: 'url',
  },
];

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'print.ejs');
  ejs.renderFile(filePath, { developers }, (err, data) => {
    if (err) {
      return res.send('Erro no caminho do arquivo');
    }

    return res.send(data);
  });
});

app.listen(3000);
