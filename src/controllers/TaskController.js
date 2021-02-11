const { response } = require('express')
const database = require('../database/connection')

class TaskController {
    novaTarefa(request,reponse){

        const{tarefa, descricao, responsavel} = request.body

        console.log(tarefa,descricao,responsavel)

        database.insert({tarefa,descricao,responsavel}).table("tasks").then(data=>{
            console.log(data)
            response.json({message:"tarefa criada com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController();