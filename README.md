# 📌 Nome do Projeto

Um breve resumo do que o projeto faz.

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

### 3️⃣ Inicie o json-server (API Fake)

```sh
npm run dev  # Inicia tanto o json-server quanto o projeto
```

O json-server estará rodando na porta `http://localhost:3003`, e a API utilizada é `http://localhost:3003/employees`.

### 4️⃣ Rode a aplicação

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
│   │   ├── modules  # Arquivos do use case
│   │   ├── shared  # Enums e helpers
│   ├── ui  # Componentes e estilos
│   ├── pages  # Páginas do Next.js
├── public  # Arquivos estáticos
├── package.json  # Dependências do projeto
└── README.md  # Documentação
```

