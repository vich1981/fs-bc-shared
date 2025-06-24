function fetchAlbumDetails(albumId){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: albumId, title: 'Камнем по голове', artist: 'КиШ', tracks: ['Камнем по голове','Грохочет гром','В доме лесника']});
        }, 800);
    });
}

function fetchRecommendations(engineId, albumId){
    return new Promise(resolve => {
        setTimeout(() => {           
            resolve({engine: engineId, similarAlbums: [`Крылья`,`Лапы`, `Хвост`]});
        }, (500 + 1500 * Math.random()));
    });
}

function timeoutPromise(delay, message){
    return new Promise(reject => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    });
}

async function loadAlbumPage(albumId, recommendationEngines, totalTimeout){
    try {
        const fastestRecommendationsPromise = Promise.race(
            recommendationEngines.map(engineId =>
                fetchRecommendations(engineId, albumId)
                //console.log(`Запускаем движок ${engineId}`);
            )
        );
        
        const dataFetchPromise = Promise.all([
            fetchAlbumDetails(albumId),
            fastestRecommendationsPromise
        ]);
        
        const overallTimeoutPromise = timeoutPromise(totalTimeout, `Страница альбома ${albumId} не загрузилась за ${totalTimeout} мс`);
        
        const result = await Promise.race([
            dataFetchPromise,
            overallTimeoutPromise
        ]);
        
        const [albumDetails, recommendations] = result; 
        console.log('--- Страница альбома загружена ---');
        console.log('Альбом:', albumDetails.title, 'Исполнитель:', albumDetails.artist);
        console.log('Треки:', albumDetails.tracks);
        console.log(`Рекомендации (от ${recommendations.engine}):`, recommendations.similarAlbums);
        
    } 
    catch (error) {
        console.log('--- Ошибка загрузки страницы альбома ---');
        console.log('Причина:', error.message);
    }
        
}

const engines = ['engine1','engine2','engine3'];

loadAlbumPage(1, engines, 1000);
