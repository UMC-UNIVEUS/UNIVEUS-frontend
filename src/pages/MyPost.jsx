import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MyNav from '../components/MyNav';
import MenuBtn from '../components/MenuBtn';
import MyPostList from '../containers/MyPostList';
import '../styles/MyPost.scss';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<MyNav />
			<MenuBtn className="menu-btn" />
			<MyPostList />
			<Footer />
		</div>
	);
};

export default MainPage;
