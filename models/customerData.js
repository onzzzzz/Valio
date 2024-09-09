import { Schema, models, model } from 'mongoose';

const dataSchema = new Schema(
    {
        date: Date,
        expence: Boolean,
        amount: Number,
        name: String,
        category: String,
        icon: String,
    }
);

const Mango = models.data || model('data', dataSchema, 'data');

export default Mango;