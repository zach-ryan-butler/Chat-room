import Component from '../Component.js';
import Header from '../shared/Header.js';
import MessageList from './MessageList.js';
import { messagesByRoomRef } from '../services/firebase.js';
import AddMessage from './AddMessage.js';
import QUERY from '../QUERY.js';


class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const query = window.location.search.slice(1);
        const searchParams = QUERY.parse(query);
        const id = searchParams.key;
        

        // const name = chatRoomsRef.child(chatId);
        // console.log(name);

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const messageList = new MessageList({ messagesData: [] });
        main.appendChild(messageList.render());

        const addMessage = new AddMessage();
        main.appendChild(addMessage.render());

        messagesByRoomRef.child(id).on('value', snapshot => {
            const messagesData = snapshot.val() ? Object.values(snapshot.val()) : [];
            messageList.update({ messagesData });
        });



        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default ChatApp;