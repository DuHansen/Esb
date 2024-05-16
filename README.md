# Aplicação de um ESB

## Objetivo
Ao cadastrar uma postagem no servidor2, a postagem é cadastrada no servidor1.

## Requisitos
- Utilizar fetch API para interligar com o barramento.
- Toda postagem possui conteúdo, título e autorID.

## Integrações disponíveis
- Cadastro de postagem.

## Simulação
Para simular o funcionamento, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/DuHansen/Esb

Inicie os 3 servidores.
Cadastre um usuário nos dois bancos utilizando o método POST:
http://localhost:8000/users/
http://localhost:7000/users/
Exemplo de corpo da requisição:

{
    "nome": "jack",
    "email": "jack@gmail.com",
    "senha": "123"
}

Cadastre uma postagem utilizando o método POST:
http://localhost:8000/post
Exemplo de corpo da requisição:

{
    "titulo": "Nunca conheci quem tivesse levado porrada.",
    "conteudo": "Todos os meus conhecidos têm sido campeões em tudo.",
    "autorID": 1
}

