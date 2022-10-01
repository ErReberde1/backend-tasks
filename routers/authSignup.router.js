import {Router} from 'express';

import signUpCtrl from '../controllers/authSignupcontroller.js'

const router = Router()


router.route('/')
    .post(signUpCtrl.postUser)


export default router