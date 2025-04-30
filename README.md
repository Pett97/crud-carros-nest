
# Crud Carros

Bem-vindo ao projeto de CRUD de Carros desenvolvido com **NestJS**. Este repositório foi criado para facilitar a virtualização do ambiente usando **Docker** ou **Multipass**.

---

## 🚗 Funcionalidades Principais

- **Simplicidade**: gerenciamento de uma única entidade: `Carro`.
- **API REST**: endpoints disponíveis para integração via HTTP.
- **Acesso Web**: frontend para interação com o sistema.

---

## ▶️ Como Executar o Projeto

### ⚙️ Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas:

- Docker ou Multipass
- Node.js
- NGINX

> ⚠️ Este projeto assume que você já tem familiaridade com Docker ou Multipass.

📺 [Vídeo de apresentação e configuração](https://www.youtube.com/watch?v=oditGWmKjf8&t=24s)

---

### 1️⃣ Configurar Ambiente SQL (MariaDB ou MySQL) docker ou multipass

Você precisa de um banco de dados com acesso remoto habilitado.

🔗 [Como instalar MySQL no Ubuntu (DigitalOcean)](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04)

---

### 2️⃣ Clonar o Repositório ambente dev docker ou multipass 

```bash
git clone https://github.com/Pett97/crud-carros-nest.git
```

---

### 3️⃣ Instalar Dependências no Ambiente de Desenvolvimento

No container de desenvolvimento (ou máquina local), instale as dependências:

```bash
yarn install
# ou
npm install
```

---

### 4️⃣ Configurar Conexão com o Banco de Dados

Edite o arquivo `src/app.module.ts` com as credenciais do seu banco:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: '<IP_HOST_SQL>',
  port: 3306,
  username: '<SEU_USUARIO>',
  password: '<SUA_SENHA>',
  database: '<NOME_DO_BANCO>',
  entities: [Carro],
  synchronize: true,
})
```

---

### 5️⃣ Testar a API

Você pode utilizar o Postman ou qualquer outra ferramenta para testar a API.

- **Rota:** `http://<IP_DEV>/carro`
- **Body exemplo (POST):**

```json
{
  "marca": "Ford",
  "modelo": "Mustang-GT",
  "hp": 450
}
```

- **Resposta esperada:** `HTTP 201 Created`

---

## 🌐 Ambiente Web

### 1️⃣ Clonar o Projeto no Servidor Web

```bash
cd /var/www/
git clone https://github.com/Pett97/crud-carros-nest.git
```

Resultado esperado:

```
/var/www/crud-carros-nest/web
```

---

### 2️⃣ Configurar NGINX

#### Habilitar `.mjs` no `mime.types`

```bash
sudo nano /etc/nginx/mime.types
```

Adicione a linha:

```nginx
application/javascript           js mjs;
```

#### Editar Virtual Host

Edite o arquivo de configuração em `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/crud-carros-nest/web;
    index index.html index.htm;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### 3️⃣ Testar e Reiniciar NGINX

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### 4️⃣ Configurar URL do Backend no Frontend

Edite o arquivo:

```
/var/www/crud-carros-nest/web/const.mjs
```

Atualize a constante:

```js
const URL_BACKEND = 'http://<IP_DO_BACKEND>/carro';
```

---

### ✅ Acessar o Projeto Web

Abra o navegador e acesse: `http://<IP_SERVIDOR_WEB>`  
Você poderá utilizar o CRUD de carros diretamente pela interface gráfica.

---
