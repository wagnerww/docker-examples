# api-node-container-programing
Code from node into container

## Check Steps


### Running Docker Image
    
    docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash

### Programing
access dir in container:
        
        cd /usr/src/app/app
        npm install

### Start app:
    
    node index.js

#### Tests:
Test page access:
    http://localhost:3000

