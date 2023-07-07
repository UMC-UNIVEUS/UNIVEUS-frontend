import '../styles/UserComment.scss'
import dummyimage from '../assets/defaultprofile.png'

const UserComment = ({ image, name, department, comment }) => {
    return (
        <div className="UserComment">
            <div className="usercommentwriter">
                <img className='usercommentprofileimage' src={dummyimage} alt=''/>
                <div className='usercommentprofilebox'>
                    <div className='usercommentwritername'>{name}</div>
                    <div className='usercommentwriterinfo'>{department}</div>
                </div>
            </div>
            <div className='commentcontent'>{comment}</div>
        </div>
    )
};

export default UserComment;