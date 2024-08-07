import { modeloPerdidos } from "../models/materialesPerdidos.model.js";

const test = () =>{
    console.log("Conexion a Materiales perdidos")
}
export default test

modeloPerdidos.create({
    name:"Motor",
    type:"Maquina 1999",
    amount:500
})