# Как запустить
По запуску все тоже самое
1. Вводим в терминал vs code команды:

   Первую команду вводим только при первм запуске, чтобы подключить все связи.
   Вторую команду вводим каждый раз когда открываем проект, чтобы запустить сборщик.
```
npm i
```
```
npm run dev
```
2. Открываем ссылочку из терминала
# Компоненты
Тут уже дофига всяких компонент, ограничусь картиночками
(https://i.ibb.co/VHxPp3X/components1.jpg" )
# Что может спросить Озерова
   1. Поменять количество отображаемых слайдов.
  
      Это делается в файлике ```src/App.jsx```, это главная компонента всей программы и в ней просто возвращается наш слайдер. Чтобы изменить кол-во отображаемых слайдов, нужно поменять параметр ```amount``` при вызове ```Slider```.
   2. Показать компоненты, их пропсы и состояния.
# Ps
   Все css стили разместил в  ```index.css ```, картинки в  ```public ```, массив с названиями картинок в  ```data.js ```.
