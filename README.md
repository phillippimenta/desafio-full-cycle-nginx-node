# Full Cycle 3.0 - Módulo Docker Desafio Nginx como proxy reverso

Este é o repositório da resolução do Desafio do Curso Full Cycle 3.0 - Módulo Docker Desafio Nginx como proxy reverso.

## Descrição

O desafio consiste em criar uma aplicação Node.js para ser acessada por meio de um servidor Nginx configurado como proxy reverso, no qual a aplicação deve retornar '<h1>Full Cycle Rocks!</h1>' e uma lista de nomes, com a adição de um novo registro aleatoriamente a cada acesso.

## Instruções de Uso

Para executar este programa, você precisa ter o Go e o Docker instalados em sua máquina.

Siga as instruções abaixo para executar localmente:

#### Clone este repositório

```bash
git clone https://github.com/seu-usuario/desafio-full-cycle-nginx-node.git
```

#### Acesse o diretório do projeto:Acesse o diretório do projeto

```bash
cd desafio-full-cycle-nginx-node
```

#### Execute o comando para iniciar os containers Docker

```bash
docker-compose up -d
```

#### Abra seu navegador e acesse http://localhost:8080. Você deve ver a mensagem "<h1>Full Cycle Rocks!</h1>" com a lista de nomes cadastrada no banco de dados.
```