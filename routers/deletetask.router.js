import {Router} from 'express';

const router = Router();

import taskCtrl from '../controllers/taskcontroller.js'



/* Creating a route for the API. */
 router.route('/:id')
    .post(taskCtrl.deleteTask) 


export default router