# 📌 Teste Prático Front-end

Este projeto é uma aplicação frontend desenvolvida com [Next.js](https://nextjs.org) e [Material-UI](https://mui.com). Ele tem como objetivo fornecer uma interface de usuário moderna e responsiva para a gestão de funcionários, permitindo a visualização, busca e filtragem de dados de funcionários.

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido com **React** e **Next.js**, utilizando **Material UI** e **TypeScript** para a interface. Ele simula uma API com **json-server**, permitindo a listagem de dados em uma **Tabela** com filtros por **nome, cargo e telefone**. Além disso, conta com **testes unitários** implementados com **Jest** para garantir a qualidade do código.

## 🛠 Tecnologias Utilizadas

- **React** + **Next.js**
- **Material UI**
- **TypeScript**
- **json-server** (para simulação de API)
- **Jest** (para testes unitários)

## 📦 Como Executar o Projeto

### 1️⃣ Clone o repositório

```sh
 git clone git@github.com:JasonLuis/teste-pratico-frontend.git
```

### 2️⃣ Instale as dependências

```sh
npm install  # ou yarn install
```

### 3️⃣ Inicie o json-server (API Fake) e o projeto

```sh
npm run dev  # Inicia tanto o json-server quanto o projeto
```

O json-server estará rodando na porta `http://localhost:3003`, e a API utilizada é `http://localhost:3003/employees`.

### 4️⃣ Rode a aplicação

```sh
npm run dev  # Inicia tanto o json-server quanto o projeto
```

Acesse no navegador: `http://localhost:3000`

### 5️⃣ Rodando os testes

```sh
npm run test  # Executa os testes junto com o json-server
```

## 📂 Estrutura do Projeto

```
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── adapter  # Contém HttpAdapter
│   │   │   ├── base  # Arquivos para uso do use case
│   │   ├── modules  # Arquivos do use case e testes unitários
│   │   ├── shared  # Enums e helpers
│   ├── ui  # Componentes e estilos
│   ├── pages  # Páginas do Next.js
├── public  # Arquivos estáticos
├── package.json  # Dependências do projeto
└── README.md  # Documentação
```

