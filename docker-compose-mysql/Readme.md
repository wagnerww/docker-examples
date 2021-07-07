# Docker-Compose
    Exemplo básico de docker compose, que vai buildar criar um banco mysql,
    e aramzenar em uma pasta local "mysql", par anão perder os dados.
    Usuário padrão: root

    restart: always = Se o container cair por algum motivo, ele vai restartar novamnete
    tty: true = Permite entrar no container para fazer alguma ação
## Check Steps

### Generate image:
    docker-compose up -d --build
    
### Visualize image:
    docker-compose ps

### Logs:    
    docker logs db-mysql-compose

### Break compose:
    docker-compose down
