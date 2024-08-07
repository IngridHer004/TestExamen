import {Schema, model} from 'mongoose'

export const esquema1 = new Schema({
    name:{type:String},
    age:{type:Number},
    persons:{type:Number}
})

export const modeloEntrenadores = new model('Entrenadores',esquema1)