function loadVideo(){
    console.log('---Начало загрузки страницы видео---');
    const promise = new Promise(resolve => {
        resolve('Основная информация о видео загружена');
    })
    
    setTimeout(() => {
        console.log('Список рекомендаций загружен');
    }, 0);
    promise.then(result => console.log(`Успех: ${result}`));
}

loadVideo();
