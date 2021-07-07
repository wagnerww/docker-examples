# Docker-Compose
    Exemplo básico de docker compose, que vai buildar criar uma imagem node,
    e aramzenar em uma pasta local "node", para poder codar dentro do container.

    restart: always = Se o container cair por algum motivo, ele vai restartar novamnete
    tty: true = Permite entrar no container para fazer alguma ação
## Check Steps

### Generate image:
    docker-compose up -d --build
    
### Visualize image:
    docker-compose ps

### Logs:    
    docker logs db-mysql-compose

### Access container:
    docker exec -it app-node bash
    npm install
    node index.js

### Test:
    access: http://localhost:3000

### Break compose:
    docker-compose down
