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