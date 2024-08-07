import { modeloEmpleados } from "../models/empleados.model.js";

const test = () => {
    console.log("Conexion a Empleados")
}
export default test

modeloEmpleados.create({
    name:"Mariano Martinez",
    age:44,
    taxes:"Supervisor"
})