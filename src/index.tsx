import React from 'react'
import { createRoot } from 'react-dom/client';
import App from "./components/App"
import { Provider } from "react-redux"
import store from './store';

// const App = () => <h1>Hello React TypeScript Project!</h1>;
const root = document.getElementById('root')

createRoot(root).render(
	<Provider store={store}>
		<App />
	</Provider>
);