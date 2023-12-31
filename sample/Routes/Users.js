const express = require ('express')
const {createUser, getUsers, getUserbyId, deletebyId, updateUserdetails, login, forgotPassword} = require ('../Controller/Userinfo')

const router = express.Router()

router.route('/create/new/user').post(createUser)
router.route('/get/all/users').get(getUsers)
router.route('/get/user/:id').get(getUserbyId)
router.route('/remove/user/:id').delete(deletebyId)
router.route('/update/user/:id').put(updateUserdetails)
router.route('/login').post(login)
router.route('/forgot/password').post(forgotPassword)




module.exports = router