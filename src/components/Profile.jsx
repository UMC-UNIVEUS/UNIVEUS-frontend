import { useForm } from 'react-hook-form';

export default function Profile() {
	const { register, handleSubmit } = useForm();
	return (
		<form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
			<div className="pro-privacy">
				<div className="info-right">
					<div className="right-img"></div>
					<div className="right-btns">
						<label className="modify-label-btn" htmlFor="mypage-profile-img">
							프로필 수정
						</label>
						<input type="file" accept="image/*" id="mypage-profile-img" className="modify-input" />
						<button className="delete-btn">프로필 삭제</button>
					</div>
				</div>
				<hr />
				<div className="info-left">
					<div className="left-name">
						<input type="text" placeholder="닉네임을 입력해주세요." />
					</div>
					<div className="left-gender">
						<label for="male">남</label>
						<input type="radio" id="male" name="drone" value="male" />
						<label for="female">여</label>
						<input type="radio" id="female" name="drone" value="female" />
					</div>
				</div>
			</div>
			<div className="pro-interest">
				<label htmlFor="interest">관심사</label>
				<textarea name="interest" id="interest" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-selfintro">
				<label
					htmlFor="selfintro
        "
				>
					자기소개
				</label>
				<textarea name="selfintro" id="selfintro" cols="30" rows="10"></textarea>
			</div>
			<div className="pro-btns">
				<button className="secession-btn">회원탈퇴</button>
				<button className="save-btn">저장하기</button>
			</div>
		</form>
	);
}
