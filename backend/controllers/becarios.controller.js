import { modeloBecarios } from "../models/becarios.model.js";

const test = () => {
    console.log("Conexion a Becarios")
}
export default test

modeloBecarios.create({
    name:"Juan Rodriguez",
    age:22,
    taxes:"Software"
})