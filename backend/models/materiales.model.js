import {Schema, model} from 'mongoose'

export const esquema4 = new Schema({
    name:{type:String},
    type:{type:String},
    amount:{type:Number}
})

export const modeloMateriales = new model('Materiales',esquema4)