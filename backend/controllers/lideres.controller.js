import { modeloLideres } from "../models/lideres.model.js";

const test = () =>{
    console.log("Conexion a Lideres")
}
export default test

modeloLideres.create({
    name:"Brayan Benitez",
    age:38,
    time:"18 años"
})