import MeetingCard from "../components/MeetingCard";
import MenuBtn from "../components/MenuBtn";
import '../styles/PostContainer.scss'
import React, { useState, useEffect } from 'react';
import { Paging } from "../utils/paging";

const dummyitems = [
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    }, {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },{
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    },
    {
        title: "제목",
        place: "위치 정보",
        date: "날짜 정보",
        now: 1,
        left: 7,
        limit: 4,
        name: "유니버스 관리자",
        info: "안녕하세요"
    }
];



const PostContainer = () => {

    const [isClickedOrderButton, setIsClickedOrderButton] = useState(false);
    const [orderOption, setOrderOption] = useState('인기순');

    const [items, setItems] = useState([]) //리스트에 나타낼 아이템
    const [count, setCount] = useState(0); //아이템 총 개수
    const [currentpage, setCurrentpage] = useState(1); //현재페이지
    const [postPerPage] = useState(9); //페이지당 아이템 개수

    const [indexOfLastPost, setIndexOfLastPost] = useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
    const [currentPosts, setCurrentPosts] = useState(0);

    useEffect(() => {
        //setCount(items.length);
        setCount(dummyitems.length);
        setIndexOfLastPost(currentpage * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(dummyitems.slice(indexOfFirstPost, indexOfLastPost));
    }, [currentpage, indexOfFirstPost, indexOfLastPost, dummyitems, postPerPage]);
    
    const setPage = (e) => {
        setCurrentpage(e);
    };

    const clickOrderButton = () => {
        setIsClickedOrderButton(!isClickedOrderButton);
    };

    const clickPopularOrderButton = () => {
        setOrderOption('인기순');
        setIsClickedOrderButton(!isClickedOrderButton);
    };

    const clickNewOrderButton = () => {
        setOrderOption('최신순');
        setIsClickedOrderButton(!isClickedOrderButton);
    };

    console.log(currentPosts);

    return (
        <div className="PostContainer">
            <MenuBtn />
            <div className="mainpagebuttons">
                {isClickedOrderButton ? <div>
                    <div className="popularorderbutton" onClick={clickPopularOrderButton}>인기순</div>
                    <div className="neworderbutton" onClick={clickNewOrderButton}>최신순</div>
                </div>
                : <button className="mainpagebutton orderbutton" onClick={clickOrderButton}>{orderOption}</button>}
                <button className="mainpagebutton writebutton">글쓰기</button>
            </div>
            <div className="container">
                {currentPosts && dummyitems.length > 0 ? (
                    currentPosts.map((it)=> (
                        <MeetingCard {...it}/>
                    ))
                )
                : <div>게시물이 없습니다</div>
                }
            </div>
            <Paging page={currentpage} count={count} setPage={setPage} />
        </div>
    );
};

export default PostContainer;