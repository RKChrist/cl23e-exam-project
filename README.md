# Zay eCommerce

This is a demo project for Containerization & Linux elective at [UCL University College](https://ucl.dk)

The frontend is based on the following template:

* https://github.com/mosaadaldeen/zay-shop

## Frontend

There is a specific README.md file in the frontend project

## Backend

There is a specific README.md file in the backend project

# Building Docker files
## Building Development Docker Image
Run the following command:
docker-build-dev.sh

## Building Staging Docker Image
Run the following command:
docker-build-prod.sh

# Containerization

## Startup development enviroment in docker compose
docker compose --env-file ./config/.env.dev build
docker compose --env-file ./config/.env.dev up

## Startup staging enviroment in docker compose
Run commands:
docker compose --env-file ./config/.env.prod build
docker compose --env-file ./config/.env.prod up

## Docker Swarm with production
### Startup docker swarm run command:
Docker swarm init

### Deploy Stack 
Run command
Docker stack deploy --compose-file docker-swarm-compose.yaml CL23exam
