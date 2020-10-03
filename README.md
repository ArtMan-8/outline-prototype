# outline-prototype
## Для чего
Не всегда понятно какое место занимает тот или иной html-элемент в структуре html-документа.
Данный **[outline-prototype](https://github.com/ArtMan-8/outline-prototype/blob/master/css/)**, подключенный к странице, визуально отображает разные блоки.

## Как это выглядит
![](https://raw.githubusercontent.com/ArtMan-8/outline-prototype/master/img/MDN_outline-ptototype.png "нажми, чтобы посмотреть крупнее")
Основыне блоки **header, main, footer** подсвечиваються широкой красной линией.<p>
Блоки **nav, section, article, aside** подсвечиваються средней оранжевой линией.<p>
Остальныйе блоки подсвечиваються соответствующими цветами, согласно их вложенности в DOM-дереве, тонкой линией. Что-бы не запутаться в цветах, использовал *радугу*: красный - самый верхний элемент в DOM-дереве, оранжевый - на уровень ниже, жёлтый - ещё ниже, и т.д. После шестого уровня все элементы красяться в серый цвет.

### Есть два вариант [outline-prototype](https://github.com/ArtMan-8/outline-prototype/tree/master/css)
1. 1й вариант с метками - **[outline-prototype-label.css](https://github.com/ArtMan-8/outline-prototype/blob/master/css/outline-prototype-label.css)** - для базовой разметки, когда нет псевдоэлементов ::before и ::after, и нет абсолютно позиционируемых элементов. Выводит подписи основных блоков.
>**Внимание!** Готовый макет или сайт может ломать, используйте осторожно.
2. 2й вариант безопасный - **[outline-prototype-safe.css](https://github.com/ArtMan-8/outline-prototype/blob/master/css/outline-prototype-safe.css)** - подойдёт для финальной разметки макетов, и для инспектирования блоков на готовом сайте. Ничего не ломает.

## Как подключить
1. Можно скачать нужный вариант **[outline-prototype](https://github.com/ArtMan-8/outline-prototype/blob/master/css/)**, поместить в свой проект и подключить.
2. Можно использовать **CDN** и подключить панель с переключателем стилей. Для этого скопируй ссылку и подключи в своём html
**[outline-control.js](https://rawcdn.githack.com/ArtMan-8/outline-prototype/e73da2a1ee9031564b56ed5d98541891f7123933/js/outline-control.js)**
3. Можно подключить панель с переключателем стилей на любой сайта, написав в консоли браузера команду `s=document.createElement('script');s.src='https://rawcdn.githack.com/ArtMan-8/outline-prototype/e73da2a1ee9031564b56ed5d98541891f7123933/js/outline-control.js';document.body.appendChild(s);`
