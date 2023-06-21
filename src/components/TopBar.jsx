import logoImage from '../assets/titlelogo.png'
import navigationArrowImage from '../assets/navigationarrow.png'
import ticketImage from '../assets/ticket.png'
import miniLogoImage from '../assets/minilogo.png'
import bellImage from '../assets/bell.png'
import '../styles/Header.scss'

const TopBar = () => {
    return (
        <div className="TopBar">
            <div className="title">
                <img src={logoImage}/>
                <div>
                    <div className='titletext'>UNIVE.US</div>
                    <div className='subtitletext'>KGU</div>
                </div>
            </div>
            <div className="searchbar">    
                <input type='text' className='searchinput' placeholder='검색할 키워드를 입력해 주세요(제목)'/>
                <img src={navigationArrowImage} className='navigationarrow' />
            </div>
            <div className="sidemenu">
                <div className='ticketbox'>
                    <img src={ticketImage} style={{width: '22px', height: '22px', marginLeft: '8px'}}/>
                    <div style={{width: '0px', height: '21px', borderLeft: '1px solid #b5b3b3', marginLeft: '9px'}}></div>
                    <div style={{marginLeft: '8px', fontWeight: '500', fontSize: '16px'}}>2 ticket</div>
                </div>
                <img src={miniLogoImage} className='minilogo' />
                <img src={bellImage} className='bell'></img>
            </div>
            <div></div>
        </div>
    );
};

export default TopBar;