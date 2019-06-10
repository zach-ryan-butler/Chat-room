import Component from '../Component.js';
import { auth, messagesByRoomRef } from '../services/firebase.js';
import QUERY from '../QUERY.js';

class AddMessaget extends Component {

    render() {
        const form = this.renderDOM();
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = window.location.search.slice(1);
            const query = QUERY.parse(search);
            const id = query.key;

            const userMessage = {
                message: formData.get('message'),
                uid: auth.currentUser.uid,
                dispalyName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL || './assets/default-avatar.svg',
                date: new Date().toISOString()
            };
            messagesByRoomRef
                .child(id)
                .push()
                .set(userMessage)
                .then(() => {
                    form.reset();
                });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="message-form">
                <input name="message"class="message" required>
                <button>Send</button>
            </form>
        `;
    }
}

export default AddMessaget;