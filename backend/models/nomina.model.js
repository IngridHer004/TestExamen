import {Schema, model} from 'mongoose'

export const esquema3 = new Schema({
    name:{type:String},
    salary:{type:Number},
    import:{type:Number}
})

export const modeloNomina = new model('Nomina',esquema3)