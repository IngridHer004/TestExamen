import { model } from 'mongoose'
import { esquema1 } from './entrenadores.model.js'

export const modeloTecnicos = new model('Tecnicos', esquema1)