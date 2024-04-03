import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { NHBg, NH1, NH2, NH3, NH4, NH5, NH6, NHdetail } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const NH = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={NHBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>농협은행 STM UI 개발</h3>
        <h2>HN bank STM UI</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>농협 STM(Smart ATM) UI개발에 참여하였습니다.<br />* 기기 없이 웹으로는 보안상의 이유로 특정 프로그램을 거쳐야하므로 일부 스크린샷으로 대체합니다.<br/><span>#HTML5 #CSS3 #JS</span></p>
        </div>
      </Description>
      <SlideWrap className={NHdetail} style={{ padding: '500px 0 100px' }}  results={50}>
        <img src={NH1} alt="image" data-aos="fade-up"  />
        <img src={NH2} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
        <img src={NH3} alt="image" data-aos="fade-up"  />
        <img src={NH4} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
        <img src={NH5} alt="image" data-aos="fade-up"  />
        <img src={NH6} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }}/>
      </SlideWrap>
    </FixedBg>
  );
}