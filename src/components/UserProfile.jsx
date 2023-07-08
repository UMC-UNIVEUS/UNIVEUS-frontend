import $ from 'jquery';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/UserProfile.scss';
import Modal from './Modal';

export default function UserProfile() {
	const { register, handleSubmit } = useForm();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const [etc, setEtc] = useState(false);

	// 글자수 세기 (useState로 구현하려 했으나, e.tartget.value 안됨...)

	// const [byte, setByte] = useState(0)
	// const countByte = (e) => {
	//   setByte(
	//   e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
	//   );
	// };

	// jquery로 하려는데도 안됨... 뭐야 도대체...?@?@?@???
	// 작동됐다가 새로고침하면 작동 안됨... ㅋ..
	$('#report-etc').keyup(function (e) {
		let content = $(this).val();

		if (content.length === 0 || content === '') {
			$('.byte-box').text('0/150');
		} else {
			$('.byte-box').text(content.length + '/150');
		}
	});

	return (
		<div className="user-profile">
			<div className="up-box">
				<div className="up-title">관심사</div>
				<div className="up-content"></div>
			</div>
			<div className="up-box">
				<div className="up-title">자기소개</div>
				<div className="up-content big-content"></div>
			</div>
			<button className="report-btn" onClick={openModal}>
				신고하기
			</button>
			<Modal
				isOpen={isModalOpen}
				closeModal={closeModal}
				ynBtn={true}
				otherBtn1={'취소'}
				otherBtn2={'신고'}
				title={'신고사유를 선택해 주세요 \n(중복 선택 가능)'}
				content={
					<form className="report-box" onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
						<div className="report-radio">
							<input type="checkbox" className="report-input" id="rp1" name="rp1" />
							<label className="report-label" htmlFor="rp1">
								불건전한 언행
							</label>
						</div>
						<div className="report-radio">
							<input type="checkbox" className="report-input" id="rp2" name="rp2" />
							<label className="report-label" htmlFor="rp2">
								불건전한 프로필
							</label>
						</div>
						<div className="report-radio">
							<input type="checkbox" className="report-input" id="rp3" name="rp3" />
							<label className="report-label" htmlFor="rp3">
								모임시 불쾌한 행동
							</label>
						</div>
						<div className="report-radio">
							<input type="checkbox" className="report-input" id="rp4" name="rp4" />
							<label className="report-label" htmlFor="rp4">
								타학교 학생
							</label>
						</div>
						<div className="report-radio">
							<input
								type="checkbox"
								className="report-input"
								id="rp5"
								name="rp5"
								onClick={() => {
									setEtc(!etc);
								}}
							/>
							<label className="report-label" htmlFor="rp5">
								기타
							</label>
						</div>
						{etc && (
							<>
								<textarea
									name="report-etc"
									id="report-etc"
									cols="30"
									rows="10"
									maxLength="150"
									placeholder="사유를 입력해주세요."
									className="etc-box"
									{...register('report-etc', {
										maxLength: 150,
									})}
								></textarea>
								<span className="byte-box">0/150</span>
							</>
						)}
					</form>
				}
			/>
		</div>
	);
}
