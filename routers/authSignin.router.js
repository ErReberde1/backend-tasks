import {Router} from 'express';

import signInCtrl from '../controllers/authSignin.controller.js'

const router = Router()


router.route('/')
    .post(signInCtrl.loginUser)


export default router