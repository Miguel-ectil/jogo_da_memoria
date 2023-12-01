FROM node:21.1.0

WORKDIR /usr/app

# Copiar apenas os arquivos relacionados ao pacote npm
COPY package*.json ./
RUN npm install && npm cache clean --force

# Instalação de dependências
RUN npm install

COPY . .

# Construir a aplicação
RUN npm run build

# Comando para iniciar o servidor
CMD ["npm", "start"]

EXPOSE 3000
