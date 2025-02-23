import { CursorCssInterface } from '../models/CursorCssInterface';

/**
 * Classe Cursor
 * Manage the cursor element
 */
class CursorCss implements CursorCssInterface {

    // cursor event listener datas
    public cursor: HTMLElement;
    public tag: string;

    constructor(tag: string = 'body') {
      this.tag = tag;
      this.cursor = this.createCursorElement("div", "kb-css-cursor", "kb-cssCursor", true);
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
   * Updates the position of the cursor element based on the mouse event.
   *
   * @param event - The MouseEvent containing the new cursor position.
   */
  private updateCursorPosition(event: MouseEvent): void {
    this.cursor.style.left = `${event.pageX}px`;
    this.cursor.style.top = `${event.pageY}px`;
  }

    /**
   * Handles the mouse over event to invert colors.
   *
   * @param event - The MouseEvent containing the target element.
   */
    private handleMouseOver(event: MouseEvent): void {
      const target = event.target as HTMLElement;
      if (target && target.tagName !== 'BODY' && target.tagName !== 'HTML') {
        target.classList.add('invert-colors');
      }
    }


      /**
   * Handles the mouse out event to revert colors.
   *
   * @param event - The MouseEvent containing the target element.
   */
  private handleMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.tagName !== 'BODY' && target.tagName !== 'HTML') {
      target.classList.remove('invert-colors');
    }
  }

  /**
   * Initializes the cursor by adding an event listener for the 'mousemove' event.
   * The event listener calls the `updateCursorPosition` method to update the cursor's position.
   *
   * @public
   * @returns {void}
   */
  public initializeCursor(): void {
    document.addEventListener('mousemove', this.updateCursorPosition.bind(this));
    document.addEventListener('mouseover', this.handleMouseOver.bind(this));
    document.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }

}

export default CursorCss;