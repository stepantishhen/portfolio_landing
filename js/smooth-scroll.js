document.addEventListener('DOMContentLoaded', () => {
    // Получаем все ссылки навигации
    const navLinks = document.querySelectorAll('.header__nav-link');
    
    // Добавляем обработчик для каждой ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Получаем ID секции из атрибута href
            const sectionId = link.getAttribute('href');
            
            // Находим секцию по ID
            const section = document.querySelector(sectionId);
            
            // Плавно прокручиваем к секции
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Обработка кнопки "Узнать больше"
    const heroButton = document.querySelector('.hero__button');
    heroButton.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Обработка кнопки "Связаться с нами"
    const contactButton = document.querySelector('.header__button');
    contactButton.addEventListener('click', () => {
        const contactsSection = document.querySelector('#contacts');
        contactsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 