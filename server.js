import express from "express";

import routes from "./src/routes/postsRoutes.js";

// Criamos uma aplicação Express e a guardamos na variável 'app'.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Iniciamos o servidor na porta 3000 e mostramos uma mensagem no console.
app.listen(3000, () => {
    console.log("Servidor escutando...");
});




/* // Função para encontrar um post pelo seu ID no array de posts.
function buscarPostPorID(id) {
    // Utilizamos o método findIndex para encontrar o índice do post com o ID correspondente.
    return posts.findIndex((post) => {
        // Compararmos o ID do post com o ID passado como parâmetro.
        return post.id === Number(id)
    })
}

// Criamos uma rota para buscar um post específico pelo seu ID.
// O :id na URL indica que 'id' é um parâmetro que pode variar.
app.get("/posts/:id", (req, res) => {
    // Chamamos a função para buscar o índice do post.
    const index = buscarPostPorID(req.params.id);
    // Enviamos o post encontrado na resposta.
    res.status(200).json(posts[index]);
}); */