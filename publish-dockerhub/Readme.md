# CMD VS ENTRYPOINT COMMAND
Difference into command CMD and ENTRYPOINT

## Check Steps

### Generate image:
    docker build -t wagnerww/publish-dockerhub .

### Visualize image:
    docker images

### Execute container:
    docker run --rm -d -p 8080:80 wagnerww/publish-dockerhub

#### Tests:
- Test page access:
        
        http://localhost:8080

#### Publish:
- Exceute:

        docker login

- Send image to Docker-Hub:
        
        docker push wagnerww/publish-dockerhub
