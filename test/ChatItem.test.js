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
                <a href="./chat.html?key=1">Pokechat</a>
            </li>
        `
    );
});