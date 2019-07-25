import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import router from './modules/auth/routes';

const app = express();
const PORT = 3000;

// middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, (err): void => {
  if (err) {
    console.error(err);
  }

  console.info(`Server listening in port ${PORT}`);
});
