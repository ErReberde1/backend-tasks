import {Router} from 'express';

const router = Router();

import taskCtrl from '../controllers/taskcontroller.js'



/* Creating a route for the API. */


router.route('/')
    .get(taskCtrl.getTasks)
    .post(taskCtrl.postTasks)
router.route('/:id')
    .get(taskCtrl.getTask)
    .put(taskCtrl.putTask)
    
    
export default router