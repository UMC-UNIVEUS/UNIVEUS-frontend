import '../styles/Modal.scss';
import logo from '../assets/images/biglogo.png';
import closeBtn from '../assets/images/close-btn.png';

// 각 모달창마다 내용이랑 버튼이 다르므로 해당 내용은 컴포넌트 형태가 아니라 직접 가져가서 연결해야 할 듯 싶다

// 각 페이지에 맞게 코드를 가져가서 수정할 것!!

export default function Modal({ content }) {
	console.log(content);
	return (
		<div className="modal-back">
			<div className="modal">
				<button className="modal-close">
					<img src={closeBtn} alt="모달창 닫기 버튼" />
				</button>
				<div className="modal-body">
					<img className="modal-logo" src={logo} alt="UNIVE:US logg" />
					<div className="modal-content">{content}</div>
				</div>
				<div className="modal-footer">
					<button className="modal-btn modal-white-btn">네</button>
					<button className="modal-btn modal-blue-btn">아니오</button>
				</div>
			</div>
		</div>
	);
}
