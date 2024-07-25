import { OpenAIEdgeStream } from "openai-edge-stream";

export const config = {
 runtime: "edge",
};

export async function handler(req){
    try{
    const {message} = req.json;
    }catch(e){
        console.log("Un error ha ocurrido al enviar el mensaje", e);
    }
}