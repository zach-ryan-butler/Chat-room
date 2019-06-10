import Component from '../Component.js';
import MessageItem from './MessageItem.js';

class MessageList extends Component {

    render() {
        const list = this.renderDOM();
        
        this.props.messagesData.forEach(message => {
            const messageItem = new MessageItem({ message });
            list.appendChild(messageItem.render());
        });

        setTimeout(() => {
            list.scrollTop = list.scrollHeight;
        }, 0);

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="message-list"></ul>
        `;
    }
}

export default MessageList;