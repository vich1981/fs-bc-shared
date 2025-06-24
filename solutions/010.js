async function postTweet(tweetText){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const ratio = Math.random();
            if(ratio < 0.7) resolve(`Твит:'${tweetText}' успешно опубликован`);
            else reject(new Error('Ошибка сети при публикации'));
        }, 1000);
        
    });
}

async function publish(){
    let isSuccess = true;
    try{
        const tweet = await postTweet('Мой последний твит на этом интенсиве!!!')
        isSuccess = true;
        console.log(tweet);
    }
    catch(error){
        console.log(error.message);
        isSuccess = false;
    }
    finally{
        let answer = isSuccess? 'Всё прошло как надо': 'Что-то пошло не по плану';
        console.log(answer);
    }
}

publish();
