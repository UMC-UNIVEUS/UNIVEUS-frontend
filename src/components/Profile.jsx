import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import profileLogo from '../assets/images/biglogo.png';
import Modal from './Modal';
import '../styles/Profile.scss';

export default function Profile() {
	const { register, handleSubmit } = useForm();
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();

	// modal창 여닫기
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// 이미지 업로드 input의 onChange
	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	return (
		<form className="profile-form" onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
			<div className="pro-privacy">
				<div className="info-right">
					<div className="right-img">
						<img src={imgFile ? imgFile : profileLogo} alt="프로필 이미지" />
					</div>
					<div className="right-btns">
						<label className="modify-label-btn right-btn-style " htmlFor="mypage-profile-img">
							프로필 수정
						</label>
						<input
							type="file"
							accept="image/*"
							id="mypage-profile-img"
							className="modify-input"
							onChange={saveImgFile}
							ref={imgRef}
						/>
						{/* DB연결후에 프로필 이미지 삭제 기능 추가 */}
						<button className="delete-btn right-btn-style">프로필 삭제</button>
					</div>
				</div>
				<hr className="profile-hr" />
				<div className="info-left">
					<div className="name-box">
						<label className="left-label" htmlFor="mypage-profile-name">
							닉네임
						</label>
						<input
							type="text"
							id="mypage-profile-name"
							className="left-name-input"
							placeholder="닉네임을 입력해주세요."
						/>
					</div>
					<div className="radio-box">
						<div className="radio-label left-label">성별</div>
						<div className="radio-group">
							<div className="radio-input">
								<label className="gender-style gender-label" htmlFor="mypage-profile-male">
									남
								</label>
								<input type="radio" className="gender-style" id="mypage-profile-male" name="drone" value="male" />
							</div>
							<div className="radio-input">
								<label className="gender-style gender-label" htmlFor="mypage-profile-female">
									여
								</label>
								<input type="radio" className="gender-style" id="mypage-profile-female" name="drone" value="female" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pro-box">
				<label className="pro-label" htmlFor="mypage-profile-interest">
					관심사
				</label>
				<textarea name="interest" id="mypage-profile-interest" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-box">
				<label className="pro-label" htmlFor="mypage-profile-selfintro">
					자기소개
				</label>
				<textarea name="selfintro" id="mypage-profile-selfintro" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-btns">
				<button className="secession-btn" onClick={openModal}>
					회원탈퇴
				</button>
				<Modal
					isOpen={isModalOpen}
					closeModal={closeModal}
					ynBtn={true}
					title={'정말 탈퇴하시겠습니까?'}
					content={'"탈퇴 후 재가입은 7일 후 가능하며 기존 멤버쉽 혜택은 사라집니다."'}
				/>
				<input className="save-btn" type="submit" value={'저장하기'} />
			</div>
		</form>
	);
}
