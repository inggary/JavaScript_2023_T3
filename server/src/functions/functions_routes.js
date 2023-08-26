
import { clientes } from "../data/clientes.js";
import { buscar_usuario, crear_usuario } from "../database/connect.js";

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


export const get_users = async (request, response)=>{
    
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



export const delete_cliente = (request, response)=>{
    response.send("<h1>Hola Gary Peticion Delete</h1>")
}



export const put_cliente = (request, response)=>{

    response.send("<h1>Hola Gary Peticion Put</h1>")
}



export function get_404(req, res){
    res.send('<h1>what???</h1>', 404);
  }