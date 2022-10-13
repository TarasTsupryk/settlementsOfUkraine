import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

const DB_URL = process.env.DB_URL

const SUCCESS_TEXT = 'Successfully connected to the database';

const connectToDb = () => {
    mongoose.connect(DB_URL)
        .then((() => console.log(SUCCESS_TEXT)))
        .catch((error) => console.log(error))
}


export default connectToDb;