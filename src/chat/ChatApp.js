import Component from '../Component.js';
import Header from '../shared/Header.js';
import { chatRoomsRef } from '../services/firebase.js';


class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        // const query = window.location.search;
        // const searchParams = new URLSearchParams(query);
        // const chatId = searchParams.get('key');

        // const name = chatRoomsRef.child(chatId);
        // console.log(name);

        const header = new Header();
        dom.insertBefore(header.render(), main);

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