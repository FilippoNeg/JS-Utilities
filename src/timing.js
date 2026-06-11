export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function debounce(fn, delay) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}
