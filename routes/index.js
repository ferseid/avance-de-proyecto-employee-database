import routerx from 'express-promise-router';

import EmpleadoRoute from './empleado.route';


const router=routerx();

router.use('/empleado', EmpleadoRoute);


export default router;