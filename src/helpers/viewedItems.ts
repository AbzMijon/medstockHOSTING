function getArrayFromLocalStorage() {
    const data = localStorage.getItem('viewedItems');
    return data ? JSON.parse(data) : [];
}

// Функция для сохранения массива в localStorage
function saveArrayToLocalStorage(array: any) {
    localStorage.setItem('viewedItems', JSON.stringify(array));
}

function isObjectInArray(array: any[], obj: any) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(obj));
}


// Функция для добавления объекта в массив
export function addObjectToArray(obj: any) {
    const viewedItems = getArrayFromLocalStorage();
    
    // Проверяем, есть ли такой объект в массиве
    if (isObjectInArray(viewedItems, obj)) {
        console.log('Объект уже существует в массиве');
        return;
    }

    // Если массив уже содержит 3 объекта, заменяем первый объект новым
    if (viewedItems.length >= 3) {
        viewedItems.shift(); // Удаляем первый объект из массива
    }

    viewedItems.push(obj);
    saveArrayToLocalStorage(viewedItems);
}