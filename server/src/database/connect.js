import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user : "postgres",
    password : "root",
    database : "postgres",
    host : "127.0.0.1"
})

await client.connect()
 

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
