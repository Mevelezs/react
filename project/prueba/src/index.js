
const appDomElement = document.getElementById('root');


const root = ReactDOM.createRoot(appDomElement);

const App1 = React.createElement('button', null, 'like');
const App2 = React.createElement('button', null, 'like');
const App3 = React.createElement('button', null, 'like');

const app = React.createElement(React.Fragment, null, [App1,App2,App3]);

root.render(app);
