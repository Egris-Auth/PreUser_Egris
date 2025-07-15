export async function POST(req) {
    const {email} = await req.json();
    console.log(email);
    const lambdaResponse = await fetch('https://i3eld6p8k4.execute-api.eu-north-1.amazonaws.com/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
    });
    const data = await lambdaResponse.json();
  
    return Response.json({ Data: data });
}  