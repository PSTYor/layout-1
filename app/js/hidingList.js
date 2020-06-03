'use strict';

document.querySelector('.hide-list-js').onclick = function(e) {
    e.preventDefault();

    hidingList('.hide-list-js', 'hide-list-js__first')
};

function hidingList(parents, firstChild) {
    for(let parent of document.querySelectorAll(parents)) {
        parent.onclick = function() {
            let svg = parent.querySelector(parents + '__img').firstElementChild;
            let pre = 'img/svg/symbol/svg/sprite.symbol.svg#';

            for(let child of parent.children) {
                if(!(child.classList.contains(firstChild))) {
                    child.classList.toggle(parents.replace('.', '') + '--hidden');
                } else {
                    child.classList.toggle(parents.replace('.', '') + '--color-red');

                    if(svg.getAttribute('xlink:href')
                        .replace(pre, '') === 'icon-arrow-down') {
                        svg.setAttribute('xlink:href', pre + 'icon-arrow-up');
                    } else {
                        svg.setAttribute('xlink:href', pre + 'icon-arrow-down');
                    }
                }
            }
        };
    }
}