FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

# Installer netcat
RUN apt-get update && apt-get install -y netcat

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
