import '../styles/Participant.scss'

import defaultProfileImage from '../assets/defaultprofile.png'


const Participant = ({ name, department }) => {
    return (
        <div className="Participant">
            <img className='participantprofileimage' src={defaultProfileImage} alt=''/>
            <div className='participantprofilebox'>
                <div className='participantwritername'>{name}</div>
                <div className='participantwriterinfo'>{department}</div>
            </div>
        </div>
    )
};

export default Participant;