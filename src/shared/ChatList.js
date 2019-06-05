import Component from '../Component.js';

class ClassList extends Component {
    
    redner() {
        const dom = this.renderDOM();


        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul>
            </ul>
        `;
    }
}

export default ClassList;