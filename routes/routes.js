const express = require('express')
const router = express.Router()
const ControllerRoutes = require('../controller/ControllerRoutes')



router.get("/",ControllerRoutes.index)
router.post("/enviar" , ControllerRoutes.enviar)
router.put("/enviar/:id" , ControllerRoutes.atualizar)
router.delete("/enviar/:id" , ControllerRoutes.deleteUser)








module.exports = router