import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class ChatItem extends Component {

    render() {
        const dom = this.renderDOM();
        

        const deleteButton = dom.querySelector('button');
        deleteButton.addEventListener('click', () => {
            this.props.onRemove(this.props.chat);
        });

        return dom;
    }

    renderTemplate() {
        const chat = this.props.chat;
            
        
        return /*html*/`
            <li>
                <a href="./chat.html?key=${chat.key}">${chat.name} chatroom</a>
                <button id="remove-button" class="${auth.currentUser.uid === chat.owner ? '' : 'disabled'}">Ⓧ</button>
            </li>
        `;
    }
}

export default ChatItem;