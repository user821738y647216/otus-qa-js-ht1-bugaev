const readline = require('readline');

// Функция для Колобка (осталась без изменений)
function kolobok(character) {
    const messages = {
        'дедушка': 'Я от дедушки ушёл',
        'заяц': 'Я от зайца ушёл',
        'лиса': 'Меня съели'
    };

    const lowerChar = character.toLowerCase();
    return messages[lowerChar] || 'Неизвестный персонаж';
}

// Новая функция для Деда Мороза и Снегурочки
function newYear(name) {
    const lowerName = name.toLowerCase();
    
    if (lowerName === 'дед мороз') {
        return `${name}! ${name}! ${name}!`;
    } else if (lowerName === 'снегурочка') {
        return `${name}! ${name}! ${name}!`;
    } else {
        return 'Неизвестный персонаж';
    }
}

// Создаем интерфейс для ввода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Запрашиваем имя персонажа
rl.question('Введите имя персонажа (дедушка/заяц/лиса/Дед Мороз/Снегурочка): ', (answer) => {
    // Проверяем, подходит ли ввод под функцию kolobok
    const resultKolobok = kolobok(answer);
    if (resultKolobok !== 'Неизвестный персонаж') {
        console.log(resultKolobok);
    } else {
        // Если нет — проверяем через Newyear
        const resultChristmas = newYear(answer);
        console.log(resultChristmas);
    }
    rl.close();
});