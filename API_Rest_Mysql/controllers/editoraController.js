const express = require('express');
const router = express.router();
//pegamos a entidade em si dessa forma usando .Editora
const Editora = require('../models').Editora;

//Busca Editoras (GET)
router.get('/', async(req, res) => {
    const editoras = await Editora.findAll();
    res.status(200).json(editoras)
});

//Cadastra Editoras (POST)
router.post('/', async(req, res) => {
    const {descricao} = req.bo

});