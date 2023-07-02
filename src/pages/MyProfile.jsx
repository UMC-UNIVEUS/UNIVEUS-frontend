import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import Profile from '../components/Profile';
import Modal from '../components/Modal';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<MyNav />
			<Profile />
			<Modal />
			<Footer />
		</div>
	);
};

export default MainPage;
