import '../styles/Modal.scss';
import logo from '../assets/images/biglogo.png';
import closeBtn from '../assets/images/close-btn.png';

// ynBtn={true|false}
// true -> 네/아니오 버튼 | false -> 확인 버튼
// title={'타이틀로 넣을 글'}
// content={'내용으로 넣을 글'}

function Modal({ isOpen, closeModal, ynBtn, title, content }) {
	return (
		<div className="modal-back" style={{ display: isOpen ? 'block' : 'none' }}>
			<div className="modal">
				<button className="modal-close" onClick={closeModal}>
					<img src={closeBtn} alt="모달창 닫기 버튼" />
				</button>
				<div className="modal-body">
					<img className="modal-logo" src={logo} alt="UNIVE:US logg" />
					<div className="modal-content">
						<div className="content-title">{title}</div>
						{content}
					</div>
				</div>
				<div className="modal-footer">
					<div className="yn-btn" style={{ display: ynBtn ? 'block' : 'none' }}>
						<button className="modal-btn modal-white-btn">네</button>
						<button className="modal-btn modal-blue-btn">아니오</button>
					</div>
					<button className="modal-btn modal-blue-btn" style={{ display: ynBtn ? 'none' : 'block' }}>
						확인
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
