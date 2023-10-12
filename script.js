function toggleContent() {
    const content = document.querySelector('.expandable-box .content');
    const symbol = document.querySelector('.expandable-box .toggle-symbol');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        symbol.textContent = 'v';
    } else {
        content.style.display = 'none';
        symbol.textContent = '^';
    }
}