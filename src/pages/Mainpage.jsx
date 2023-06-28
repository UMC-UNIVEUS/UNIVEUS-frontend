import Banner from '../components/Banner';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import MenuBtn from '../components/MenuBtn';
import TopBar from '../components/TopBar';
import CommentList from '../containers/CommentList';
import PostContainer from '../containers/PostContainer';

const MainPage = () => {
	return (
		<div id="MainPage">
            <TopBar />
            <Banner />
            <CommentList />
            <PostContainer />
            <Footer />
        </div>
	);
};

export default MainPage;
