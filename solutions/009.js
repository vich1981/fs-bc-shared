function queryServer1(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ответ от сервера 1');
        }, 500 + 1000*Math.random());
    });
}

function queryServer2(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ответ от сервера 2');
        }, 500 + 1000*Math.random());
    });
}
function queryServer3(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ответ от сервера 3');
        }, 500 + 1000*Math.random());
    });
}

async function findFastestServer(){
    console.log('Ищем самый быстрый сервер...');
    await Promise.race([queryServer1(), queryServer2(), queryServer3()])
        .then(result => {
          console.log(`${result}`);
          //console.log('Используем этот сервер для загрузки');
        });
    console.log('Используем этот сервер для загрузки');   
}

findFastestServer();
