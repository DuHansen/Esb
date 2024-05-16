const PostController = require('../controllers/postagem');

// Servidor 2
class PostApi {
    async criarPostagem(req, res) {
        const { titulo, conteudo, autorID } = req.body;

        try {
            const postagem = await PostController.criarPostagem(titulo, conteudo, autorID);

            // Enviar uma mensagem para o ESB após 1 segundo
            setTimeout(() => {
                fetch('http://localhost:9000/api/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        titulo,
                        conteudo,
                        autorID,
                    })
                }).catch(error => console.error('Error:', error));
            }, 1000);

            return res.status(201).send(postagem);
        } catch (error) {
            return res.status(400).send({ error: error.message });
        }
    }

    async alterarPostagem(req, res) {
        const { id } = req.params;
        const { titulo, conteudo, autorId } = req.body;
       

        try {
            const postagem = await PostController.alterarPostagem(Number(id), titulo, conteudo, autorId);
            return res.status(200).send(postagem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

async deletarPostagem(req, res) {
    const { id } = req.params;

    try {
        await PostController.deletarPostagem(Number(id));
        return res.status(200).send({ message: "Deletado com sucesso!" });
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
}


    // API
    async listarPostagens(req, res) {
        const autorID = req.params.id;

        try {
            const postagens = await PostController.listarPostagens(autorID);
            return res.status(200).send(postagens);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }


    async obterPostagemPorId(req, res) {
        const { id } = req.params;
        

        try {
            const postagem = await PostController.obterPostagemPorId(Number(id));
            return res.status(200).send(postagem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new PostApi();
