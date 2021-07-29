import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css';
import { ShoppingProvider } from './components/useContext';

ReactDOM.render(
	<React.StrictMode>
		<ShoppingProvider>
			<App />
		</ShoppingProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

if (module && module.hot) module.hot.accept();
