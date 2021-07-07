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

### Access container MySQL:
    docker exec -it  db-node-mysql bash
    access mysql: mysql -uroot -p
    password: root
    list databases: show databases;
    Create table for tests:
        use app;
        create table people(id int not null auto_increment, name varchar(255), primary key(id));
        desc people;

### Access container Node:
    docker exec -it app-node-mysql bash
    npm install
    node index.js

### Test:
    in mysql container: select * from people;

### Break compose:
    docker-compose down
