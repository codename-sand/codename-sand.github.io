import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { WooriBg, Woori1, Woori2, Woori3, Woori4, Woori5, Woori6, Woori7, Woori8, Woori9, Woori10, WooriAD } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Woori = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={WooriBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>우리은행 ATM AD & Admin 개발</h3>
        <h2>Woori bank ATM AD & Admin(SMC)</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>AP 통신을 통해 모든 은행의 기기에 사용 할 수 있도록 은행별로 나뉜 엔진을 통합(AS → JS)하였으며<br />반응형으로 제작하여 기기가 바뀌어도 UI 역시 편리하게 적용할 수 있습니다.<br />
            - 전면 광고부 개발 (기기 시재 및 상태안내), 지점별 광고 자동 재생<br />
            - Admin 개발 (기기 상태 변경, 기기 세팅, 오작동 센서체크, 지폐 등록 및 회수 등)<br />
            * 기기 없이 웹으로는 보안상의 이유로 특정 프로그램을 거쳐야하므로 일부 스크린샷으로 대체합니다.<br /><span>#HTML5 #CSS3 #JS</span></p>
        </div>
      </Description>
      <SlideWrap results={40}>
        <LongText data-aos="fade-down">AD</LongText>
        <img src={WooriAD} alt="image" data-aos="fade-up" style={{ margin: '100px' }} />
        <LongText data-aos="fade-down">ATM</LongText>
        <img src={Woori1} alt="image" data-aos="fade-up" />
        <img src={Woori2} alt="image" data-aos="fade-up" />
        <img src={Woori3} alt="image" data-aos="fade-up" />
        <img src={Woori4} alt="image" data-aos="fade-up" />
        <img src={Woori5} alt="image" data-aos="fade-up" />
        <LongText data-aos="fade-down" >Admin</LongText>
        <img src={Woori6} alt="image" data-aos="fade-up" />
        <img src={Woori7} alt="image" data-aos="fade-up" />
        <img src={Woori8} alt="image" data-aos="fade-up" />
        <img src={Woori9} alt="image" data-aos="fade-up" />
        <img src={Woori10} alt="image" data-aos="fade-up" />
      </SlideWrap>
    </FixedBg>
  );
}