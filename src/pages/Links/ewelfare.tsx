import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { EwelfareBg, Ewelfare1, Ewelfare2, Ewelfare3, Ewelfare4, Ewelfare5, Ewelfare6, Ewelfare7, Ewelfare8, Ewelfare9, EwelfareDetail, Ewelfare10, Ewelfare11, Ewelfare12 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Ewelfare = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={EwelfareBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>e복지 APP UI·UX</h3>
        <h2>e-welfare Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>중소기업을 위한 통합 복지 플랫폼으로 웹사이트와 함께 모바일 앱 개발에 참여하였습니다.<br />e복지는 중소기업에 근무하는 근로자들이 복지를 쉽고 편하게 사용하는 것이 가장 큰 목적으로<br />친근하며 직관적인 UI를 구현하고자 하였으며 쇼핑, 의료검진 예약, 여행, 영화 및 공연 예매 등의<br />다양한 콘텐츠를 효율적으로 사용할 수 있도록 노력하였습니다.<br /><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap className={EwelfareDetail} results={20}>
        <img src={Ewelfare1} alt="image" data-aos="fade-up"  />
        <img src={Ewelfare10} alt="image" data-aos="fade-up" />
        <img src={Ewelfare11} alt="image" data-aos="fade-up"  />
        <img src={Ewelfare12} alt="image" data-aos="fade-up" style={{ marginTop: '-500px' }} />
      </SlideWrap>
      <SlideWrap results={20}>
        <LongText data-aos="fade-down" >Culture</LongText>
        <img src={Ewelfare2} alt="image" data-aos="fade-up"  />
        <img src={Ewelfare3} alt="image" data-aos="fade-up" />
        <img src={Ewelfare4} alt="image" data-aos="fade-up" style={{ marginTop: '-100px' }} />
        <img src={Ewelfare5} alt="image" data-aos="fade-up" style={{ marginTop: '-200px' }} />
      </SlideWrap>
      <SlideWrap results={20}>
        <LongText data-aos="fade-down" >Medical</LongText>
        <img src={Ewelfare6} alt="image" data-aos="fade-up"  style={{ marginTop: '-600px' }} />
        <img src={Ewelfare7} alt="image" data-aos="fade-up" style={{ marginTop: '-400px' }} />
        <img src={Ewelfare8} alt="image" data-aos="fade-up"  />
        <img src={Ewelfare9} alt="image" data-aos="fade-up" style={{ marginTop: '-500px' }} />
      </SlideWrap>
    </FixedBg>
  );
}