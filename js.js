class TaskManager {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.addButton = document.getElementById('addButton');
        this.clearButton = document.getElementById('clearAll');
        this.taskCounter = document.getElementById('taskCounter');
        
        this.init();
    }
    
    init() {
        this.addButton.addEventListener('click', () => this.addTask());
        this.clearButton.addEventListener('click', () => this.clearAllTasks());
        document.querySelectorAll('.task-item').forEach(task => this.setupTask(task));
        this.updateCounter();
    }
    
    addTask() {
        const task = document.createElement('div');
        task.className = 'task-item';
        task.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <p class="task-text" contenteditable="true">- Новая задача</p>
            <button class="btn btn-delete" aria-label="Удалить задачу">×</button>
        `;
        this.taskList.appendChild(task);
        this.setupTask(task);
        this.updateCounter();
    }
    
    setupTask(task) {
        const checkbox = task.querySelector('.task-checkbox');
        const text = task.querySelector('.task-text');
        const deleteBtn = task.querySelector('.btn-delete');
        
        checkbox.addEventListener('change', () => {
            text.classList.toggle('completed', checkbox.checked);
        });
        
        deleteBtn.addEventListener('click', () => {
            task.remove();
            this.updateCounter();
        });
    }
    
    clearAllTasks() {
        if (this.taskList.children.length > 0 && confirm('Вы действительно хотите удалить все задачи?')) {
            this.taskList.innerHTML = '';
            this.updateCounter();
        }
    }
    
    updateCounter() {
        const count = this.taskList.children.length;
        this.taskCounter.textContent = `Задач: ${count}`;
    }
}

document.addEventListener('DOMContentLoaded', () => new TaskManager());