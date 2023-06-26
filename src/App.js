import './App.scss';
import { Reset } from 'styled-reset';
// import MainPage from './pages/Mainpage';
import MyPost from './pages/MyPost';
import React from 'react';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <MainPage /> */}
			<MyPost />
		</div>
	);
}

export default App;
