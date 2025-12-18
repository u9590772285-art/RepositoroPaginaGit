const changeThemeBtn = document.getElementById('changeThemeBtn');

changeThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});