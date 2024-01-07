import React from 'react';
import ReactDOM from 'react-dom';
import ProfileContainer from './profile/ProfileContainer';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<ProfileContainer />, document.getElementById('root'));
registerServiceWorker();
