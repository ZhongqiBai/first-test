document.getElementById('greetBtn').addEventListener('click', function () {
    const greetings = [
        "欢迎来到我在GitHub上创建的第一个测试网站",
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting').textContent = randomGreeting;
});