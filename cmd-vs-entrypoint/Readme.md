# CMD VS ENTRYPOINT COMMAND
Difference into command CMD and ENTRYPOINT

## Check Steps

### Generate image:
    docker build -t wagnerww/cmd-vs-entrypoint .

### Visualize image:
    docker images

### Execute container:
    docker run --rm wagnerww/cmd-vs-entrypoint

#### Tests:
- Execute container:
        
        docker run --rm wagnerww/cmd-vs-entrypoint

- Command variable:
        
        docker run --rm wagnerww/cmd-vs-entrypoint Wagner

#### Observables:
- O comando CMD é variável, ou seja, a partir de um parâmetro é possível alteralo. 
- O ENTRYPOINT, é fixo, ou seja, nao é possível altera-lo.
