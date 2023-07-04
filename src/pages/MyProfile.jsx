import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import Profile from '../components/Profile';
import '../styles/MyPost.scss';

const MyProfile = () => {
	return (
		<>
			<TopBar />
			<MyNav />
			<Profile />
			<Footer />
		</>
	);
};

export default MyProfile;
