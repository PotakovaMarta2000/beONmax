// Создаем переменные  (money и time)
let money = prompt( "Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    // Создали объект appData
    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false
    };

    // Задаем пользователю по 2 раза вопросы
    let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    a2 = prompt("Во сколько обойдется?", ''),
	    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    a4 = prompt("Во сколько обойдется?", '');

    // Записали ответы в объект expenses 
    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;

    // Выводим на экран пользователя бюджет на 1 день 
    alert(appData.budget / 30);