(function (){
  'use strict';

  /* Вставка тега link */
  let head = document.getElementsByTagName('head')[0]
  let cssStyle = document.createElement('link');
  cssStyle.setAttribute('rel', 'stylesheet');
  cssStyle.setAttribute('id', 'outline-prototype');
  head.appendChild(cssStyle);


  let fragment = document.createDocumentFragment();
  let section = document.createElement('section');
  createOutlinePanel();
  fragment.appendChild(section);
  document.body.append(fragment);

  let outlinePanel = document.querySelector('.outline-controls');
  let outlineMove = document.querySelector('.outline-controls__move');

  /* Вставка обвёртки для панельки HTML */
  function createOutlinePanel() {
    section.classList.add('outline-controls');
    section.style = 'position: fixed; top: 20px; left: 20px; padding: 5px; border-radius: 5px; background-color: #FFA0A0; z-index: 9999;';
    for (let i = 0; i < 3; i++) {
      let div = document.createElement('div');
      if (i === 0) {
        div.appendChild(createInputLabel('labelsOn').input);
        div.appendChild(createInputLabel('labelsOn').label);
      } else if (i === 1) {
        div.appendChild(createInputLabel('labelsOff').input);
        div.appendChild(createInputLabel('labelsOff').label);
      } else if (i === 2) {
        div.appendChild(createInputLabel('outlineOff').input);
        div.appendChild(createInputLabel('outlineOff').label);
      }
      section.appendChild(div);
    };
    section.appendChild(createButtonMove());
  }

  /* Вставка инмутов и лейблов */
  function createInputLabel(param) {
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'outline-choice';
    input.id = param;

    let label = document.createElement('label');
    label.setAttribute('for', param);
    label.innerText = param;

    return {
      input,
      label
    }
  }

  /* Переключение стилей */
  outlinePanel.addEventListener('change', onOutlinePanelChoice);
  function onOutlinePanelChoice(evt) {
    const outlinelabel = 'https://rawcdn.githack.com/ArtMan-8/outline-prototype/5774cf08d7af2205446a93b345ec0a7bcd0546ed/css/outline-prototype-label.css';
    const outlineSafe = 'https://rawcdn.githack.com/ArtMan-8/outline-prototype/5774cf08d7af2205446a93b345ec0a7bcd0546ed/css/outline-prototype-safe.css';
    switch (evt.target.id) {
      case 'labelsOn':
        cssStyle.href = outlinelabel;
        break;
      case 'labelsOff':
        cssStyle.href = outlineSafe;
        break;
      case 'outlineOff':
        cssStyle.href = '';
        break;
    };
  }

  /* Вставка кнопки перемещения */
  function createButtonMove() {
    let buttonMove = document.createElement('button');
    buttonMove.innerText = 'move';
    buttonMove.classList.add('outline-controls__move');
    buttonMove.style = 'display: block; width: 100%; margin: auto; border-radius: 5px; cursor: grab;';
    return buttonMove;
  }

  /* Перемещение панельки */
  outlineMove.addEventListener('mousedown', onMoveMousedown);
  function onMoveMousedown(evt) {
    evt.preventDefault();
    let startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    let onMousemove = function (moveEvt) {
      moveEvt.preventDefault();
      let shift = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      outlinePanel.style.left = (outlinePanel.offsetLeft - shift.x) + 'px';
      outlinePanel.style.top = (outlinePanel.offsetTop - shift.y) + 'px';
    };

    let onMouseup = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  }
})();
