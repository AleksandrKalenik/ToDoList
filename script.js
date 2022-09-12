const toDoList = []
let textOfToDoList = ''
console.table(toDoList)
const addElementToDoNode = document.querySelector('.addToDoList')
const showToDoNode = document.querySelector('.showToDoList')
const addToDoTextInput = document.querySelector('.addToDoTextInput')
const addToDoButton = document.querySelector('.submitAddToDoButton')

// Метод установки фокуса на элементе INPUT для ввода
const setFocusOnInput = () => {
    document.getElementById('addToDoText').focus() 
}


//  Метод добавления элементов в список ToDo 
const addToDoListElement = (textOfToDoList) => {
    toDoList.push({
        id: Math.random(),
        text: textOfToDoList,
        isComplete: false
    })

    refreshListOnPage()
    
}

//  Метод вывода на страницу списка ToDo
const refreshListOnPage = () => {
        
    showToDoNode.innerHTML=''
    
    toDoList.forEach(currentElement => {  
       
        //отображаются только элементы списка, статус которых - не завершён
        if (currentElement.isComplete === false) {
            showToDoNode.innerHTML += `<ul class="elementOfList">${currentElement.text} <button class="completeButtons" data-id='${currentElement.id}'>Выполнено</button></ul>`
            

        }
    
    })

}

// Метод удаления элементов из списка
    const changeStatusOfToDoElement = (indexOfElement) => {
        
        toDoList.forEach(element => {
            
            if (element.id == indexOfElement) {
                element.isComplete=true
                console.log(`свойство isComplete объекта ${element} изменено на true`)
                console.log(toDoList)
            }
        
        });
    
    }

    // Метод обработки кликов по кнопкам удаления ToDo
    showToDoNode.addEventListener ('click', (event) => {
        
        // Проверка - был ли клик именно по кнопке, если нет - выходим из метода
        if (event.target.tagName !== 'BUTTON') {

            return

        }
            
            const id = event.target.dataset.id
            changeStatusOfToDoElement(id)
        
        refreshListOnPage() //Обновляем список на странице
        
        // Переключить фокус на поле ввода   
        setFocusOnInput()
    })

    // Метод обработки кликов по кнопке добавления ToDo
    
    addElementToDoNode.addEventListener('click', (event) => {
        
        // Проверка - был ли клик именно по кнопке, если нет - выходим из метода
        
        if (event.target.dataset.id !== 'addToDoButton') {

            return

        }

        //добавляем новый пункт в массив

        const text = document.getElementById('addToDoText').value
        if (text != '') {
            document.getElementById('addToDoText').value = ''
            // Переключить фокус на поле ввода   
            setFocusOnInput() 
            addToDoListElement(text)
            
            //Обновляем список на странице

            refreshListOnPage()
        }
        
    })

    // Метод обработки нажатия кнопки 'ENTER'

    addToDoTextInput.addEventListener('keyup', (event) => {
        
        // если код нажатой клавиши = 13 - выполняется событие клика по кнопке добавления в список
        if (event.keyCode === 13) {
            addToDoButton.click()
            
        }
    })

    // var dateNow = new Date()
    // Функция возвращает строку - текущее время (07:10:25)
    const getTimeNow = () => {
        var dateNow = new Date()
        return `${addZeroNumber(dateNow.getHours())}:${addZeroNumber(dateNow.getMinutes())}:${addZeroNumber((dateNow.getSeconds()))}`
    }

    // Функция возвращает строку - текущую дату
    const getDateNow = () => {
        var dateNow = new Date()
        return `${dateNow.getDate()} ${monthNumberToStr(dateNow.getMonth())} ${dateNow.getFullYear()}`
    }

    // Функция принимает числовое значение (0-11) и возвращает текстовое значение месяца. При ошибке аргумента - '--'
    const monthNumberToStr = (monthNumber) => {
        switch (monthNumber) {
            case 0: return 'Января';
            case 1: return 'Февраля';
            case 2: return 'Марта';
            case 3: return 'Апреля';
            case 4: return 'Мая';
            case 5: return 'Июня';
            case 6: return 'Июля';
            case 7: return 'Августа';
            case 8: return 'Сентября';
            case 9: return 'Октября';
            case 10: return 'Ноября';
            case 11: return 'Декабря';
            default: return '--'
        }
    }
    // Функция добавляет 0 впереди к целому числу от 1-9 и возвращает как строку
    const addZeroNumber = (numberArg) => {
        if (Math.trunc(numberArg) >= 0 && Math.trunc(numberArg) <= 9) {
            return `0` + Math.trunc(numberArg)
        }
        else return String(Math.trunc(numberArg))
    }

    function showDate(htmlElementId) {
        document.getElementById(htmlElementId).innerHTML = getDateNow()
    }

    function showTime(htmlElementId) {
        document.getElementById(htmlElementId).innerHTML = getTimeNow()
    }

    // Функция обновляет время и дату на странице
    function outText () {
        showTime('time')
        showDate('date')
    }

    // Задаём интервал обновления времени и даты на странице
    setInterval(outText, 1000)

