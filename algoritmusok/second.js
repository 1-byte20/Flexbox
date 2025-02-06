let counter = 100;

function updateCounter() {
    document.getElementById("counter").innerText = counter;
}

function increase(amount) {
    counter += amount;
    updateCounter();
}

function decrease(amount) {
    counter -= amount;
    updateCounter();
}
