const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
        } else {
            entry.target.classList.remove('show-left');
        }
    });
});

const hiddenElementsleft = document.querySelectorAll('.hidden-left');
hiddenElementsleft.forEach((el) => leftObserver.observe(el));

const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
        } else {
            entry.target.classList.remove('show-right');
        }
    });
});

const hiddenElementsright = document.querySelectorAll('.hidden-right');
hiddenElementsright.forEach((el) => rightObserver.observe(el));
