/**
 * This base component is geared towards layout only. 
 * Don't use this directly, instead create a sub class for a desired semantic layout element.
 * Features:
 * 1) Nested children are carried through without need for Shadow DOM.
 * 2) Replaces custom element with a semantic one (configurable). This supports leaner, readable code that can be more semantic and accessible.
 * @example
 * // sub class usage
 *  export class Column extends LayoutComponent {
 *      getConfig() {
 *          return {
 *              tag: 'span',
 *              classList: 'column',

 *          };
 *      }
 *  }
 */
class LayoutComponent extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute("id")
    const config = this.getConfig()
    const { tag, classList, componentName } = config

    // save the children!
    const children = Array.from(this.childNodes)

    // create semantic parent
    const el = document.createElement(tag)
    el.classList = classList
    el.setAttribute("data-component-name", componentName)
    if (id) el.id = id

    // semantic parent adopts the children
    children.forEach(c => {
      el.append(c)
    })

    // bye bye custom non-semantic element
    this.replaceWith(el)
  }

  getConfig() {
    throw new Error("getConfig() must be implemented")
  }
}

/**
 * ---
 * SUB-ClASS SECTION
 * ---
 */

export class Header extends LayoutComponent {
  getConfig() {
    return {
      tag: "header",
      classList: "header",
      componentName: "x-header"
    }
  }
}

export class Footer extends LayoutComponent {
  getConfig() {
    return {
      tag: "footer",
      classList: "footer",
      componentName: "x-footer"
    }
  }
}

export class Main extends LayoutComponent {
  getConfig() {
    return {
      tag: "main",
      classList: "main",
      componentName: "x-main"
    }
  }
}

export class Column extends LayoutComponent {
  getConfig() {
    return {
      tag: "span",
      classList: "column",
      componentName: "x-column"
    }
  }
}

export class Row extends LayoutComponent {
  getConfig() {
    return {
      tag: "section",
      classList: "row",
      componentName: "x-row"
    }
  }
}
