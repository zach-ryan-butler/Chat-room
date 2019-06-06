import Profile from '../src/shared/Profile.js';
const test = QUnit.test;

QUnit.module('Profile Test');

test('render profile from props', assert => {
    //arrange
    const user = {
        displayName: 'Zach Butler',
        photoURL: 'http://via.placeholder.com/50'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
    <div class="profile">
        <img src ="http://via.placeholder.com/50">
        <span>Zach Butler</span>
        <button>Sign Out</button>
    </div>
    `;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

test('render with default avatar when no user photoURL', assert => {
    //arrange
    const user = {
        displayName: 'Zach Butler',
        photoURL: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
    <div class="profile">
        <img src ="./assets/default-avatar.svg">
        <span>Zach Butler</span>
        <button>Sign Out</button>
    </div>
    `;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});

test('no user', assert => {
    //arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div></div>
    `;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});