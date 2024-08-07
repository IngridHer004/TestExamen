import { modeloEntrenadores } from "../models/entrenadores.model.js";

const test = () =>{
    console.log("Conexion a Entrenadores")
}
export default test

modeloEntrenadores.create({
    name:"Maciel Esqueda",
    age:26,
    persons:10
})