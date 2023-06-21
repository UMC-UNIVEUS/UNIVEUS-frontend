import './App.scss';
import { Reset } from 'styled-reset';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';

function App() {
	return (
		<div className="App">
			<Reset />
			<Footer />
			<MainPage />
		</div>
	);
}

export default App;
