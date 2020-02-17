import { connectDB } from './config/index';
import app from './app';

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    console.log('db connected...');
    app.listen(PORT, () => {
        console.log(`Server started listening on port ${PORT}`);
    });
})