import '../styles/MyNav.scss';

export default function MyNav() {
	return (
		<>
			<div className="mynav-body">
				<div className="my-list">
					<button className="list-btn">내가 만든 유니버스</button>
					<button className="list-btn">내가 참여한 유니버스</button>
					<button className="list-btn">찜한 유니버스</button>
					<button className="list-btn">프로필관리</button>
					<button className="list-btn">멤버쉽관리</button>
				</div>
				<div className="my-info">
					<div className="info-img">
						<img src="" alt="유저 이미지" />
					</div>
					<div className="info-left">
						<div className="my-name">000님 안녕하세요:)</div>
						<div className="my-dept">00학과 00학번</div>
						<button className="my-membership">멤버쉽 혜택 보기{'>'}</button>
					</div>
					<div className="info-right">
						<hr />
						<div className="right-box my-part">
							<div className="title">누적 참여 유니버스</div>
							<div className="cnt">10</div>
						</div>
						<hr />
						<div className="right-box my-report">
							<div className="title">누적 신고 횟수</div>
							<div className="cnt">3</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
