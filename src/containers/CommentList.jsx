import Comment from "../components/Comment";
import { comments } from "../utils/comment";

const dummyComment = {
    text: `유니버스 최고\n백엔드 최고\n프론트엔드 최고\nPM 디자인 최고~!`,
    name: '유니버스 관리자',
    info: '무역학과 17학번'
};


const CommentList = () => {
    return (
        <div className="CommentList" style={{width: '1280px', height: '323px', backgroundColor: '#EAEBF1',
        marginTop: '29px', marginBottom: '56px'
       }}>
            <div style={{width: '50%',marginLeft: '61px', fontSize: '24px', 
            fontWeight: 'bold', paddingTop: '6px'}}>유니's Comment</div>
            <div style={{ height: '281px', display: 'flex', flexDirection: 'row', marginBottom: '49px', 
                        marginTop: '6px', paddingLeft: '56px',
                        overflow: 'auto', whiteSpace: 'nowrap'}}>
                {comments.map((it) => (
                    <Comment key={it.id} {...it}/>
                ))}
            </div>
        </div>
    )
};

export default CommentList;