import model from "../models";

export default {
  agregar: async (req, res, next) => {
    try {
      const { nombre, puesto, email, telefono, direccion, profecion } = req.body;

      const empleados = new model.Empleado({
        nombre,
        puesto,
        email,
        telefono,
        direccion,
        profecion,
      });

      const registro = await empleados.save();
      res.status(200).json(registro);
      console.log(req.body);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al guardar los datos",
      });

      next(e);
    }
  },

  consultar: async (req, res, next) => {
    try {
      const empleados = await model.Empleado.find();
      console.log(empleados);
      res.json(empleados);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error al consultar",
      });

      next(error);
    }
  },

  consultarUno: async (req, res, next) => {
    try {
      const consulta = await model.Empleado.findById(req.params.id);

      if (!consulta) {
        res.status(404).send({
          message: "El registro con el id solicitado no existe",
        });
      } else {
        res.status(200).json(consulta);
      }
    } catch (e) {
      res.status(500).send({
        message: "El id no existe",
      });
      next(e);
    }
  },

  eliminar:async(req, res, next)=>{
      try {

        const eliminarPersona= await model.Empleado.findByIdAndDelete(req.params.id);
        res.status(200).send({
            message: "La informacion ha sido eliminada correctamente"
        });
          
      } catch (error) {
          res.status(500).send({
              message: "El id para eliminar persona no existe"
          });

          next(error);
      }
  },

  Actualizar: async(req, res, next)=>{
      try {
          const {nombre, puesto, email, telefono, direccion, profecion}=req.body;

          const actualizarPersona={
            nombre,puesto,email,telefono,direccion,profecion
          }

          const datosActuales = await model.Empleado.findByIdAndUpdate(req.params.id, actualizarPersona);
          res.json(actualizarPersona);

      } catch (error) {
          res.status(500).send({
              message:"Ocurrio un error al tratar de actualizar"
          });
          next(error);
      }
  }
};
