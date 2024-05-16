// ESB
const express = require('express');
const fetch = require('node-fetch');

console.log('Starting server....');
const app = express();
app.use(express.json());

app.listen(9000, () => {
    console.log('Server is running on port 9000')
})

app.post('/api/post', async (req, res) => {
    try {
        const { titulo, conteudo, autorID } = req.body;
        const response = await fetch('http://localhost:7000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo,
                conteudo,
                autorID
            })
        });
        const data = await response.text();
        res.status(200).send(`ESB recebeu a resposta do servidor 2: ${data}`);
    } catch (error) {
        res.status(500).send(`Erro no ESB: ${error.message}`);
    }
});

module.exports = app;