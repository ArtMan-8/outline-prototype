# outline-prototype.css
## Для чего
Не всегда понятно какое место занимает тот или иной html-элемент в структуре html-документа.
Данный **[outline-prototype.css](https://github.com/ArtMan-8/outline-prototype/blob/master/css/outline-prototype.css)**, подключенный к странице, визуально отображает разные блоки.

## Как это выглядит
![](https://raw.githubusercontent.com/ArtMan-8/outline-prototype/master/img/MDN_outline-ptototype.png "нажми, чтобы посмотреть крупнее")
Основыне блоки **header, main, footer** подсвечиваються широкой красной линией.
Блоки **nav, section, article, aside** подсвечиваються средней оранжевой линией.
Остальныйе блоки подсвечиваються соответствующими цветами, согласно их вложенности в DOM-дереве, тонкой линией. Что-бы не запутаться в цветах, использовал *радугу*: красный - самый верхний элемент в DOM-дереве, оранжевый - на уровень ниже, жёлтый - ещё ниже, и т.д. После шестого уровня все элементы красяться в серый цвет.

## Как подключить [outline-prototype.css](https://github.com/ArtMan-8/outline-prototype/blob/master/css/outline-prototype.css)
1. Можно скачать его, поместить в свой проект и подключить.
2. Можно создать отдельный файл стилей в своём проекте, и поместить туда содержимое [outline-prototype.css](https://github.com/ArtMan-8/outline-prototype/blob/master/css/outline-prototype.css).
3. Можно использовать CDN. Для этого скопируй **[эту ссылку](https://rawcdn.githack.com/ArtMan-8/outline-prototype/07f7a9d439da3969ec343e1c2fdac38da94d6b4d/css/outline-prototype.css)** и подключи в своём html.
