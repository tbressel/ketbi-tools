
/**
 * Create a custom cursor with a circle shape
 */
export function createCircleCursor() {
  const cursor = document.createElement('div');
  cursor.id = 'kb-circleCursor';
  cursor.className = 'kb-circle-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });
}