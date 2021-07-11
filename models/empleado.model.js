import mongoose, {Schema} from "mongoose";

const Empleados = new Schema({
    nombre: { type: String, maxlenght: 50, required: true },
    puesto: { type: String, maxlenght: 50, required: true },
    email: String,
    telefono: String, 
    direccion: { type: String, maxlenght: 50, required: true },
    profecion: { type: String, maxlenght: 50, required: true },
      createdAt:{
        type: Date, default: Date.now
    }
});

const Empleado= mongoose.model('empleado', Empleados);

export default Empleado;