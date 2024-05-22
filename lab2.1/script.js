document.addEventListener('DOMContentLoaded', () => {
    const mainScreen = document.getElementById('mainScreen');
    const calculator = document.getElementById('calculator');
    const inputTypeSelect = document.getElementById('inputType');
    const calculationTypeSelect = document.getElementById('calculationType');
    const base1SideInput = document.getElementById('base1Side');
    const base2SideInput = document.getElementById('base2Side');
    const sideInput = document.getElementById('side');
    const base1AngleInput = document.getElementById('base1Angle');
    const base2AngleInput = document.getElementById('base2Angle');
    const angleInput = document.getElementById('angle');
    const calculateButton = document.getElementById('calculateButton');
    const clearButton = document.getElementById('clearButton');
    const resultsDiv = document.querySelector('.results');
    const showButton = document.getElementById('showButton');
    const baseAndSideInputs = document.getElementById('baseAndSideInputs');
    const baseAndAngleInputs = document.getElementById('baseAndAngleInputs');
    const inputTypeImage = document.getElementById('inputTypeImage');

    showButton.addEventListener('click', () => {
        mainScreen.style.display = 'none';
        calculator.style.display = 'block';
        updateInputVisibility();
    });

    inputTypeSelect.addEventListener('change', () => {
        updateInputVisibility();
        updateImage();
    });

    calculateButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearInputs);

    function updateInputVisibility() {
        if (inputTypeSelect.value === 'baseAndSide') {
            baseAndSideInputs.style.display = 'block';
            baseAndAngleInputs.style.display = 'none';
        } else {
            baseAndSideInputs.style.display = 'none';
            baseAndAngleInputs.style.display = 'block';
        }
    }

    function updateImage() {
        if (inputTypeSelect.value === 'baseAndSide') {
            inputTypeImage.src = 'bok.png';
        } else {
            inputTypeImage.src = 'ugol.png';
        }
    }

    function calculate() {
        clearErrors();
    
        let base1, base2, side, angle;
    
        if (inputTypeSelect.value === 'baseAndSide') {
            base1 = parseFloat(base1SideInput.value);
            base2 = parseFloat(base2SideInput.value);
            side = parseFloat(sideInput.value);
    
            if (isNaN(base1) || base1 <= 0) {
                showError(base1SideInput, 'Меньшее основание должно быть положительным числом.');
                
                }
            if (isNaN(base2) || base2 <= 0) {
                showError(base2SideInput, 'Большее основание должно быть положительным числом.');
            }
            if (isNaN(side) || side <= 0) {
                showError(sideInput, 'Боковая сторона должна быть положительным числом.');
            }
            if (base1 >= base2) {
                showError(base1SideInput, 'Меньшее основание должно быть меньше большего основания.');
                showError(base2SideInput, 'Большее основание должно быть больше меньшего основания.');
            }
        } else if (inputTypeSelect.value === 'baseAndAngle') {
            base1 = parseFloat(base1AngleInput.value);
            base2 = parseFloat(base2AngleInput.value);
            angle = parseFloat(angleInput.value);
    
            if (isNaN(base1) || base1 <= 0) {
                showError(base1AngleInput, 'Меньшее основание должно быть положительным числом.');
            }
            if (isNaN(base2) || base2 <= 0) {
                showError(base2AngleInput, 'Большее основание должно быть положительным числом.');
            }
            if (isNaN(angle) || angle <= 0 || angle >= 180) {
                showError(angleInput, 'Угол должен быть числом от 1 до 179 градусов.');
            }
            if (base1 > base2) {
                showError(base1AngleInput, 'Меньшее основание должно быть меньше большего основания.');
                showError(base2AngleInput, 'Большее основание должно быть больше меньшего основания.');
            }
        }
    
        const selectedOptions = calculationTypeSelect.selectedOptions;
        if (selectedOptions.length === 0) {
            calculationTypeSelect.classList.add('error');
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.innerText = 'Выберите, что вы хотите вычислить.';
            calculationTypeSelect.parentElement.appendChild(errorMessage);
            return; // Stop further execution
        }
    
        let selectedCalculations = Array.from(calculationTypeSelect.selectedOptions).map(option => option.value);
        let results = [];
    
        selectedCalculations.forEach(calculation => {
            switch (calculation) {
                case 'height':
                    results.push(`Высота: ${calculateHeight(base1, base2, side, angle).toFixed(2)}`);
                    break;
                case 'diagonals':
                    results.push(`Диагонали: ${calculateDiagonals(base1, base2, side, angle).toFixed(2)}`);
                    break;
                case 'angleBetweenDiagonals':
                    results.push(`Угол между диагоналями: ${calculateAngleBetweenDiagonals(base1, base2, side, angle).toFixed(2)} градусов`);
                    break;
                default:
                    break;
            }
        });
    
        resultsDiv.innerHTML = results.join('<br>');
    }
    
    
    

    function calculateHeight(base1, base2, side, angle) {
        if (inputTypeSelect.value === 'baseAndSide') {
            return Math.sqrt(side**2 - ((base2 - base1) / 2)**2);
        } else {
            let angleRad = angle * (Math.PI / 180);
            return (base2 - base1) / (2 * Math.tan(angleRad / 2));
        }
    }

    function calculateDiagonals(base1, base2, side, angle) {
        const height = calculateHeight(base1, base2, side, angle);
        const diagonal = Math.sqrt(height**2 + (base2 - base1)**2);
        return diagonal; // временное значение
    }

    function calculateAngleBetweenDiagonals(base1, base2, side, angle) {
        const diagonal1 = calculateDiagonals(base1, base2, side, angle);
    const diagonal2 = calculateDiagonals(base1, base2, side, angle); // для равнобедренной трапеции обе диагонали равны
    const cosAngle = (side**2 + side**2 - diagonal1**2) / (2 * side * side);
    const angleBetweenDiagonalsRad = Math.acos(cosAngle);
    const angleBetweenDiagonalsDeg = angleBetweenDiagonalsRad * (180 / Math.PI);
    return angleBetweenDiagonalsDeg;
    }

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = message;
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }
    
    

    function clearErrors() {
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
    }

    function clearInputs() {
        base1SideInput.value = '';
        base2SideInput.value = '';
        sideInput.value = '';
        base1AngleInput.value = '';
        base2AngleInput.value = '';
        angleInput.value = '';
        resultsDiv.innerHTML = '';
        clearErrors();
    }
    // Добавляем обработчик события focus для каждого поля ввода
[base1SideInput, base2SideInput, sideInput, base1AngleInput, base2AngleInput, angleInput].forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error'); // Удаляем класс ошибки у поля ввода
        const errorMessage = input.nextElementSibling; // Находим следующий элемент после поля ввода
        if (errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove(); // Удаляем сообщение об ошибке, если оно есть
        }
    });
});

});
