// Приветствие при нажатии на кнопку
function showMessage() {
    alert('Спасибо, что посетили мой сайт!');
}

// Обработка отправки формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    if (name && email && message) {
        formMessage.style.color = 'green';
        formMessage.innerHTML = '✅ Спасибо, ' + name + '! Ваше сообщение отправлено.';
        
        // Очищаем форму
        document.getElementById('contactForm').reset();
        
        // Через 3 секунды скрываем сообщение
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 3000);
    } else {
        formMessage.style.color = 'red';
        formMessage.innerHTML = '❌ Пожалуйста, заполните все поля!';
    }
});

// Плавная прокрутка к якорям
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления карточек при скролле
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Текущий год в подвале
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Мой сайт. Все права защищены.`;
