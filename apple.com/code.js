document.querySelector('.bars').addEventListener('click', function () {
    document.getElementById('side-menu').style.display = 'block'; // Make sure the menu is visible
    setTimeout(() => {
        document.getElementById('side-menu').classList.add('active');
    }, 10); // delay for transition 
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('side-menu').classList.remove('active');
    setTimeout(() => {
        document.getElementById('side-menu').style.display = 'none';
    }, 300);
});


