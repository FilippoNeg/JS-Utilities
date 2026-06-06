/*
 * QUERY SELECTORS
 */

export function qs(selector, root = document) {
  return root.querySelector(selector);
}

export function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}


/**
 * ELEMENT DISPLAY - VISIBILITY
 */

export function hideEl(element) {
    if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
    }
}

export function showEl(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
}

export function concealEl(element) {
    if (element.classList.contains('concealed')) {
        element.classList.add('concealed');
    }
}

export function revealEl(element) {
    if (element.classList.contains('concealed')) {
        element.classList.remove('concealed');
    }
}

export function enableEl(element) {
    element.disabled = false;
}

export function disableEl(element) {
    element.disabled = true;
}