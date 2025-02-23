Hello, welcome to the Ketbi Tools package.



My name is **Thomas Bressel** and I am the creator of the Ketbi Tools package, which was first created to help me to save time and effort in my projects. (less I have to do, better I will) 


Ketbi Tools package is a collection of tools that can be used to automate the process of creating and managing a Ketbi project.

1 - JavaScript functions.
2 - CSS classes all starting with `kb-`.



________

**Cursors Design**


- Change the actual mouse cursos into a circle cursor :
```js
import { CursorCss, CursorCssInterface } from 'ketbi-tools';
// choose the element where you want to apply the cursor
const myCustomCssCursor1: CursorCssInterface = new CursorCss("nav"); 
const myCustomCssCursor2: CursorCssInterface = new CursorCss("section"); 
```
then customizing the cursor by changing the color and size of the circle cursor :
```css

* {
  cursor: none;
}

.kb-css-cursor {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: blue;
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
```