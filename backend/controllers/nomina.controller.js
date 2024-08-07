import { modeloNomina } from "../models/nomina.model.js";

const test = () =>{
    console.log("Conexion a Nomina")
}
export default test

modeloNomina.create({
    name:"Carlos Gutierrez",
    salary:10000,
    import:600
})