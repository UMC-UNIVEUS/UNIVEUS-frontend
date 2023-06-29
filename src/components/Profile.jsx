import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import profileLogo from '../assets/images/biglogo.png';
import '../styles/Profile.scss';

styled(profileLogo)`
	width: 75px;
	height: 75px;
`;

export default function Profile() {
	const { register, handleSubmit } = useForm();
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();

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
		<form className="profile-form" onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
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
						<button className="delete-btn right-btn-style">프로필 삭제</button>
					</div>
				</div>
				<hr className="profile-hr" />
				<div className="info-left">
					<div className="left-box">
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
					<div className="left-box">
						<label className="left-label">성별</label>
						<label className="gender-label" htmlFor="mypage-profile-male">
							남
						</label>
						<input type="radio" id="mypage-profile-male" name="drone" value="male" />
						<label className="gender-label" htmlFor="mypage-profile-female">
							여
						</label>
						<input type="radio" id="mypage-profile-female" name="drone" value="female" />
					</div>
				</div>
			</div>
			<div className="pro-interest">
				<label htmlFor="mypage-profile-interest">관심사</label>
				<textarea name="interest" id="mypage-profile-interest" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-selfintro">
				<label htmlFor="mypage-profile-selfintro">자기소개</label>
				<textarea name="selfintro" id="mypage-profile-selfintro" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-btns">
				<button className="secession-btn">회원탈퇴</button>
				<input className="save-btn" type="submit" value={'저장하기'} />
			</div>
		</form>
	);
}
