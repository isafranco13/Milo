import { OpenAIEdgeStream } from "openai-edge-stream";

/*export const config = {
 runtime: 'edge',
};*/
export const runtime = 'edge';

export default async function handler(req){
    try{
    const {message} = req.json;
    console.log("Mensaje del ususario: ", message)
    //const stream= await OpenAIEdgeStream('https://api.openai.com/v1/chat/completions',
    /*{
        headers:{'content-type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        method: 'POST',
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{content: message, role: "user"}],
            stream: true, 
        }) 
    }
    );
    return new Response(stream);*/
    
    }catch(e){
        console.log("Un error ha ocurrido al enviar el mensaje", e);
    }
}