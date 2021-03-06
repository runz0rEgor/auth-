const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');


router.post('/registration', [
  check('username', 'Имя юзера не может быть пустым').notEmpty(),
  check('password', 'Пароль быть больше 4 но меньше 10 символов').isLength({min:4, max:10})
] ,controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
module.exports = router