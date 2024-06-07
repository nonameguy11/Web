import React from 'react';
import Slider from './Slider'; // Путь к компоненту Slider
import './App.css'; // Подключение CSS файла для стилизации

function App() {
  const images = [
    'https://img2.joyreactor.cc/pics/post/full/Dota-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Elegy_ov-2834023.jpeg',
    'https://klike.net/uploads/posts/2023-01/1674105452_3-38.jpg',
    'https://kartinkof.cdnsap.ru/posts/kartinki-shadow-fiend-80-foto-74.jpg',
    'https://wallpapercave.com/wp/wp8494467.jpg',
    'https://img0.reactor.cc/pics/post/Dota-Art-Dota-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-CYRUS-C-2142941.jpeg',
    'http://www.cyberfrags.com/_ph/8/894404029.jpg',
    'https://klike.net/uploads/posts/2023-01/1674105408_3-25.jpg',
    'https://dota2-i.ru/assets/images/resources/1671/1920x1080-2040182-shadow-fiend-dota-2-wallpaper.jpg'
    // Добавьте ссылки на изображения по мере необходимости
  ];

  return (
    <div className="App">
      <Slider images={images} />
    </div>
  );
}

export default App;
