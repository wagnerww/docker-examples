# Docker-Compose
    Exemplo básico de docker compose, utilizando as imagens das pasta 
    "multistage-building" e "nginx-reverse-pyoxy". Executar estas imagens antes
## Check Steps

### Generate image:
    docker build -t wagnerww/laravel:prod . -f Dockerfile.prod
    docker build -t wagnerww/nginx-reverse-proxy:prod . -f Dockerfile.prod

### Visualize image:
    docker images

### Execute and enter in container:
    docker-compose up
