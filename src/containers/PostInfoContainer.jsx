import '../styles/PostInfoContainer.scss'
import locationIcon from '../assets/location2.png'
import peopleIcon from '../assets/people.png'
import defaultProfileImage from '../assets/defaultprofile.png'
import heartIcon from '../assets/heart.png'
import { styled } from 'styled-components'
import Participant from '../components/Participant'
import sendIcon from '../assets/sendicon.png'
import UserComment from '../components/UserComment'

const classification = "밥 같이 먹기"
const title = "돼지껍데기 먹으러 갈 사람~!"
const place = "후문 명륜진사갈비"
const now = 2
const limit = 4
const name = '작성자'
const info = '컴퓨터공학부 19학번'

const createdyear = '2019'
const createdmonth = '06'
const createddate = '09'
const createdclock = '19'
const createdminute = '30'

const limityear = '2019'
const limitmonth = '06'
const limitdate = '10'
const limitclock = '21'
const limitminute = '0'

const status = '모집마감'

const imageList = [
    {
        id: 1,
        link: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTc4/MDAxNDg4MTg1ODU2ODMy.K78hjF-N8zw5jYcCrUR3yesaC1GrqGZAFiXr2dpXboQg.VgZHRj_rXlU-bRI1bLLbW-MOcAp_3U2fsEA64Ansb9Ig.JPEG.gkfngkfn414/%EA%B7%80%EC%97%AC%EC%9A%B4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%8B%9C%EB%82%98%EB%AA%AC_%EB%A1%A4_%EA%B7%B8%EB%A6%AC%EA%B8%B0_%EA%B0%95%EC%A2%8C7.jpg?type=w420'
    },
    {
        id: 2,
        link: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTc4/MDAxNDg4MTg1ODU2ODMy.K78hjF-N8zw5jYcCrUR3yesaC1GrqGZAFiXr2dpXboQg.VgZHRj_rXlU-bRI1bLLbW-MOcAp_3U2fsEA64Ansb9Ig.JPEG.gkfngkfn414/%EA%B7%80%EC%97%AC%EC%9A%B4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%8B%9C%EB%82%98%EB%AA%AC_%EB%A1%A4_%EA%B7%B8%EB%A6%AC%EA%B8%B0_%EA%B0%95%EC%A2%8C7.jpg?type=w420'
    },
    {
        id: 3,
        link: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTc4/MDAxNDg4MTg1ODU2ODMy.K78hjF-N8zw5jYcCrUR3yesaC1GrqGZAFiXr2dpXboQg.VgZHRj_rXlU-bRI1bLLbW-MOcAp_3U2fsEA64Ansb9Ig.JPEG.gkfngkfn414/%EA%B7%80%EC%97%AC%EC%9A%B4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%8B%9C%EB%82%98%EB%AA%AC_%EB%A1%A4_%EA%B7%B8%EB%A6%AC%EA%B8%B0_%EA%B0%95%EC%A2%8C7.jpg?type=w420'
    },
    {
        id: 4,
        link: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTc4/MDAxNDg4MTg1ODU2ODMy.K78hjF-N8zw5jYcCrUR3yesaC1GrqGZAFiXr2dpXboQg.VgZHRj_rXlU-bRI1bLLbW-MOcAp_3U2fsEA64Ansb9Ig.JPEG.gkfngkfn414/%EA%B7%80%EC%97%AC%EC%9A%B4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%8B%9C%EB%82%98%EB%AA%AC_%EB%A1%A4_%EA%B7%B8%EB%A6%AC%EA%B8%B0_%EA%B0%95%EC%A2%8C7.jpg?type=w420'
    },
    {
        id: 5,
        link: 'https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMTc4/MDAxNDg4MTg1ODU2ODMy.K78hjF-N8zw5jYcCrUR3yesaC1GrqGZAFiXr2dpXboQg.VgZHRj_rXlU-bRI1bLLbW-MOcAp_3U2fsEA64Ansb9Ig.JPEG.gkfngkfn414/%EA%B7%80%EC%97%AC%EC%9A%B4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EC%8B%9C%EB%82%98%EB%AA%AC_%EB%A1%A4_%EA%B7%B8%EB%A6%AC%EA%B8%B0_%EA%B0%95%EC%A2%8C7.jpg?type=w420'
    }
]

const participants = [
    {
        name: '모임장',
        department: '영어영문학과 17학번'
    },
    {
        name: '모임장',
        department: '영어영문학과 17학번'
    },
    {
        name: '모임장',
        department: '영어영문학과 17학번'
    },
    {
        name: '모임장',
        department: '영어영문학과 17학번'
    }
]

const commentList = [
    {
        name: '모임장',
        department: '영어영문학과 17학번',
        image: '../assets/defaultprofile.png',
        comment: '테스트 댓글입니다.'
    },
    {
        name: '모임장',
        department: '영어영문학과 17학번',
        image: '../assets/defaultprofile.png',
        comment: '테스트 댓글입니다.'
    }
]



const PostInfoContainer = () => {
    return (
        <div className="PostInfoContainer"> 
            <div className='classification'>{classification}</div>
            <div>
                <div className='titletext'>{title}</div>
                <div className='meetinginfo'>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={locationIcon} alt=""  style={{width: "24px"}}/>
                        <div style={{fontSize: "14px", paddingLeft: "8px"}}>{place}</div>
                    </div>
                    <div className='participant'>
                        <img src={peopleIcon} alt="" style={{width: "18px", height: '18px', marginRight: '4px'}} />
                        <div style={{fontSize: '12px'}}>{`${now}/${limit}`}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='postinfobar'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='meetingwriter'>
                            <img className='meetingprofileimage' src={defaultProfileImage} alt=''/>
                            <div className='meetingprofilebox'>
                                <div className='meetingwritername'>{name}</div>
                                <div className='meetingwriterinfo'>{info}</div>
                            </div>
                        </div>
                        <div className= "dateinfo">
                            <div style={{marginBottom: '9px', height: '16px', lineHeight: '16px'}}><b style={{fontWeight: 'bold'}}>모임 날짜 : </b>{`${createdyear}/${createdmonth}/${createddate} ${createdclock}시 ${createdminute}분`}</div>
                            <div style={{height: '16px', lineHeight: '16px'}}><b style={{fontWeight: 'bold'}}>마감일 : </b>{`${limityear}/${limitmonth}/${limitdate} ${limitclock}시 ${limitminute}분`}</div>
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='meetingstatus'>{status}</div>
                        <img src={heartIcon} alt="" style={{width: '24px'}} />
                    </div>
                </div>
                <div style={{width: '100%',  borderTop: '1px solid #d9dbf0', borderBottom: '1px solid #d9dbf0', marginTop: '10px'}}></div>
                <div className='postImageList'>
                    {imageList.map((it) => (
                       <img src={it.link} alt='' style={{width: '300px', height: '300px'}}/>
                    ))}
                </div>
                <div className='postcontent'>
                    {`후문에 돼지껍데기집 생겼는데 같이 먹으러 갈 사람~~~!
                    나는 17학번이야`}
                </div>
            </div>
            <div style={{width: '815px',  borderTop: '1px solid #d9dbf0', borderBottom: '1px solid #d9dbf0'}}></div>
            <div>
                <div style={{fontSize: '16px', fontWeight: 'bold', width: '815px', textAlign: 'left', marginTop: '20px', marginLeft: '10px'}}>참여자 목록</div>
                <div style={{display: 'flex', flexDirection: 'row', columnGap: '16px', justifyContent: 'center', marginTop: '24px', marginBottom: '39px'}}>
                    {participants.map((it) => 
                        <Participant name={it.name} department={it.department}/>
                    )}
                </div>
            </div>
            <div style={{width: '815px',  borderTop: '1px solid #d9dbf0', borderBottom: '1px solid #d9dbf0'}}></div>
            <div style={{marginBottom: '20px'}}>
                <div style={{fontSize: '16px', fontWeight: 'bold', width: '815px', textAlign: 'left', marginTop: '20px', marginLeft: '10px'}}>댓글</div>
                <div className='commentwritebox'>
                    <input className='commentinput' type="text" placeholder='댓글을 입력하세요' />
                    <img src={sendIcon} alt='' className="sendicon" />
                </div>
            </div>
            <div style={{marginBottom: '200px'}}>
                {commentList.map(it => 
                    <UserComment image={it.image} name={it.name} department={it.department} comment={it.comment}/>
                )}
            </div>
        </div>
    )
};





export default PostInfoContainer;