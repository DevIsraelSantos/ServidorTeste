const express = require('express');
const app = express(); //instancia do express

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use('/test', (req, res, next) => {    //(req = requisição, res = resposta, next = quando quer chamar outro metodo)
    res.status(200).send({
        mensagem: 'ok, deu certo'
    });
});

module.exports = app; //exporta o app