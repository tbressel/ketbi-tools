import { CursorCssInterface } from '../models/CursorCssInterface';

/**
 * Cursor Class
 * Manage the cursor element
 * 
 * When we instantiate the CursorCss class, we create a new HTML element that will be used as a cursor:
 * 
 * We define the type of HTML element in which we want to create the cursor (for example, 'footer', 'nav', etc.).
 * 
 * 1 - this.tag = tag -> we define which tag.
 * 2 - this.createCursorElement -> we create a new HTML element that will be used as a cursor.
 * 3 - this.appendCursorToDOM -> we add the created element to the DOM element.
 * 4 - this.initializeCursor -> we initialize the cursor by adding an event listener for the 'mousemove' event.
 * ---> Each time the mouse moves, the 'mousemove' event is triggered and the `updateCursorPosition` method is called to update the cursor's position.
 * 
 */

class CursorCss implements CursorCssInterface {

  // cursor event listener datas
  public cursor: HTMLElement;
  public tag: string;

  constructor(tag: string = 'body') {
    this.tag = tag;
    this.cursor = this.createCursorElement("div", "kb__cursor", "kb-cursor", true);
    this.appendCursorToDOM(this.tag);
    this.initializeCursor();
  }

  /**
   * Creates a new HTML element to be used as a cursor.
   *
   * @param tag - The type of HTML element to create (e.g., 'div', 'span').
   * @param className - The class name to assign to the created element.
   * @param idName - The ID to assign to the created element.
   * @param ariaHidden - A boolean indicating whether the element should be hidden from assistive technologies.
   * @returns The newly created HTML element.
   */
  private createCursorElement(tag: string, className: string, idName: string, ariaHidden: boolean): HTMLElement {
    const cursor = document.createElement(tag);
    cursor.id = idName;
    cursor.className = className;
    cursor.setAttribute('aria-hidden', ariaHidden.toString());
    return cursor;
  }

  /**
   * Add to DOM element
   * @param {string} selector - DOM element selector
   */
  private appendCursorToDOM(selector: string): void {
    const parentElement = document.querySelector(selector);
    parentElement ? parentElement.appendChild(this.cursor) : console.error(`Element with selector "${selector}" not found.`);
  }

  /**
   * Initializes the cursor by adding event listeners for 'mousemove', 'mouseover', and 'mouseout' events.
   *
   * @public
   * @returns {void}
   */
  public initializeCursor(): void {
    document.addEventListener('mousemove', this.updateCursorPosition.bind(this));
    document.addEventListener('mouseover', this.handleMouseOver.bind(this));
  }

  /**
   * Updates the position of the cursor element based on the mouse event.
   *
   * @param event - The MouseEvent containing the new cursor position.
   */
  private updateCursorPosition(event: MouseEvent): void {
    this.cursor.style.left = `${event.pageX}px`;
    this.cursor.style.top = `${event.pageY}px`;
  }

  /**
   * Handles the mouseover event to update cursor styles based on data attributes.
   *
   * @param event - The MouseEvent containing the target element.
   */
  private handleMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dataSet = target.getAttribute('data-set');
    const text = target.getAttribute('data-text');

    this.cursor.classList.toggle('kb-zoom', dataSet?.includes('kb-zoom') ?? false);
    this.cursor.classList.toggle('kb-visible', dataSet?.includes('kb-visible') ?? false);
    this.cursor.classList.toggle('kb-text', dataSet?.includes('kb-text') ?? false);
    this.cursor.textContent = dataSet?.includes('kb-text') ? text : '';
  }

}

export default CursorCss;