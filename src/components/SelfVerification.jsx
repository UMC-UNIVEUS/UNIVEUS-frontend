import { useForm } from 'react-hook-form';
import '../styles/SelfVerification.scss';

export default function SelfVerification() {
	const { register, handleSubmit } = useForm();

	return (
		<div className="self-verification">
			<div className="title">
				<div className="main-title">본인인증</div>
				<div className="sub-title">유니버스를 이용하기 위해서 경기대학교 학생 인증이 필요합니다.</div>
			</div>
			<form className="verification-form" onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
				<div className="form-box">
					<div className="form-title">학교 이메일</div>
					<div className="form-input">
						<input type="text" className="verify-text" placeholder="universe" style={{ width: '146px' }} />
						<span className="verity-email-address">@kyonggi.ac.kr</span>
						<button className="form-btn">인증번호 받기</button>
					</div>
					<div className="form-sub-title">학교 메일만 인증이 가능합니다.</div>
				</div>
				<div className="form-box">
					<div className="form-title">이메일 인증번호 입력</div>
					<div className="form-input">
						<input type="text" className="verify-text" placeholder="인증번호를 입력해 주세요" />
						<button className="form-btn">확인</button>
					</div>
				</div>
				<div className="form-box">
					<div className="form-title">닉네임</div>
					<div className="form-input">
						<input type="text" className="verify-text" placeholder="닉네임을 입력해 주세요" />
						<button className="form-btn">중복확인</button>
					</div>
				</div>
				<div className="form-box">
					<div className="form-title">성별</div>
					<div className="form-radio">
						<label className="verify-gender" htmlFor="verify-gender-male">
							남
						</label>
						<input type="radio" className="verify-gender" id="verify-gender-male" name="gender" value="male" />
						<label className="verify-gender" htmlFor="verify-gender-female">
							여
						</label>
						<input type="radio" className="verify-gender" id="verify-gender-female" name="gender" value="female" />
					</div>
				</div>
				<div className="form-box">
					<div className="form-title">학과</div>
					<input type="text" className="verify-text" placeholder="학과를 입력해 주세요" />
				</div>
				<div className="form-box">
					<div className="form-title">학번</div>
					<input type="text" className="verify-text" placeholder="ex)202312345" />
				</div>
				<button type="submit" className="submit-btn">
					유니버스 시작하기
				</button>
			</form>
		</div>
	);
}
