import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import UserProfile from '../components/UserProfile';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<>
			<TopBar />
			<MyNav />
			<UserProfile />
			<Footer />
		</>
	);
};

export default MainPage;
