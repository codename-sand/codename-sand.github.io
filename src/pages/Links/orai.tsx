import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { OraiBg, Orai1, Orai2, Orai3, Orai4, Orai5, Orai6, Orai7, Orai8, Orai9, Orai10, Orai11, Orai12 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Orai = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={OraiBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>오라이 APP UI·UX</h3>
        <h2>ORAI Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>화물 운반을 경매를 통해 이용할 수 있는 모바일 앱으로 사용자,관리자 버전 모두 개발에 참여했습니다.<br />깔끔하고 직관적인 UI를 구현하고자 노력하였으며 메인에서 출발/도착지 입력으로 진행되는 순차적인 UI구성으로<br />처음 이용하는 사용자도 부담감 없이 이용할 수 있도록 유도하였습니다.<br />화이트, 블랙, 옐로우 컬러의 대비되는 색감과 버튼 및 텍스트의 크기도 크고 눈에 띄도록 디자인하였습니다.<br /><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={20}>
        <img src={Orai1} alt="image" data-aos="fade-up"  />
        <img src={Orai2} alt="image" data-aos="fade-up"  style={{ marginTop: '100px' }} />
        <img src={Orai3} alt="image" data-aos="fade-up"  />
        <img src={Orai4} alt="image" data-aos="fade-up"  style={{ marginTop: '100px' }} />
      </SlideWrap>
      <SlideWrap results={20}>
        <LongText data-aos="fade-down" >Order</LongText>
        <img src={Orai5} alt="image" data-aos="fade-up" />
        <img src={Orai6} alt="image" data-aos="fade-up"  style={{ marginTop: '-200px' }}/>
        <img src={Orai7} alt="image" data-aos="fade-up"  style={{ marginTop: '200px' }}/>
        <img src={Orai8} alt="image" data-aos="fade-up"  style={{ marginTop: '-220px' }}/>
      </SlideWrap>
      <SlideWrap results={20}>
        <img src={Orai9} alt="image" data-aos="fade-up"  style={{ marginTop: '-400px' }}/>
        <img src={Orai10} alt="image" data-aos="fade-up"  style={{ marginTop: '-600px' }}/>
        <img src={Orai11} alt="image" data-aos="fade-up"  style={{ marginTop: '-100px' }}/>
        <img src={Orai12} alt="image" data-aos="fade-up"  style={{ marginTop: '-600px' }}/>
      </SlideWrap>
    </FixedBg>
  );
}