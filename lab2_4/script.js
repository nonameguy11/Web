// document.addEventListener('DOMContentLoaded', () => {
//     const svg = d3.select("svg");
//     const width = +svg.attr("width");
//     const height = +svg.attr("height");
//     const margin = 20;
//     const circleRadius = 5; // Радиус кружочка

//     let initialShape; // Переменная для хранения начальной фигуры

//     // Функция для рисования начальной фигуры и кружочка
//     const drawShape = () => {
//         svg.selectAll("*").remove(); // Очищаем svg перед рисованием

//         const svgGroup = svg.append('g')
//             .attr('transform', `translate(${margin},${margin})`);

//         const adjustedWidth = width - margin * 2;
//         const adjustedHeight = height - margin * 2;

//         // Определяем путь для верхней и нижней частей фигуры
//         const topPath = [
//             `M ${adjustedWidth / 2} 0`, // Верхний центр
//             `Q ${adjustedWidth} 0, ${adjustedWidth / 2} ${adjustedHeight / 2}`, // Правая кривая
//             `Q 0 0, ${adjustedWidth / 2} 0` // Левая кривая
//         ].join(' ');

//         const bottomPath = [
//             `M ${adjustedWidth / 2} ${adjustedHeight}`, // Нижний центр
//             `Q ${adjustedWidth} ${adjustedHeight}, ${adjustedWidth / 2} ${adjustedHeight / 2}`, // Правая кривая
//             `Q 0 ${adjustedHeight}, ${adjustedWidth / 2} ${adjustedHeight}` // Левая кривая
//         ].join(' ');

//         // Рисуем верхнюю часть фигуры песочных часов
//         svgGroup.append('path')
//             .attr('d', topPath)
//             .attr('fill', 'steelblue')
//             .attr('stroke', 'black')
//             .attr('stroke-width', 2);

//         // Рисуем нижнюю часть фигуры песочных часов
//         svgGroup.append('path')
//             .attr('d', bottomPath)
//             .attr('fill', 'steelblue')
//             .attr('stroke', 'black')
//             .attr('stroke-width', 2);

//         // Рисуем кружочек в центре фигуры
//         const circle = svgGroup.append('circle')
//             .attr('cx', adjustedWidth / 2)
//             .attr('cy', adjustedHeight / 2)
//             .attr('r', circleRadius)
//             .attr('fill', 'red');

//         return { svgGroup, circle };
//     };

//     // Функция для запуска анимации
//     const startAnimation = () => {
//         const duration = +document.getElementById('durationInput').value;

//         const shape = initialShape.svgGroup.node();
//         const pathLength = shape.getTotalLength();

//         // Анимируем кружочек по контуру фигуры
//         initialShape.circle.transition()
//             .duration(duration)
//             .attrTween('transform', function() {
//                 return function(t) {
//                     const p = shape.getPointAtLength(t * pathLength);
//                     return "translate(" + p.x + "," + p.y + ")";
//                 };
//             });
//     };

//     // Функция для очистки анимации и возврата кружочка в исходное положение
//     const clearAnimation = () => {
//         initialShape.circle.transition().duration(0)
//             .attr('transform', `translate(${width / 2}, ${height / 2})`);
//     };

//     // Добавляем обработчики событий для кнопок
//     document.getElementById('startBtn').addEventListener('click', startAnimation);
//     document.getElementById('clearBtn').addEventListener('click', clearAnimation);

//     // Рисуем начальную фигуру и сохраняем её
//     initialShape = drawShape();
// });
// const width = 600;
// const height = 600;
// let svg = d3.select("svg").attr("width", width).attr("height", height);

// cx = ((1 + Math.cos(3 * Math.PI / 2)) * Math.cos(3 * Math.PI / 2)) * width / 5;
// cy = ((1 + Math.cos(3 * Math.PI / 2)) * Math.sin(3 * Math.PI / 2)) * height / 5 + 120;

// let pict = svg.append("g");
// pict.append("circle").attr("cx", width / 2).attr("cy", height / 2).attr("r", 40).attr("fill", "red");
// pict.append("circle").attr("cx", width / 2 - 20).attr("cy", height / 2 - 10).attr("r", 5).style("fill", "yellow");
// pict.append("circle").attr("cx", width / 2 + 20).attr("cy", height / 2 - 10).attr("r", 5).style("fill", "yellow");
// pict.append("circle").attr("cx", width / 2 + 20).attr("cy", height / 2 - 10).attr("r", 1).style("fill", "black");
// pict.append("circle").attr("cx", width / 2 - 20).attr("cy", height / 2 - 10).attr("r", 1).style("fill", "black");
// pict.append("ellipse").attr("cx", width / 2).attr("cy", height / 2 + 20).attr("rx", 30 / 2).attr("ry", 10 / 2).attr("fill", "black");
// pict.append("line").attr("x1", width / 2 - 20).attr("y1", height / 2 - 30).attr("x2", width / 2 - 10).attr("y2", height / 2 - 40).attr("stroke", "black").attr("stroke-width", 2);
// pict.append("line").attr("x1", width / 2 - 10).attr("y1", height / 2 - 30).attr("x2", width / 2).attr("y2", height / 2 - 40).attr("stroke", "black").attr("stroke-width", 2);
// pict.append("line").attr("x1", width / 2).attr("y1", height / 2 - 30).attr("x2", width / 2 + 10).attr("y2", height / 2 - 40).attr("stroke", "black").attr("stroke-width", 2);

// pict.append("line").attr("x1", width / 2 + 10).attr("y1", height / 2 - 30).attr("x2", width / 2 + 20).attr("y2", height / 2 - 40).attr("stroke", "black").attr("stroke-width", 2);
// let margin = 0;

//     const svgGroup = svg.append('g')
//         .attr('transform', `translate(${margin},${margin})`);

//     const adjustedWidth = width - margin * 2;
//     const adjustedHeight = height - margin * 2;


//     function createPath() {
//         let data =[ 
//             { "x": adjustedWidth / 2, "y": 0 },
//             { "x": adjustedWidth, "y": 0 },
//             { "x": adjustedWidth / 2, "y": adjustedHeight / 2 },
//             { "x": 0, "y": 0 },
//             { "x": adjustedWidth, "y": adjustedHeight },
//             { "x": 0, "y": adjustedHeight},
//             { "x": adjustedWidth, "y": 0 }];
//         return data;
//     }
    
//     function drawPath() {
//         const dataPoints = createPath();
//         const line = d3.line().y((d) => d.y).x((d) => d.x);
//         const path = svg.append('path').attr('d', line(dataPoints)).attr('stroke', 'black').attr('fill', 'none');
//         return path;
//     }
    
// let dataForm = document.getElementById("setting");

// let runAnimation = () => {
//     let animSpeed = dataForm.animSpeed.value;
//     let path = drawPath();
//     let pict = svg.append("g");
    
//     pict.append("circle").attr("cx", cx).attr("cy", cy).attr("r", 40).attr("fill", "red");
//     pict.append("circle").attr("cx", cx - 20).attr("cy", cy - 10).attr("r", 5).style("fill", "yellow");
//     pict.append("circle").attr("cx", cx - 20).attr("cy", cy - 10).attr("r", 1).style("fill", "black");
//     pict.append("circle").attr("cx", cx + 20).attr("cy", cy - 10).attr("r", 5).style("fill", "yellow");
//     pict.append("circle").attr("cx", cx + 20).attr("cy", cy - 10).attr("r", 1).style("fill", "black");
//     pict.append("ellipse").attr("cx", cx).attr("cy", cy + 20).attr("rx", 30 / 2).attr("ry", 10 / 2).attr("fill", "black");
//     pict.append("line").attr("x1", cx - 20).attr("y1", cy - 30).attr("x2", cx - 10).attr("y2", cy - 40).attr("stroke", "black").attr("stroke-width", 2);
//     pict.append("line").attr("x1", cx - 10).attr("y1", cy - 30).attr("x2", cx).attr("y2", cy - 40).attr("stroke", "black").attr("stroke-width", 2);
//     pict.append("line").attr("x1", cx).attr("y1", cy - 30).attr("x2", cx + 10).attr("y2", cy - 40).attr("stroke", "black").attr("stroke-width", 2);
//     pict.append("line").attr("x1", cx + 10).attr("y1", cy - 30).attr("x2", cx + 20).attr("y2", cy - 40).attr("stroke", "black").attr("stroke-width", 2);
//     const length = path.node().getTotalLength();
//     pict.transition().ease(d3.easeLinear).duration(animSpeed * 1000).attrTween('transform', function () {
//         return function (t) {
//             let { x, y } = path.node().getPointAtLength(t * length);
//             let scaleX = 1 + t * (dataForm.sxTo.value - 1);
//             let scaleY = 1 + t * (dataForm.syTo.value - 1);
//             let translate = `translate(${x},${y})`;
//             let transform = `scale(${scaleX}, ${scaleY})`;
//             return `${translate} ${transform}`;
//         };
//     });
// };


// let animPict = document.getElementById("animPict");
// animPict.addEventListener('click', function () {
//     runAnimation();
// });


// function translateAlong(path) {
//     const length = path.getTotalLength();
//     return function () {
//         return function (t) {
//             const { x, y } = path.getPointAtLength(t * length);
//             return `translate(${x},${y})`;
//         }
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     drawPath();
// })

// let resetPict = document.getElementById("resetPict");
// resetPict.addEventListener('click', function () {
//     svg.selectAll('*').remove();
//     drawPath();

// });