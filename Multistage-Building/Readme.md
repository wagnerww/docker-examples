# Multistage-Building
    É uma forma de fazer um build com uma imagem mais completa, utilizando configurações
    especificas para a máquina de build. Após este build o arquivo gerado será enviado
    para uma outra imagem com bem menos recursos(alpine) para diminuir o peso e recursos desnecessários.
## Check Steps

### Generate image:
    docker build -t wagnerww/laravel:prod . -f Dockerfile.prod

### Visualize image:
    docker images

### Execute and enter in container:
    docker images | grep laravel
    docker run --rm --name laravel -p 8000:8000 wagnerww/laravel:prod

#### Test:
- Repare que a imagem de build, tageada com "prod" vai ter um terço da imagem normal "latest".
