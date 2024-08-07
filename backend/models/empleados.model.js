import { Schema, model } from 'mongoose'

export const esquema = new Schema({
    name:{type:String},
    age:{type:Number},
    taxes:{type:String}
})

export const modeloEmpleados = new model('Empleados',esquema)