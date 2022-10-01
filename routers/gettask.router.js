
import {Router} from 'express';

const router = Router();

import taskCtrl from '../controllers/taskcontroller.js'




router.route('/')
    .post(taskCtrl.getTasks)

export default router