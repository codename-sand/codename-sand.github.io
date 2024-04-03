import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { HDbg, Hd1, Hd2, Hd3, Hd4,Hd5,Hd6,Hd7,Hd8,Hd9,Hd10,Hd11,Hd12 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Hyundai = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={HDbg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>더 현대 셀프서비스 키오스크</h3>
        <h2>The Hyundai Selfservice kiosk</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>더 현대 셀프서비스 키오스크 UI개발에 참여하였습니다.<br />* 기기 없이 웹으로는 보안상의 이유로 특정 프로그램을 거쳐야하므로 일부 스크린샷으로 대체합니다.<br/><span>#HTML5 #CSS3 #JS</span></p>
        </div>
      </Description>
      <SlideWrap results={22}>
        <img src={Hd1} alt="image" data-aos="fade-up" />
        <img src={Hd2} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
        <img src={Hd3} alt="image" data-aos="fade-up" />
        <img src={Hd4} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
      </SlideWrap>
      <SlideWrap results={22}>
        <img src={Hd5} alt="image" data-aos="fade-up" />
        <img src={Hd6} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
        <img src={Hd7} alt="image" data-aos="fade-up" />
        <img src={Hd8} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
      </SlideWrap>
      <SlideWrap results={22}>
        <img src={Hd9} alt="image" data-aos="fade-up" />
        <img src={Hd10} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
        <img src={Hd11} alt="image" data-aos="fade-up" />
        <img src={Hd12} alt="image" data-aos="fade-up" style={{ marginTop: '150px' }} />
      </SlideWrap>
    </FixedBg>
  );
}