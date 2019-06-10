import ChatItem from '../src/shared/ChatItem.js';

const test = QUnit.test;

QUnit.module('render ChatItem');

test('render chatItem from props', assert => {
    //arrange
    const chat = {
        key: 1,
        owner: 'Bob',
        name: 'Pokechat'
    };

    //act
    const chatItem = new ChatItem({ chat });
    const rendered = chatItem.renderTemplate();
    

    //assert
    assert.equal(rendered, /*html*/`
        <li>
            <a href="./chat.html?key=${chat.key}">${chat.name} chatroom</a>
            <button id="remove-button" class="${auth.currentUser.uid === chat.owner ? '' : 'disabled'}">Ⓧ</button>
        </li>
    `
    );
});