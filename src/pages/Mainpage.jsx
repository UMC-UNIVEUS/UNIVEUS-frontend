import Banner from '../components/Banner';
import Comment from '../components/Comment';
import TopBar from '../components/TopBar';
import CommentList from '../containers/CommentList';

const MainPage = () => {
	return (
		<div id="MainPage">
			<TopBar />
			<Banner />
			<CommentList />
		</div>
	);
};

export default MainPage;
