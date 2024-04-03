import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { Hanabg, Hana1, Hana2, Hana3, Hana4, Hana5, Hana0, Hana6 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Hana = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={Hanabg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description className={Hana0}>
        <h3>하나은행 ATM UI 리뉴얼</h3>
        <h2>Hana bank ATM UI Renewal</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>하나은행 리뉴얼된 UI개발 및 일부 거래 기능 통합 엔진 개발<br />
            - 20개국의 언어적용<br />- 주요 5대거래 통합 엔진 (입·출금/계좌조회/계좌이체/통장정리) 개발<br />
            - 일부 통신화면 (기기 출금 가능 권종 / Tenkey / Checkbox / 사용자 계좌 리스트) 개발<br />
            * 기기 없이 웹으로는 보안상의 이유로 특정 프로그램을 거쳐야하므로 일부 스크린샷으로 대체합니다.<br/><span>#HTML5 #CSS3 #JS</span>
          </p>
        </div>
      </Description>
      <SlideWrap results={40}>
        <img src={Hana1} alt="image" data-aos="fade-up"  />
        <img src={Hana2} alt="image" data-aos="fade-up" style={{marginTop:'150px'}}/>
        <img src={Hana3} alt="image" data-aos="fade-up"  />
        <img src={Hana4} alt="image" data-aos="fade-up" style={{marginTop:'150px'}}/>
        <img src={Hana5} alt="image" data-aos="fade-up" />
      </SlideWrap>
    </FixedBg>
  );
}