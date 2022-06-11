const toDoList = []
let textOfToDoList = ''
console.table(toDoList)
const addElementToDoNode = document.querySelector('.addToDoList')
const showToDoNode = document.querySelector('.showToDoList')

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
            showToDoNode.innerHTML += `<ul>${currentElement.text} <button data-id='${currentElement.id}'>Выполнено</button></ul>`
            

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

    })

    // Метод обработки кликов по кнопке добавления ToDo
    
    addElementToDoNode.addEventListener('click', (event) => {
        
        // Проверка - был ли клик именно по кнопке, если нет - выходим из метода
        
        if (event.target.dataset.id !== 'addToDoButton') {

            return

        }
        
        //добавляем новый пункт в массив

        const text = document.getElementById('addToDoText').value
        addToDoListElement(text)
        
        //Обновляем список на странице

        refreshListOnPage()

        
    })