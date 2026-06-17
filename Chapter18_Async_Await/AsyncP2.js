function getToken()
{
 return Promise.resolve("Jogireddy")
}

async function run(){
 let token = await getToken();
 console.log(token);
}

run();