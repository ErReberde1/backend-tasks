import express from 'express';

import userCtrl from '../controllers/usercontroller.js'

/* Creating a new router object. */

const router = express.Router()

/* A way to chain the routes. */
router.route('/')
    .post(userCtrl.getMyUser)
router.route('/:id')
    .post(userCtrl.postMyUser)


export default router