# CMD VS ENTRYPOINT COMMAND
Difference into command CMD and ENTRYPOINT

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

