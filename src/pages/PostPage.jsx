import FloatingBar from "../components/FloatingBar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar"
import PostInfoContainer from "../containers/PostInfoContainer";

const PostPage = () => {
    return (
        <div id="PostPage">
            <TopBar/>
            <PostInfoContainer />
            <Footer />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <FloatingBar />
            </div>
            
        </div>
    )
}

export default PostPage;