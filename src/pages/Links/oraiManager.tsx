import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { OraiMBg,OraiM1,OraiM2,OraiM3,OraiM4,OraiM5,OraiM6,OraiM7 } from "assets/images";
import { useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const OraiManager = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={OraiMBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>오라이 매니저 APP UI·UX</h3>
        <h2>ORAI Manager Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>화물 운반을 경매를 통해 이용할 수 있는 모바일 앱으로 사용자,관리자 버전 모두 개발에 참여했습니다.<br />
          화물 운반 기사 전용 모바일 앱으로 직관적이고 간단한 UI를 구현하고자 노력하였습니다.<br /><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={20}>
        <img src={OraiM1} alt="image" data-aos="fade-up" style={{marginTop:'100px'}}/>
        <img src={OraiM2} alt="image" data-aos="fade-up" />
        <img src={OraiM3} alt="image" data-aos="fade-up" style={{marginTop:'150px'}}/>
      </SlideWrap>
      <SlideWrap results={20}>
        <img src={OraiM6} alt="image" data-aos="fade-up" /> 
        <img src={OraiM7} alt="image" data-aos="fade-up" style={{marginTop:'50px'}}/>
        <img src={OraiM4} alt="image" data-aos="fade-up" style={{marginTop:'-150px'}}/>
        <img src={OraiM5} alt="image" data-aos="fade-up" style={{marginTop:'-250px'}}/>
      </SlideWrap>
    </FixedBg>
  );
}