function loadUserProfile(userName){
    console.log(`---Интерфейс пользователя ${userName} загружен---`);
    setTimeout(() => {
        console.log(`Данные пользователя загружены`);
    });
    console.log(`Дополнительные элементы загружены`);
}

loadUserProfile('Миша Ларченко :)');
