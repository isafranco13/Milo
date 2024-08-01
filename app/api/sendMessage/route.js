import { OpenAIEdgeStream } from "openai-edge-stream";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import {OpenAIStream, StreamingTextResponse} from "ai";

export const runtime = 'edge';

export default async function POST(req){
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
}