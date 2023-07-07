import Footer from "../components/Footer";
import TopBar from "../components/TopBar"
import PostInfoContainer from "../containers/PostInfoContainer";

const PostPage = () => {
    return (
        <div id="PostPage">
            <TopBar/>
            <PostInfoContainer />
            <Footer />
        </div>
    )
}

export default PostPage;