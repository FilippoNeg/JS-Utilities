export function waitForComponent(element) {
    return new Promise((resolve) => {
        element.addEventListener("ComponentCreated", resolve, { once: true });
    });
}