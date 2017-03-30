import Express from 'express';

import serverConfig from './config';

const app = new Express();

app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Lucifer is listening on port: ${serverConfig.port}! Build like hell!`); // eslint-disable-line
  }
});
