function checkItemStock(itemName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const ratio = Math.random();
            if(ratio > 0.9) reject(new Error(`Продукта: ${itemName} нет в наличии :(`));
            else resolve({item: itemName, status: 'in_stock'});
        }, (100 + 500 * Math.random()));
        
    });
}

function processPayment(orderInfo){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({paimentId: '...', status: 'paid'});
        }, 1000);
    });
}

function createOrder(paymentInfo){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({orderId: '...', status: 'created'});
        }, 500);
    });
}

async function placeOrder(items) {
  console.log(`Оформляем заказ для: ${items.join(', ')}`);
  try {
    console.log('1. Проверяем наличие товаров...');
    const stockCheckPromises = items.map(item => checkItemStock(item));
    const stockResults = await Promise.all(stockCheckPromises);
    console.log('   Все товары в наличии:', stockResults.map(r => r.item));

    console.log('2. Обработка платежа...');
    const paymentInfo = await processPayment({ items, total: items.length * 100 });
    console.log(`   Платеж успешен: ID ${paymentInfo.paymentId}`);

    console.log('3. Создание заказа...');
    const orderInfo = await createOrder(paymentInfo);
    console.log(`   Заказ создан: ID ${orderInfo.orderId}`);

    console.log('--- Заказ успешно оформлен! ---');

  } catch (error) {
    console.error('--- Ошибка оформления заказа ---');
    console.error('Причина:', error.message);
  }
}

const items = ['Хлеб', 'Сало', 'Огурчик'];

placeOrder(items);
