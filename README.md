### Lottery Front End (ReactJS + Typescript + Redux Toolkit + Redux Saga + Style Component)

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Project Technology

1. reduxt-tool-kit (RTK)<br />
2. reduxt-saga (https://redux-saga.js.org/)

```
api
    - axios
redux
    - app
        -store.ts
        -rootSaga.ts
    - features
        -auth
            -authSaga.ts
            -authSlice.ts
        -product
        -cart
        ....
```

Run Local as Server
Guide
https://theboroer.github.io/localtunnel-www/

```
lt --port 3000
```
