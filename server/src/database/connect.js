import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user : "postgres",
    password : "root",
    database : "postgres",
    host : "127.0.0.1"
})

await client.connect()
 
// funcion asincronica
export const buscar_usuario = async (id) => {

    
    const result = await client.query('SELECT * FROM public.cliente WHERE "Id" = $1 ', [id])

    //console.log(result)

    return await result["rows"]

    
}

export const crear_usuario = async (nombre, apellido, telefono) => {

    let result

    result = await client.query('INSERT INTO public.cliente ("nombre", "apellido", "telefono") VALUES ($1, $2, $3) ', [nombre, apellido, telefono])

    //console.log(result["rows"])

    return result
    
}


export const actualizar_usuario = async (id, nombre, apellido, telefono) => {

    let result

    result = await client.query('UPDATE public.cliente SET "nombre" = $1, "apellido" = $2, "telefono" = $3 WHERE "Id" = $4 ', [nombre, apellido, telefono, id])

    //console.log(result["rows"])

    return result
    
}


export const borrar_usuario = async (id) => {

    let result

    result = await client.query('DELETE FROM public.cliente WHERE "Id" = $1 ', [id])

    //console.log(result["rows"])

    return result
    
}


export const tabla_usuario = async () => {

    let result

    result = await client.query('SELECT * FROM public.cliente')

    //console.log(result["rows"])

    return result["rows"]
    
}
