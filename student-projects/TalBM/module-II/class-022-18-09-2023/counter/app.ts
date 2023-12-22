let clickCount:  any  = localStorage.getItem('clickCount');

if (!clickCount) {
    clickCount = 0;
}

localStorage.setItem('clickCount', clickCount.toString());

const clickCountElement = document.getElementById('clickCount');
if (clickCountElement) {
    clickCountElement.textContent = clickCount.toString();
}

if (document) {
    document.addEventListener('click', function () {
        if (clickCount) {
            clickCount++;
            if (clickCountElement) {
                clickCountElement.textContent = clickCount.toString();
            }
            localStorage.setItem('clickCount', clickCount.toString());
        }
    });
}

