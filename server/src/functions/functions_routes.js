
//import { clientes } from "../data/clientes.js";
import { actualizar_usuario, borrar_usuario, buscar_usuario, crear_usuario, tabla_usuario } from "../database/connect.js";

/*
export const get_users = (request, response)=>{
    
    try {
        
        var id = request.params.id
    
        var nombre = clientes[id].nombre
    
        response.send(`<h1>Hola ${nombre} Peticion Get</h1>`).statusCode(200)
        
    } catch (error) {
        response.send(`<h1>No se encontro el usuario</h1>`).statusCode(304)
    }
}*/


export const get_cliente = async (request, response)=>{
    
    try {
        
        var id = request.params.id

        id = parseInt(id)
        //console.log(id)
    
        const respuesta = await buscar_usuario(id)
    
        response.send(respuesta)
        
    } catch (error) {
        response.send(`<h1>No se encontro el usuario</h1>`)
    }
}

export const get_clientes = async (request, response)=>{
    
    try {
    
        const respuesta = await tabla_usuario()
    
        response.send(respuesta)
        
    } catch (error) {
        response.send(`<h1>No se encontro el usuario</h1>`)
    }
}



export const post_cliente = async (request, response)=>{
    try{
        console.log(request.body)

        let nombre = request.body.nombre
        let apellido = request.body.apellido
        let telefono = request.body.telefono


        await crear_usuario(nombre,apellido,telefono)

        response.send("OK")
    }catch(e){
        response.send("Error")
    }
}



export const delete_cliente = async (request, response)=>{
    
    try {
        
        var id = request.params.id

        id = parseInt(id)
        //console.log(id)
    
        const respuesta = await borrar_usuario(id)
    
        response.send("OK")
        
    } catch (error) {
        response.send("ERROR")
    }

}



export const put_cliente = async (request, response)=>{
    
    try{
        
        let id = request.body.id
        let nombre = request.body.nombre
        let apellido = request.body.apellido
        let telefono = request.body.telefono


        await actualizar_usuario(id, nombre,apellido,telefono)

        response.send("OK")
    }catch(e){
        console.log(e)
        response.send("Error")
    }
}



export function get_404(req, res){
    res.send('<h1>what???</h1>', 404);
  }