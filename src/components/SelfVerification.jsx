import { useForm } from 'react-hook-form';
import '../styles/SelfVerification.scss';

export default function SelfVerification() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitted, errors },
	} = useForm();

	return (
		<div className="self-verification">
			<div className="title">
				<div className="main-title">본인인증</div>
				<div className="sub-title">유니버스를 이용하기 위해서 경기대학교 학생 인증이 필요합니다.</div>
			</div>
			<form className="verification-form" onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
				<div className="form-box">
					<div className="form-title">전화번호</div>
					<div className="form-input">
						<input
							id="phone"
							type="text"
							className="verify-text"
							placeholder="010-0000-9999"
							aria-invalid={isSubmitted ? (errors.phone ? 'true' : 'false') : undefined}
							{...register('phone', {
								required: '전화번호 입력은 필수입니다.',
								pattern: {
									value: /^\d{2,3}-\d{3,4}-\d{4}$/,
									message: '전화번호 형식에 맞지 않습니다.',
								},
							})}
						/>
						{/* <span className="verity-email-address">@kyonggi.ac.kr</span> */}
						<button className="form-btn">인증번호 받기</button>
					</div>
					{errors.phone && <div className="form-error">{errors.phone.message}</div>}
					{/* <div className="form-sub-title">학교 메일만 인증이 가능합니다.</div> */}
				</div>
				<div className="form-box">
					<div className="form-title">인증번호 입력</div>
					<div className="form-input">
						<input
							id="phone_check"
							type="number"
							className="verify-text"
							placeholder="인증번호를 입력해 주세요"
							aria-invalid={isSubmitted ? (errors.phone_check ? 'true' : 'false') : undefined}
							{...register('phone_check', {
								required: '인증번호를 입력은 필수입니다.',
								pattern: {
									// value: {보낸 인증번호와 일치하는지 확인},
									message: '인증번호가 일치하지 않습니다.',
								},
							})}
						/>
						<button className="form-btn">확인</button>
					</div>
					{errors.phone_check && <div className="form-error">{errors.phone_check.message}</div>}
				</div>
				<div className="form-box">
					<div className="form-title">닉네임</div>
					<div className="form-input">
						<input
							id="name"
							type="text"
							className="verify-text"
							placeholder="닉네임을 입력해 주세요"
							aria-invalid={isSubmitted ? (errors.name ? 'true' : 'false') : undefined}
							{...register('name', {
								required: '닉네임 입력은 필수입니다.',
								pattern: {
									// value: {서버에서 해당 이름이 존재하는지 확인},
									message: '닉네임이 중복됩니다. 다른 닉네임을 입력하세요.',
								},
							})}
						/>
						<button className="form-btn">중복확인</button>
					</div>
					{errors.name && <div className="form-error">{errors.name.message}</div>}
				</div>
				<div className="form-box">
					<div className="form-title">성별</div>
					<div className="form-radio">
						<input type="radio" className="verify-gender" id="verify-gender-male" name="gender" value="male" />
						<label className="verify-gender" htmlFor="verify-gender-male">
							남
						</label>
						<input type="radio" className="verify-gender" id="verify-gender-female" name="gender" value="female" />
						<label className="verify-gender" htmlFor="verify-gender-female">
							여
						</label>
					</div>
				</div>
				<div className="form-box">
					<div className="form-title">학과</div>
					<input type="text" className="verify-text" placeholder="학과를 입력해 주세요" />
				</div>
				<div className="form-box">
					<div className="form-title">학번</div>
					<input
						id="studentID"
						type="number"
						className="verify-text"
						placeholder="ex)202312345"
						aria-invalid={isSubmitted ? (errors.studentID ? 'true' : 'false') : undefined}
						{...register('studentID', {
							required: '학번 입력은 필수입니다.',
							pattern: {
								value: 7,
								message: '학번 형식이 맞지 않습니다.',
							},
						})}
					/>
					{errors.studentID && <div className="form-error">{errors.studentID.message}</div>}
				</div>
				<button type="submit" className="submit-btn">
					유니버스 시작하기
				</button>
			</form>
		</div>
	);
}
