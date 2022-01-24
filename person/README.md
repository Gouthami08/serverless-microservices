# Person microservice

## The following REST APIs are exposed:
```
  1. POST /person
  2. GET /person
```

## Project setup
```
cd person
yarn install
```

## Deployment for develop or production environment
```
1. Update the variables in env.develop or env.production files
2. Run the command
    yarn deploy develop OR yarn deploy production
```

## Serve offline
```
yarn serve develop
```

## Run unit tests
```
yarn test:unit
```