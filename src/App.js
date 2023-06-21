import './App.scss';
import { Reset } from 'styled-reset';
import MainPage from './pages/Mainpage';
import React from 'react'

function App() {
	return (
		<div className="App">
			<Reset />
			<MainPage />
		</div>
	);
}

export default App;