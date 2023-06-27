import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import Profile from '../components/Profile';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<MyNav />
			<Profile />
			<Footer />
		</div>
	);
};

export default MainPage;
