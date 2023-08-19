
import { clientes } from "../data/clientes.js";



export const get_users = (request, response)=>{
    
    try {
        
        var id = request.params.id
    
        var nombre = clientes[id].nombre
    
        response.send(`<h1>Hola ${nombre} Peticion Get</h1>`).statusCode(200)
        
    } catch (error) {
        response.send(`<h1>No se encontro el usuario</h1>`).statusCode(304)
    }
}



export const post_cliente = (request, response)=>{
    response.send("<h1>Hola Gary Peticion Post</h1>")
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