import {Schema, model} from 'mongoose'

export const esquema2 = new Schema({
    name:{type:String},
    age:{type:Number},
    time:{type:String}
})

export const modeloLideres = new model('Lideres',esquema2)