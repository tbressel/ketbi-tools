Hello, welcome to the Ketbi Tools package.

My name is **Thomas Bressel** and I am the creator of the Ketbi Tools package, which was first created to help me save time and effort in my projects. (The less I have to do, the better it will be)

The Ketbi Tools package is a collection of tools that can be used to automate the process of creating and managing a Ketbi project.

1. JavaScript functions.
2. CSS classes all starting with `kb__`.
3. Data attributes get values starting with `kb-`.
4. `data-set` and `data-text` attributes are used as selectors.

________

## Cursors Design 

### main.ts 
- Change the actual mouse cursor into a circle cursor:
```js
import { CursorCss, CursorCssInterface } from 'ketbi-tools';
// choose the element where you want to apply the cursor
const myCustomCssCursor1: CursorCssInterface = new CursorCss("nav"); 
const myCustomCssCursor2: CursorCssInterface = new CursorCss("section"); 
```

### styles.css 
Then customize the cursor by changing the color and size of the circle cursor:
```css
* {
  cursor: none;
}

body {
  background-color: black;
  color: white;
}

.kb__css-cursor {
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  pointer-events: none;
  transform: translate(-50%, -50%) scale(1); 
  transition: transform 0.3s ease-in-out; 
  z-index: 1000;
}

.kb-zoom {
  transform: translate(-50%, -50%) scale(3); 
}

.kb-visible {
  mix-blend-mode: difference;
}

.kb-text {
  text-align: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: black;
  font-size: 1rem;
}

.kb-invert {
  filter: invert(1);
}
```

### index.html
```html
<!-- Text visible under the cursor -->
<p>
  <span data-set="visible">
  Text visible under the cursor.
  </span>
</p>

<!-- Zoomed text -->
<p>
  <span data-set="zoom">
  Zoomed text.
  </span>
</p>

<!-- Visible and zoomed text -->
<p>
  <span data-set="zoom visible">
  Visible and zoomed text.
  </span>
</p>

<!-- Text with specific content -->
<p>
  <span data-set="text" data-text="This is an important text">
  Text with specific content.
  </span>
</p>
```
