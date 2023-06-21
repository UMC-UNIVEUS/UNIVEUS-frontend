import '../styles/Footer.scss';
import instagramLogo from '../assets/images/instagram.png';

export default function Footer() {
	return (
		<div className="footer-body">
			<img className="instagram-logo" src={instagramLogo} alt="Instagram Logo" />
			<div className="paragraph">
				<span>UNIVE.US</span>
				<span>대학생활의 로망을 실현하고 싶은 사람들의 행성</span>
			</div>
			<div className="paragraph">
				<span>유니버스 (UNIVE.US) 대표자: 김동혁 | 01093643220</span>
				<span>BUSINESS NO. 000-00-00000 | 2023-수원-1854</span>
			</div>
			<div className="paragraph">
				<span>경기도 수원시 연무동 246-16 | kjundh@kyonggi.ac.kr</span>
				<span>Copyright © UNIVE. All Rights Reserved.</span>
			</div>
			<div className="link-paragraph">
				<div>이용약관</div>
				<div>개인정보처리방침</div>
			</div>
		</div>
	);
}
