# Minimum reproduction repository for NestJS incorrect host pattern on messages
Related pull request: https://github.com/nestjs/nest/pull/12321

## Installation
```bash
npm install
```

## Starting the server 
```bash
npm run build
npm run start
```

## Code to execute in browser console after the server is running
```js
const websocket = new WebSocket('ws://localhost:3001');
websocket.addEventListener('open', () => {
    websocket.send(JSON.stringify({
        event: 'foo',
        data: 'this is some data'
    }));
});
```

Correct behaviour should be `Pattern is: foo` in the logs.

Current behaviour is we get `Pattern is: this is some data` in the logs
