import express from 'express';
import bodyParser from 'body-parser';


import { config } from './config';
import { authorizationRouter } from './routers/authorization_router';
import { todosRouter } from './routers/todos_router';
import { authorizationMiddleware } from './middlwares/authorization_middleware';
import { globalErrorHandler } from './error_handlers/global_error_handler';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/v1/auth', authorizationRouter);
app.use('/v1/users', authorizationMiddleware, todosRouter);

/*
 * Global Error Handler
 */
app.use(globalErrorHandler);


app.listen(config.PORT, () => {
  console.log(`Starting the application on port ${config.PORT}`);
});