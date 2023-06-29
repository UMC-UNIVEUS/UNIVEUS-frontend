import '../styles/MeetingCard.scss';
import peopleIcon from '../assets/people.png';
import locationIcon from '../assets/location.png';
import calendarIcon from '../assets/calendar.png';
import defaultProfileImage from '../assets/defaultprofile.png';
import testImage from '../assets/testImage.png';
import heartIcon from '../assets/heart.png';

const MeetingCard = ({ title, place, date, now, limit, left, name, info }) => {
	return (
		<div className="MeetingCard">
			<div className="cardimage">
				<img src={testImage} alt="" style={{ width: '100%', height: '100%' }} />
				<div className="dday">{`D-${left}`}</div>
			</div>
			<div className="meetingcardtitle">{title}</div>
			<div className="meetinginfo">
				<div className="meetinginfoline" style={{ marginBottom: '8px' }}>
					<img src={locationIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px' }} />
					<div style={{ fontSize: '11px' }}>{place}</div>
				</div>
				<div className="meetinginfoline">
					<img src={calendarIcon} alt="" style={{ width: '14px', height: '14px', marginRight: '4px' }} />
					<div style={{ fontSize: '11px' }}>{date}</div>
				</div>
			</div>
			<div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div className="meetingwriter">
					<img className="meetingprofileimage" src={defaultProfileImage} alt="" />
					<div className="meetingprofilebox">
						<div className="meetingwritername">{name}</div>
						<div className="meetingwriterinfo">{info}</div>
					</div>
				</div>
				<div className="participant">
					<img src={peopleIcon} alt="" style={{ width: '18px', height: '18px', marginRight: '4px' }} />
					<div style={{ fontSize: '12px' }}>{`${now}/${limit}`}</div>
				</div>
				<img src={heartIcon} alt="" style={{ display: 'block', width: '18px', height: '18px', marginTop: '12px' }} />
			</div>
		</div>
	);
};

export default MeetingCard;
