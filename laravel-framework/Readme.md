# NGINX WITH VIM

## Check Steps

### Generate image:
    docker build -t wagnerww/laravel:latest .

### Visualize image:
    docker images

### Execute and enter in container:
    docker run --rm --name laravel -p 8000:8000 wagnerww/laravel

#### Test:
- access
        http://localhost:8000/

