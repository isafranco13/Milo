import { OpenAIEdgeStream } from "openai-edge-stream";
import { NextResponse } from "next/server";
import OpenAI from "openai";
//import {Configuration, OpenAIApi} from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//Si la API Key no es valido lanzara un error
if(!openai.apiKey){
    throw new Error("No se pudo conectar al chatgpt pirata :(")
}

//const openai = new OpenAIApi(configuration)
export const runtime = 'edge';

export async function POST(req){
    
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hello"}],
        });
        console.log("hola, soy la API");
        console.log(chatCompletion.choices[0].message);
        return NextResponse.json({message: "Hello from the server!"});
    
    
    /*const {message} = await req.json();
    console.log ("mensaje del cliente:", message);

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: "user",
            //Tu eres Milo, Un asistente AI que forma parte de DataDoorAccess que ayuda a los usuarios con preguntas sobre los datos de asistencia de sus empleados, ellos te pasaran datos de nuestra aplicación y tu deberas darles lo que piden, sea un consejo o un resumen sobre que hacer. Eres amable.
            content: "You are Milo, an AI assistant that is part of DataDoorAccess that helps users with questions about their employee's attendance data, they will pass you data from our application and you must give them what they ask for, be it advice or a summary of what to do. You are kind."
            },
            ...message,
        ],
        stream: true,
    });
    
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);*/
}

/*export default async function POST(req){
    try{
        const message = await req.json();
        const stream= await OpenAIEdgeStream('https://api.openai.com/v1/chat/completions',
        {
            headers:{'content-type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
            },
            method: "POST",
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{content: message, role: "user"}],
                stream: true
            }) 
        }
        );
        const response = await NextResponse.json(stream);
        return NextResponse.json(response);
        //return NextResponse.json(stream);
    
        }catch(e){
            console.log("Un error ha ocurrido al enviar el mensaje", e);
        }
}*/