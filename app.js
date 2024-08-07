import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import testBecarios from './backend/controllers/becarios.controller.js'
import testEmpleados from './backend/controllers/empleados.controller.js'
import testEntrenadores from './backend/controllers/entrenadores.controller.js'
import testLideres from './backend/controllers/lideres.controller.js'
import testMateriales from './backend/controllers/materiales.controller.js'
import testPerdidos from './backend/controllers/materialesPerdidos.controller.js'
import testNomina from './backend/controllers/nomina.controller.js'
import testTecnicos from './backend/controllers/tecnicos.controller.js'

dotenv.config()
mongoose.connect(process.env.url)

.then(()=>{
    console.log("Funciona")
})
.catch((error)=>{
    console.log("No funciona")
})

const app=express()
app.use(cors())

app.listen(4500,()=>{
    console.log("Funciona el servidor")
})

testBecarios()
testEmpleados()
testEntrenadores()
testLideres()
testMateriales()
testPerdidos()
testNomina()
testTecnicos()
