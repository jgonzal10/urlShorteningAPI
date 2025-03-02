import express from "express";
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "../openai/openai.json";
import router from "../src/routes/index";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", router);
app.use(errorHandler);

export default app;
