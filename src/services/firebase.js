const config = { 
    apiKey: 'AIzaSyC2T9UPc2MuWiB3fv0t-iyheoaEfWXHs-I',
    authDomain: 'chats-rooms.firebaseapp.com',
    databaseURL: 'https://chats-rooms.firebaseio.com',
    projectId: 'chats-rooms',
    storageBucket: 'chats-rooms.appspot.com',
    messagingSenderId: '565919205449',
    appId: '1:565919205449:web:667a3695ddb6d4e8'
};

firebase.initializeApp(config);
 
export const auth = firebase.auth();