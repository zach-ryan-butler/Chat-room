import Component from '../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        const message = this.props.message;
        const date = new Date(message.date);
        return /*html*/`
            <li class="message-item">
                <img src="${message.photoURL}">
                <div id="display-name">
                    <p>${message.dispalyName}</p>
                </div>
                <div id="message">
                    <p>${message.message}</p>
                </div>
                <p>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
            </li>
        `;
    }
}


export default MessageItem;