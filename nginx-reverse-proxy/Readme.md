# NGINX REVERSE PROXY
    - Este exemplo tem relação direta com a image criada no Multistate-Building. Então,
    ao rodar o docker run, certifique que a imagem foi criada antes
    
## Check Steps

### Generate image:
    docker build -t wagnerww/nginx-reverse-proxy:prod . -f Dockerfile.prod

### Visualize image:
    docker images

### Execute:
    docker network list
    docker network create laranet
    docker run -d --network laranet --name laravel-prod wagnerww/laravel:prod
    docker run -d --network laranet --name nginx-prod -p 8080:80 wagnerww/nginx-reverse-proxy:prod

#### Test your vim:
    vim hello

