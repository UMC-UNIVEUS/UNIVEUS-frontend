import  '../styles/Comment.scss'
import defaultProfileImage from '../assets/defaultprofile.png'



const Comment = ({ text, name, info }) => {
    return (
        <div className="Comment">
            <div className='commenttext'>{text}</div>
            <div className='commentwriter'>
                <img className='commentprofileimage' src={defaultProfileImage} alt=''/>
                <div className='commentprofilebox'>
                    <div className='commentwritername'>{name}</div>
                    <div className='commentwriterinfo'>{info}</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;