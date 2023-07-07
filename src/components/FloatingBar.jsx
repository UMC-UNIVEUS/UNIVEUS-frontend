import '../styles/FloatingBar.scss'
import FloatingBarButton from './FloatingBarButton';

const color = '#f1f1f1';

const FloatingBar = () => {
    return (
        <div className="FloatingBar">
            <FloatingBarButton buttoncolor={'white'} textcolor={'#2f3db8'} text={'오픈톡방 들어가기'}/>
            <FloatingBarButton buttoncolor={'#2f3db8'} textcolor={'2f3db8'} text={'참여하기'}/>
            <FloatingBarButton buttoncolor={'white'} textcolor={'#2f3db8'} text={'참여취소'}/>
        </div>
    )
};

export default FloatingBar;