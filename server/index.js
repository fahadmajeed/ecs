import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/cars';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/v1/cars', router);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});
app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});

export default app;