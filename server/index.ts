import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as bodyparser from 'body-parser';
import { generate } from 'shortid';


const app: express.Application = express();


app.listen(3000, () => {
    console.log("listening on port 3000");
})


//use at least one middleware
//use modules
