import routerx from 'express-promise-router';
import empleadoController from '../controller/empleado.controller';

//const routerx = require('express-promise-router');

import EmpleadoController from '../controller/empleado.controller';
//const PersonaController=require('../controller/persona.controller');

const router=routerx();

router.post('/crearEmpleado', EmpleadoController.agregar);
router.get('/listarEmpleados', EmpleadoController.consultar);
router.get('/listarEmpleado/:id', EmpleadoController.consultarUno );
router.delete('/eliminarEmpleado/:id', EmpleadoController.eliminar);
router.put('/actualizarEmpleado/:id', EmpleadoController.Actualizar);


export default router;