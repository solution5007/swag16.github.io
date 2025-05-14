document.addEventListener('DOMContentLoaded', function() {
    // Элементы страниц
    const welcomePage = document.getElementById('welcome-page');
    const plannerPage = document.getElementById('planner-page');
    const startButton = document.getElementById('start-planner');
    
    // Элементы планировщика
    const taskContainer = document.getElementById('task-container');
    const addTaskBtn = document.getElementById('add-task');
    const premiumSection = document.getElementById('premium-section');
    const buyPremiumBtn = document.getElementById('buy-premium');
    const premiumDetails = document.getElementById('premium-details');
    
    let taskCount = 0; // Счётчик задач
    
    // Переключение на страницу планировщика
    startButton.addEventListener('click', function() {
        welcomePage.classList.remove('active');
        plannerPage.classList.add('active');
        
        // Инициализация первых 3 задач
        for (let i = 0; i < 3; i++) {
            addNewTask();
        }
    });
    
    // Добавление новой задачи
    function addNewTask() {
        taskCount++;
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <div class="task-content">
                <input type="text" placeholder="Введите задачу" class="task-input">
            </div>
            <div class="task-time">
                <input type="datetime-local" class="time-input">
            </div>
        `;
        taskContainer.appendChild(taskDiv);
        
        // Проверка лимита задач
        if (taskCount >= 8) { // 3 начальных + 5 дополнительных
            addTaskBtn.style.display = 'none';
            premiumSection.style.display = 'block';
        }
    }
    
    // Обработчик кнопки добавления задачи
    addTaskBtn.addEventListener('click', addNewTask);
    
    // Показ деталей премиума
    buyPremiumBtn.addEventListener('click', function() {
        premiumDetails.innerHTML = `
            <h3>Премиум доступ</h3>
            <p>Для разблокировки неограниченного количества задач переведите 299 рублей на карту:</p>
            <div class="card-number">5536 9177 2894 2068</div>
            <p>После оплаты отправьте скриншот на support@planner.ru</p>
        `;
        premiumDetails.style.display = 'block';
    });
});