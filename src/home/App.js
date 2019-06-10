import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import ChatList from '../shared/ChatList.js';
import { chatRoomsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header({ title: 'Add a chat room' });
        dom.insertBefore(header.render(), main);

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        const chatList = new ChatList({ chatData: [] });
        main.appendChild(chatList.render());

        chatRoomsRef.on('value', snapshot => {
            const chatData = snapshot.val() ? Object.values(snapshot.val()) : [];
            chatList.update({ chatData });
            
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

export default App;