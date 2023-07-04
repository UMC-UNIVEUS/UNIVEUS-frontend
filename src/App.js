import './App.scss';
import { Reset } from 'styled-reset';
import MainPage from './pages/Mainpage';
import MyPost from './pages/MyPost';
import MyProfile from './pages/MyProfile';
import UserProfile from './pages/UserProfile';
import React from 'react';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <MainPage /> */}
			{/* <MyPost /> */}
			{/* <MyProfile /> */}
			<UserProfile />
		</div>
	);
}

export default App;
