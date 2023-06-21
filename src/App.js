import './App.scss';
import { Reset } from 'styled-reset';
import MainPage from './pages/Mainpage';

function App() {
	return (
		<div className="App">
			<Reset />
			<MainPage />
		</div>
	);
}

export default App;
