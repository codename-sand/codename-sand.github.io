import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { VipBg, Vip1, Vip2, Vip3, Vip4 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const EwelfareVip = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={VipBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>e복지 VIP회원 APP UI·UX</h3>
        <h2>e-welfare VIP Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>e복지의 회원 등급에 따라 추가로 이용이 가능한 콘텐츠만을 묶어둔 모바일 앱으로<br/>직관적인 UI로 많은 정보를 쉽게 제공할 수 있도록 노력하였습니다.<br/><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={20} style={{padding:'50px 0'}}>
        <img src={Vip1} alt="image" data-aos="fade-up" />
        <img src={Vip2} alt="image" data-aos="fade-up"  />
        <img src={Vip3} alt="image" data-aos="fade-up"  />
        <img src={Vip4} alt="image" data-aos="fade-up"  />
      </SlideWrap>
    </FixedBg>
  );
}