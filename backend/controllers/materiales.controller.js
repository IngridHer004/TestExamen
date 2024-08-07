import { modeloMateriales } from "../models/materiales.model.js";

const test = () => {
    console.log("Conexion a Materiales")
}
export default test

modeloMateriales.create({
    name:"Llanta",
    type:"Brickstown",
    amount:1500
})