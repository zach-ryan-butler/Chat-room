import Component from '../Component.js';
import ChatItem from './ChatItem.js';
import { chatRoomsRef } from '../services/firebase.js';

class ChatList extends Component {
    
    render() {
        const dom = this.renderDOM();

        this.props.chatData.forEach(chat => {
            const chatItem = new ChatItem({ 
                chat,
                onRemove: (chatRoom => {
                    chatRoomsRef.child(chatRoom.key).remove();
                })
            });
            dom.appendChild(chatItem.render());
        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul> 
            </ul>
        `;
    }
}

export default ChatList;