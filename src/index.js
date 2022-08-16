'use strict';
import { domTree } from './test/constants.js';
import { v4 as uuid } from 'uuid';

/**
 * @dev Recursively render DOM elements
 * @param {String} parentElementId 
 * @param {Object} element 
 */
function recusivelyRenderElement(parentElementId, element) {
    // Create the element
    const newElement = document.createElement(element.type);

    // Assign a uuid to the new element
    const elementId = uuid();
    newElement.setAttribute("id", elementId);


    // Progressively add all attributes to dom element
    // Special cases for class or style attributes
    if(element.attrs){
        Object.entries(element.attrs).forEach(([key, value]) => {
            switch(key) {
                case 'class':
                    const classList = value.split(' ');
                    for(let i=0;i<classList.length;i++) {
                        newElement.classList.add(classList[i]);
                    }
                    break;
                case 'style':
                    Object.entries(value).forEach(([k, v]) => {
                        newElement.style[k] = v;
                    });
                    break;
                default:
                    newElement.setAttribute(key, value);
                    break;
            }
        });
    }

    // Append the element to its parent
    document.getElementById(parentElementId).append(newElement);

    // Recursively render child elements
    if(element.children && element.children.length > 0) {
        for(let i=0;i<element.children.length;i++) {
            recusivelyRenderElement(elementId, element.children[i]);
        }
    }

}

function main() {
    console.log(domTree);
    recusivelyRenderElement("root", domTree);
}

window.onload = function () {
    main();
}
