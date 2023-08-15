import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());
app.use('/posts', router);

// for database we use mongodb
const CONNECTION_URL = 'mongodb+srv://bapakfadil:43211234@memoriescluster.miznrsu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

/*
// script below is deprecated and no longer supported in mongodb v6+
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
;
mongoose.set('useFindAndModify', false);
*/

// for mongoose/mongodb v6+ use this line below
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))
;