document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.createElement('div');
    cursor.id = 'kb-cssCursor';
    cursor.className = 'kb__css-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);


    // Fait bouger la div avec le curseur
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });


    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        const dataSet = target.getAttribute('data-set');
        const text = target.getAttribute('data-text');

        cursor.classList.toggle('zoom', dataSet?.includes('zoom') ?? false);
        cursor.classList.toggle('visible', dataSet?.includes('visible') ?? false);
        cursor.classList.toggle('invert', dataSet?.includes('invert') ?? false);
        
        cursor.classList.toggle('text', dataSet?.includes('text') ?? false);
        cursor.textContent = dataSet?.includes('text') ? text : '';
    });
});