(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', `top: ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
    });
    document.addEventListener('click', () => {
        console.log("%c Click...!!!", "font-size: 20px")
    })
})