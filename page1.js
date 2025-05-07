document.addEventListener('DOMContentLoaded', function() {
    // Анимация для кнопки
    const button = document.querySelector('.planner-button');
    
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
    
    // Логирование для отладки
    console.log('Главная страница загружена');
});