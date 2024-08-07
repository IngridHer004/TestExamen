import { modeloTecnicos } from "../models/tecnicos.model.js";
 
const test = () =>{
    console.log("Conexion a Tecnicos")
}
export default test

modeloTecnicos.create({
    name:"Diego Padilla",
    age:39,
    persons:120
})