# AquaSafe — Sistema de Checklist Digital

---

## Sobre o Projeto

O AquaSafe substitui o processo manual de preenchimento de checklists de segurança em papel, digitalizando a rotina de pré-abertura das atrações aquáticas. O sistema permite que guarda-vidas preencham checklists digitais e que supervisores e auditores visualizem os registros de forma organizada.

---

## Tecnologias Utilizadas

**Backend**
- Node.js
- Express 4
- Sequelize (ORM)
- PostgreSQL
- JWT (autenticação)
- bcryptjs (criptografia de senhas)
- dotenv
- cors
- helmet

**Infraestrutura**
- Docker (PostgreSQL via container)

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [DBeaver](https://dbeaver.io/) (opcional, para visualizar o banco)

---

## Como Iniciar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/aquasafe.git
cd aquasafe
```

### 2. Suba o banco de dados com Docker

Na raiz do projeto, rode:

```bash
docker-compose up
```

Aguarde até ver a mensagem `database system is ready to accept connections` no terminal.

### 3. Configure as variáveis de ambiente

Dentro da pasta `backend`, crie um arquivo `.env` baseado no `.env.example`:

```bash
cd backend
cp .env.example .env
```

Preencha o `.env` com suas configurações:

```
DB_NAME=banco_checklist
DB_USER=admin
DB_PASS=sua_senha
JWT_SECRET=sua_chave_secreta
```

### 4. Instale as dependências do backend

```bash
cd backend
npm install
```

### 5. Crie as tabelas no banco

Abra o DBeaver, conecte no banco `banco_checklist` e execute o arquivo `backend/init.sql`.

### 6. Inicie o servidor

```bash
npm run dev
```

O servidor vai subir na porta `3000`. Você verá no terminal:

```
Servidor subiu
Conexão com sucesso.
```

---

## Estrutura do Projeto

```
aquasafe/
├── backend/
│   ├── src/
│   │   ├── controllers/       # Lógica de negócio
│   │   ├── middlewares/       # Autenticação JWT
│   │   ├── models/            # Modelos do banco (ORM)
│   │   ├── routes/            # Definição dos endpoints
│   │   └── app.js             # Entrada do servidor
│   ├── init.sql               # Script de criação das tabelas
│   ├── .env.example           # Modelo de variáveis de ambiente
│   └── package.json
├── frontend/                  # Em desenvolvimento
├── docker-compose.yml         # Configuração do PostgreSQL
└── README.md
```

---

## Endpoints Disponíveis

### Autenticação

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/auth/login` | Login do usuário | Não |

### Atrações

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/atracao` | Lista todas as atrações | Sim |
| POST | `/atracao` | Cria uma nova atração | Sim |

### Perguntas

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/pergunta/:id` | Lista perguntas de uma atração | Sim |
| POST | `/pergunta` | Cria uma nova pergunta | Sim |

> Rotas marcadas com **Sim** exigem token JWT no header `Authorization: Bearer <token>`

---

## Banco de Dados (MER)

O sistema possui 5 tabelas:

- `usuarios` — guarda-vidas e supervisores
- `atracoes` — atrações do parque
- `perguntas` — perguntas de cada atração
- `checklists` — registro de cada checklist preenchido
- `itens_checklist` — respostas OK/NOK de cada pergunta

---

## Como Testar a API

Importe as rotas no [Postman](https://www.postman.com/) e siga o fluxo:

1. Faça login em `POST /auth/login` com email e senha
2. Copie o token retornado
3. Nas demais rotas, adicione o token em `Authorization > Bearer Token`

---

## Perfis de Usuário

| Perfil | Permissões |
|--------|-----------|
| `guardavidas` | Preencher checklists |
| `supervisor` | Cadastrar atrações, perguntas e visualizar relatórios |