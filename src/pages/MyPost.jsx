import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import MeetingCard from '../components/MeetingCard';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<MyNav />
			<MeetingCard />
			<Footer />
		</div>
	);
};

export default MainPage;
