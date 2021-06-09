# NGINX CUSTOM PAGES
Copy page from computer to container

## Check Steps

### Generate image:
    docker build -t wagnerww/nginx-custom-pages:latest .

### Visualize image:
    docker images

### Execute container:
    docker run -t wagnerww/nginx-custom-pages

#### Test:
    - Start in app folder
    - verify file copy html in /usr/share/nginx/html
