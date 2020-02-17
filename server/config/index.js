import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';

mongoose.set('useFindAndModify', false);

export const connectDB = () => {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'test') {
            const mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage()
            .then(() => {
                mongoose.connect(process.env.MONGODB_CONN, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                  }).then((res, err) => {
                    if (err) reject(err);
                    resolve();
                });
            })
        } else {
            mongoose.connect(process.env.MONGODB_CONN, {
                useNewUrlParser: true,
                useUnifiedTopology: true
              }).then((res, err) => {
                if (err) reject(err);
                resolve();
            });
        }
        
    });
}

export const closeConnection = () => mongoose.disconnect();