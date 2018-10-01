import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContainer from './profile/ProfileContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProfileContainer />, document.getElementById('root'));
registerServiceWorker();
