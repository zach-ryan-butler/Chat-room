import './html-equal.js';
import { app } from '../src/services/firebase.js'; 

import './profile.test.js';
// import './ChatItem.test.js';

QUnit.done(() => {
    app.delete();
}); 
