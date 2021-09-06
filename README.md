## Entity to Entity

For fun project, based on the assumption "What if everything is an Entity?" while managing SQL schema with Prisma, and GraphQL with Nexus + Apollo.

### Dependencies

Install [Docker](https://docs.docker.com/engine/install/) to use with docker-compose and [NodeJS](https://nodejs.org) (which I recommend installing through [nvm](https://github.com/nvm-sh/nvm)).

### How to develop

```shell
npm i -g yarn # if you already have it, ignore this step

yarn install # to install package.json dependencies

docker-compose up -d # to run a postgre instance

yarn prisma migrate dev # it will populate your local postgre instance
```

Every time you change the file `./prisma/schema.prisma`, you need to run `yarn prisma generate && yarn prisma migrate dev`

Everytime you change the graphql folder, you need to run `yarn nexus`.

### Queries for the playground

Run the command `yarn server` and open `localhost:4000/graphql` at the browser, I prepared these queries to play with during development so you can easily copy and paste and have some fun.

```gql
mutation create {
  entityCreate(type: "", value: "") {
    id, type, value
  }
}

mutation update {
  entityUpdate(type: "Garage", id: "", value: "") {
    id, type, value
  }
}

mutation delete {
  entityDelete(id: "") {
    id, type, value
  }
}

query list {
  entityList(first: 100) {
    nodes {
      id
      type
      value
    }
  }
}
```

#### Run the front-end

Inside the folder `./frontend` there's a [React](https://reactjs.org/) with [NextJS](https://nextjs.org/) project, follow these commands to run it locally:

```sh
cd ./frontend

yarn # to install dependencies from package.json

yarn dev # and open http://localhost:3000 inn the browser
```

Everytime you change a file it will automatically recompile and reload the browser.

### Studio

Run the command `yarn prisma studio` and open `localhost:5555` at the browser, it will give you a perspective of what is going on with the Entity data.

### Credits

[@rvcas](https://github.com/rvcas): who introduced me to to a project that uses Nexus, Prisma, GraphQL and TypeScript all at once.
