import { OpenAIEdgeStream } from "openai-edge-stream";

export const config = {
 runtime: "edge",
};

export async function handler(req){
    try{
    const {message} = req.json;
    const stream= await OpenAIEdgeStream("https://api.openai.com/v1/chat/completions",
    {
        headers:{'content-type': 'application/json'},
    })
    }catch(e){
        console.log("Un error ha ocurrido al enviar el mensaje", e);
    }
}