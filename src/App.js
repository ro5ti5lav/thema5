import React, { useState } from 'react';
import './App.css'; // Подключаем файл стилей

const ButtonColorChange = () => {
  const [buttonColor, setButtonColor] = useState(''); // Состояние для цвета кнопки
  const [clickCount, setClickCount] = useState(0); // Состояние для подсчета кликов

  // Функция для изменения цвета кнопки и фона
  const changeButtonColor = () => {
    // Генерируем случайный цвет для кнопки
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomColor); // Устанавливаем новый цвет кнопки

    // Увеличиваем счетчик кликов на кнопку
    setClickCount(prevCount => prevCount + 1);
  };

  // Изменение цвета фона при каждом четном клике
  React.useEffect(() => {
    if (clickCount % 2 === 0) {
      const randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomBackgroundColor; // Устанавливаем новый цвет фона
    }
  }, [clickCount]);

  return (
    <div>
      {/* Применяем класс с динамическим цветом */}
      <button className="colorButton" style={{ backgroundColor: buttonColor }} onClick={changeButtonColor}>
        Изменить цвет
      </button>
    </div>
  );
};

export default ButtonColorChange;
