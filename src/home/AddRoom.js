import Component from '../Component.js';
import { auth, chatRoomsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const roomRef = chatRoomsRef.push();
            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: formData.get('name')
            };

            chatRoomsRef
                .child(roomRef.key)
                .set(room)
                .then(() => {
                    form.reset();
                });
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="form">
                <input name="name" required>
                <button>Submit</button>
            </form>
        `;
    }
}

export default AddRoom;