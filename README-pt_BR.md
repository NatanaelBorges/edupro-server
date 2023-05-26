
<div id="top"></div>

<h1 align="center">
<img src="https://res.cloudinary.com/dpf6scfvx/image/upload/v1685076951/undraw_server_cluster_jwwq_ije80u.svg" alt="EduPro" width="600">
</h1>

<p align="center">
<strong> EduPro 🎭 </strong>
</p>  
<p align="center"> O Projeto Employee é um projeto de código aberto escrito em Nest </p>  
<p align="center"> O objetivo deste projeto é implementar algumas das tecnologias mais utilizadas no mercado em um único projeto, criando uma nova rede de conhecimento e várias possibilidades para melhorar seu aprendizado. </p>
<br>

<h4 align="center"> 🚧 EduPro - Servidor 🚀 Em construção... 🚧 </h4>  
<br>
<p align="center">
<a href="https://github.com/NatanaelBorges/edupro-server/blob/main/LICENSE">
<img alt="GitHub" src="https://img.shields.io/github/license/NatanaelBorges/edupro-server" alt="EduPro-Server é lançado sob a licença MIT.">
</a>

<a href="https://github.com/NatanaelBorges/edupro-server/blob/main/CHANGELOG.md"> <img alt="Versão package.json" src="https://img.shields.io/github/package-json/v/NatanaelBorges/edupro-server"> </a>

<a href="https://github.com/NatanaelBorges/edupro-server/blob/main/CONTRIBUTION-pt_BR.md"> <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs bem-vindas!" /> </a>

<a href="https://github.com/NatanaelBorges/edupro-server/commits/main"> <img alt="Último commit do GitHub" src="https://img.shields.io/github/last-commit/NatanaelBorges/edupro-server"> </a> </p>  

<p align="center">
<a href="#sobre-este-projeto-">Sobre este Projeto</a> •
<a href="#por-quê-%EF%B8%8F">Por quê?</a> •
<a href="#arquitetura-">Arquitetura</a> •
<a href="#tecnologias-">Comece em 5 minutos</a> •
<a href="#notas-da-versão-">Notas da versão</a> •
<a href="#aviso-">Aviso Legal</a> •
<a href="#contribuindo-">Contribuindo</a> •
<a href="#licença-">Licença</a>
</p>

Português 🇧🇷 | [English  🇺🇸](./README.md)

## Dê uma estrela!⭐

Se você gostou do projeto, ou se o *EduPro* ajudou você de alguma forma, por favor, dê uma estrela, isso ajuda muito a manter o conteúdo atualizado e, assim, possibilita a criação de novos projetos 😉

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Sobre este Projeto 👨‍🏫

*EduPro* é uma API RESTful robusta construída com base nos princípios da arquitetura limpa, implementada em TypeScript e utilizando o CQRS (Command Query Responsibility Segregation). Foi especificamente projetado para simplificar a gestão de dados de estudantes em instituições de ensino, incluindo escolas e universidades.

O aplicativo oferece uma ampla gama de recursos, como autenticação segura de usuários, operações abrangentes de CRUD para gerenciar estudantes, cursos e notas.

Desenvolvido usando Node.js e o poderoso framework NestJS para o backend, o *EduPro* utiliza a confiabilidade e eficiência do MySQL como tecnologia de banco de dados, integrado perfeitamente por meio do uso do TypeORM. Essa combinação garante capacidades ideais de armazenamento e gerenciamento de dados.

Com um design bem arquitetado, seguro e de alto desempenho, o *EduPro* é uma solução confiável e escalável, atendendo às diversas necessidades de qualquer instituição acadêmica.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Por quê? 🤷‍♂️

Obrigado por dedicar seu tempo para revisar este projeto, que é uma adição ao meu portfólio pessoal. Agradeço muito qualquer feedback que você possa fornecer sobre o projeto, seu código, estrutura ou qualquer outro aspecto que você acredite que possa me ajudar a me tornar um desenvolvedor melhor.

Sinta-se à vontade para entrar em contato comigo por e-mail em [contact@natanaelborges.com](mailto:contact@natanaelborges.com) ou conecte-se comigo no [![Badge do Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/natanael-borges/)](https://www.linkedin.com/in/natanael-borges/).

Além disso, encorajo você a utilizar este projeto da maneira que melhor lhe convier, seja para estudar, fazer melhorias ou mesmo para fins comerciais.

É totalmente gratuito para uso!

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Arquitetura 🕍

- Arquitetura completa com separação de responsabilidades, princípios SOLID e código limpo
- Design Orientado a Domínio (Camadas e Padrão de Modelo de Domínio)
- Eventos de Domínio
- Notificação de Domínio
- Validações de Domínio
- CQRS (Command Query Responsibility Segregation)
- Event Sourcing
- Unit of Work
- Repository

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Tecnologias 🛠

As seguintes ferramentas foram utilizadas na construção do projeto:

- **[NodeJS](https://nodejs.org/en/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[NestJs](https://nestjs.com/)**
- **[TypeORM](https://typeorm.io/)**
- **[Husky](https://www.npmjs.com/package/husky)**
- **[Jest.js](https://jestjs.io/)**
- **[ESLint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**
- **[TS-node](https://typestrong.org/ts-node/)**
- **[MySQL](https://www.mysql.com/)**
- **[Release-it](https://github.com/release-it/release-it)**
- **[nodemon](https://nodemon.io/)**
- **[dotenv](https://github.com/motdotla/dotenv)**

## Primeiros Passos

### Como executar o projeto 🚀

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/). Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)

### Executando o Back End (servidor) 🎲

```bash
# Clone este repositório
$ git clone https://github.com/NatanaelBorges/edupro-server.git

# Acesse a pasta do projeto no terminal/cmd
$ cd edupro-server

# Instale as dependências
$ npm install
# ou
$ yarn

# Renomeie o arquivo `.env.example` para `.env` e crie suas variáveis ​​de ambiente e substitua-as. É muito importante para executar o servidor.
$ mv .env-example .env

# Execute a migração em modo de desenvolvimento
$ npm run m:run
# ou
$ yarn m:run

# Execute o aplicativo em modo de desenvolvimento
$ npm run start:dev
# ou
$ yarn start:dev

# O servidor iniciará na porta: 3000 - acesse http://localhost:3000
```

> Consulte a parte **scripts {}** do arquivo [package.json](https://github.com/NatanaelBorges/edupro-server/blob/main/package.json) para saber quais scripts estão disponíveis.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

### Executando os testes

```bash
npm run test
```

*ou*

```bash
yarn test
```

### Executando os testes + Cobertura

```bash
npm run test:coverage
```

*ou*

```bash
yarn test:coverage
```

### Gerando migração

```bash
npm run m:gen --name=initialDatabase
```

*ou*

```bash
yarn m:gen --name=initialDatabase
```

### Executando migração

```bash
npm run m:run
```

*ou*

```bash
yarn m:run
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Notas de Lançamento 🚢

Quer saber o que lançamos recentemente? Confira nosso [changelog](https://github.com/NatanaelBorges/edupro-server/blob/main/CHANGELOG.md) para ver os principais destaques, melhorias de desempenho, novos recursos e correções de bugs notáveis.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Aviso ⛔

- **NÃO** se destina a ser uma solução definitiva
- Cuidado ao usar em ambiente de produção
- Talvez você não precise de muitas implementações que estão incluídas, tente evitar o **over engineering** (excesso de engenharia)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Contribuindo 🤝

Este projeto é para fins de estudo, mas queremos continuar evoluindo, de certa forma, tentando melhorar as tecnologias, a arquitetura e as abordagens utilizadas. Contribuições são sempre bem-vindas!

Sinta-se à vontade para abrir um pull request, comente qualquer problema ou sugestão.

Todos os tipos de contribuições são muito bem-vindos e apreciados!

- ⭐️Estrela no projeto;
- 🐛 Encontrar e relatar problemas;
- 📥 Envie PRs para ajudar a resolver problemas ou adicionar recursos.

## Licença 📝

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](https://github.com/NatanaelBorges/edupro-server/blob/main/LICENSE) para obter detalhes.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

## Obrigado 💙

Agradecemos a todos que de alguma forma tornam o projeto cada dia melhor e muito especial, nos ajudando assim a levar conhecimento a muitas pessoas de forma prática, rápida e prazerosa.

Feito com ❤️ por _**Natanael Borges**_ 👋🏽

<p align="right">(<a href="#top"> de volta ao topo </a>)</p>
