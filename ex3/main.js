// Функция для создания таблицы
function createTable(data) {
    // Выбираем элемент, в котором будет размещена таблица
    const tableContainer = d3.select("#table-container");
  
    // Очищаем содержимое контейнера
    tableContainer.html("");
  
    // Создаем таблицу
    const table = tableContainer.append("table");
  
    // Добавляем заголовок таблицы
    const tableHeader = table.append("thead");
    tableHeader.append("tr")
      .append("th")
      .text("Браузеры");
    tableHeader.append("tr")
      .append("th")
      .text("Доля рынка (%)");
  
    // Добавляем строки данных
    const tableBody = table.append("tbody");
    data.forEach(row => {
      const tableRow = tableBody.append("tr");
      tableRow.append("td").text(row.browser);
      tableRow.append("td").text(row.marketShare);
    });
  }
  
  // Исходные данные
  const data = [
    { browser: "Google Chrome", marketShare: 63.33 },
    { browser: "Apple Safari", marketShare: 13.13 },
    { browser: "Microsoft Edge", marketShare: 10.46 },
    { browser: "Mozilla Firefox", marketShare: 5.96 },
  ];
  
  // Отображение исходной таблицы
  createTable(data);
  
  // Функция для фильтрации данных
  function checkPage(threshold) {
    const filteredData = data.filter(row => row.marketShare >= threshold);
    createTable(filteredData);
  }
  
  // Добавление кнопки и обработка события клика
  const button = d3.select("#filter-button");
  button.on("click", () => {
    const threshold = parseInt(d3.select("#threshold-input").property("value"));
    checkPage(threshold);
  });
  