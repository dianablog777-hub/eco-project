
console.log("JavaScript файл index.js підключено успішно!");

let isTextChanged = false;

function changeContent() {
    const textElement = document.getElementById("hero-text");

    if (textElement) {
        if (!isTextChanged) {
            textElement.innerHTML = "Дякуємо за ваш внесок у збереження довкілля! 🌱";
            textElement.style.color = "#2e7d32";
            textElement.style.fontWeight = "bold";
            isTextChanged = true;
        } else {
            textElement.innerHTML = "Дізнайся, як твій вибір сьогодні змінює вигляд планети завтра.";
            textElement.style.color = "#2e7d32";
            textElement.style.fontWeight = "normal";
            isTextChanged = false;
        }
    }
}

function convertPaper() {
    const input = document.getElementById("paperInput");
    const result = document.getElementById("calcResult");

    if (input && result) {
        const kg = parseFloat(input.value);
        if (kg > 0) {
            const trees = (kg * 0.017).toFixed(3);
            result.innerHTML = `Ви рятуєте <strong>${trees}</strong> дерев! 🌳`;
        } else {
            alert("Будь ласка, введіть коректну вагу!");
        }
    }
}



document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyE') {
        // 1. Змінюємо загальний фон сторінки
        document.body.style.background = "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)";

        // 2. Робимо білим ТІЛЬКИ той текст, який не знаходиться всередині карток чи таблиць
        // Ми додаємо стиль безпосередньо до body, але виключаємо блоки з білим фоном через CSS
        const style = document.createElement('style');
        style.innerHTML = `
            body { color: white !important; }
            .eco-card, .eco-card *, table, table * { color: #2e7d32 !important; }
        `;
        document.head.appendChild(style);

        alert("Еко-режим активовано!");
    }
});