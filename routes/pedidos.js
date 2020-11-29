const express = require('express');
const { route } = require('../app');
const router = express.Router();

//RETORNA OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Get - retorna os pedidos'
    });
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido criado'
    });
});


//RETORNA UM PEDIDO DO PARAMETRO
router.get('/:id_pedido',(req, res,next) =>{  //pega parametro
    const id = req.params.id_pedido // pega o parametro

    if(id === 'especial'){
        res.status(200).send({
            mensagem:'pedido expecial', 
            id: id
        });
    }else {

        res.status(200).send({
            mensagem:'Pedido ', 
            id: id
        });
    }

});


//delete
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'deletou pedido'
    });
});


module.exports = router;