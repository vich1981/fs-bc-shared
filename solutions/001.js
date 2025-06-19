function fetchUserInfo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({name: 'Владимир Недопрогер',
               bio: 'Старпер ..внокодер'}
      );
    }, 1*1000);
  });
}

function fetchUserTweets() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Здесь пишут всякую без связную дичь', 
               'Почему код никогда не запускается с первого раза?', 
               'Как я сюда попал, я даже синтаксиса JS функций не знаю ;)', 
               'Ребят я не понял, а что в JS типы не подвезли',
               'Народ, а что TypeScript реально на GO переходит?']
      );
    }, 1500);
  });
}

function fetchUserFollowers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1771);
    }, 500);
  });
}

async function loadUserProfile() {
  console.log('-Загрузка профиля-');
  const userInfo = await fetchUserInfo();
  const tweets = await fetchUserTweets();
  const followers = await fetchUserFollowers();

  console.log(`Имя: ${userInfo.name}`);
  console.log(`Био: ${userInfo.bio}`);
  console.log(`Твиты: \n\t${tweets.join(',\n\t')}`);
  console.log(`Подписчики: ${followers}`);
  console.log('-Профиль загружен-');
}
loadUserProfile();

               
      
