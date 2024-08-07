import {model} from 'mongoose'
import { esquema } from './empleados.model.js'

export const modeloBecarios = new model('Becarios',esquema)