const express = require('express');
const { route } = require('../app');
const router = express.Router();

//RETORNA OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando get dentro da rota produtos'
    });
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando post dentro da rota produtos'
    });
});


//RETORNA UM ITEM DO PARAMETRO
router.get('/:id_produto',(req, res,next) =>{  //pega parametro
    const id = req.params.id_produto // pega o parametro

    if(id === 'especial'){
        res.status(200).send({
            mensagem:'Id expecial', 
            id: id
        });
    }else {

        res.status(200).send({
            mensagem:'Usando get com produto exclusivo', 
            id: id
        });
    }

});

//PATcH
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando patch'
    });
});

//delete
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando delete'
    });
});


module.exports = router;