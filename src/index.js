const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { promisify } = require('util');



const app = express();
const port = 3600;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://danielnunespk:Dandan123@revisaoapi.cawnmji.mongodb.net/?retryWrites=true&w=majority');

const socioSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Socios = mongoose.model('socios', socioSchema);



app.get('/', async (req, res) => {
    const socios = await Socios.find();
    res.send(socios);
});


app.post('/register', async (req, res) => {
    try {
        const socios = new Socios({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        await socios.save();
        res.send('Usuário salvo com sucesso! \n' + socios);
    } catch (error) {
        if(error.code === 11000 && error.keyPattern.email) {
            res.status(400).send('Email já registrado. Por favor, escolha outro email.');
        } else {
            res.status(500).send('Ocorreu um erro ao salvar o usuário.');
        }
    }
});

const compareAsync = promisify(bcrypt.compare);

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        const usuario = await Socios.findOne({email});

        if(!usuario) {
            return res.status(404).send('Usuário não encontrado.');
        }

       if(password === usuario.password) {
            res.send('Login bem-sucedido! \n' + usuario);
            console.log('Credenciais fornecidas:', email, password);
            console.log('Senha do usuário no banco de dados:', usuario.password);
            
       }

       if(password !== usuario.password) {
        res.status(500).send('Credenciais inválidas')
        console.log('Credenciais fornecidas:', email, password);
        console.log('Senha do usuário no banco de dados:', usuario.password);
        
       }
        
        
        
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).send('Ocorreu um erro ao fazer login!');
    }
});

app.put('/update/:email', async (req, res) => {
    try {
        const { email } = req.params;
        

        const usuario = await Socios.findOne({email});

        if(!usuario) {
            return res.status(404).send('Usuário não encontrado.');
        }

        if (req.body.name) {
            usuario.name = req.body.name;
        }

        if (req.body.password) {
            usuario.password = req.body.password;
        }

        await usuario.save();
        res.send('Usuário atualizado com sucesso! \n' + usuario);

    } catch (error) {
        res.status(500).send('Ocorreu um erro ao atualizar usuario!');
    }
});

app.delete('/delete/:email', async (req, res) => {
    try {
        const { email } = req.params;

        const result = await Socios.deleteOne({ email });

        if(result.deletedCount === 0) {
            return res.status(404).send('Usuário não encontrado.');
        }

        res.send('Usuário deletado com sucesso!');
    } catch (error) {
        res.status(500).send('Ocorreu um erro ao deletar o usuário.');
    }

});



app.listen(port, '0.0.0.0', () => {
    console.log('App running!')
});