const express = require('express');
const ejs = require('ejs');
const path = require('path');
const pdf = require('html-pdf');
const app = express();

const developers = [
  {
    name: 'Leonardo Reis',
    stacks: 'NodeJS',
    curriculo: 'url',
  },
  {
    name: 'Leticia xxxxx',
    stacks: 'Java',
    dev: 'url',
  },
  {
    name: 'Felipe yyyyy',
    stacks: 'phyton',
    dev: 'url',
  },
];

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'print.ejs');
  ejs.renderFile(filePath, { developers }, (err, htmlRender) => {
    if (err) {
      return res.send('Erro no caminho do arquivo');
    }

    //configuração da página
    const options = {
      height: '11.25in',
      width: '8.5in',
      header: {
        height: '20mm',
      },
      footer: {
        height: '20min',
      },
    };
    //criar o pdf
    pdf.create(htmlRender, options).toFile('report.pdf', (err, data) => {
      if (err) {
        return res.send('Erro: Não foi possível gerar o PDF');
      }
      //enviar para o navegador
      return res.send('Arquivo gerado com sucesso');
    });
  });
});

app.listen(3000);
