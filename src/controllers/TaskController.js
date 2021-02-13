const { response } = require('express')
const database = require('../database/connection')

class TaskController {
    novaTarefa(request,response){
        
        const{tarefa, descricao, responsavel} = request.body

        console.log(tarefa,descricao,responsavel)

        database.insert({tarefa,descricao,responsavel}).table("tasks").then(data=>{
            console.log(data)
            response.json({message:"tarefa criada com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarTarefas(request, response){
        database.select("*").table("tasks").then(tarefas=>{
          //  console.log(id)
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmaTarefa(request,response){
        const id = request.params
        console.log(id)

        database.select("*").table("tasks").where({id:id}).then(tarefa=>{
            response.json(tarefa)
            console.log(tarefa)
        
        }).catch(error=>{
            console.log(error)
        })
    }


}

module.exports = new TaskController();