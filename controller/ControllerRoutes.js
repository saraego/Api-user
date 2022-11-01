const uuid = require('uuid')
const users = []


class ControllerRoutes {

    
    static index(req,res){
        res.json(users)
    }

    static enviar(req,res){
        const {name, age} = req.body
        const usuario = {id:uuid.v4(),name,age}
        users.push(usuario)
        res.status(201).json(usuario)
    }

    static atualizar(req,res){
        const {id} = req.params
        const {name, age} = req.body
        const atualizandoUser = {id, name,age}

        const index = users.findIndex(user => user.id == id)
        if(index < 0){
            return res.status(404).json({msg:"user not found"})
        }
        users[index] = atualizandoUser
        return res.status(204).json()
    }

    static deleteUser(req,res){
        const {id} = req.params
        
        const index = users.findIndex(user => user.id == id)
        if(index < 0){
            return res.status(404).json({msg:"user not found"})
        }
        users.splice(index,1)

        return res.status(204).json()

    }
}


module.exports = ControllerRoutes