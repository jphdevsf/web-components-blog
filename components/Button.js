export class Button extends HTMLElement {
    connectedCallback() {
        const children = Array.from(this.childNodes);
        const type = this.getAttribute('type')
        const link = this.getAttribute('link')
        this.innerHTML = `
        ${type === 'navigation' && link ? `<a class='button navigation' href=${link}></a>` : ''}
        ${type === 'footer' ? `<button role="" class='button footer'></button>` : ''}
        `;
        const target = this.querySelector('.button');
        children.forEach(c => target.append(c));
    }
}