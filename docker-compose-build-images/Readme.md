# Docker-Compose
    Exemplo básico de docker compose, que vai buildar 2 imagens utilizandas da pasta 
    "multistage-building" e "nginx-reverse-pyoxy".

    Caso alterar alguma coisa no Dockerfile, é necessário executar:
    docker-compose up -d --build
## Check Steps

### Generate image:
    docker-compose up
    docker-compose up -d
    
    #Rode com este comando abaixo para a imagem sempre se atualizar:
    docker-compose up -d --build

### Visualize image:
    docker-compose ps

### Break compose:
    docker-compose down
