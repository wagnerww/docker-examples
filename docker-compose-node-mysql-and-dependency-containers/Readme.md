# Docker-Compose Depencies Container
    As vezes precisamos subir um container antes do outro, para isso o da para usar
    o comando "depends_on". O problema, é que ele colocar na ordem de boot, mas
    não espera os servços internos subirem.

    Para isso, foi utilizado o solução do dockerrize:
        https://github.com/jwilder/dockerize
    
    No Dockerfile do node, é eexcutado um comando para isntalar esse cara.
    No docker-compose, é feito um entrypoint no node para executar o  dockerize
    pro um tempo para "pescar" se o serviço mysql esta ok.

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
    docker-compose down container_name
