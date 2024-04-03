import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { EdanbiBg, EdanbiDesBg, Edanbi1, Edanbi2, Edanbi3, Edanbi4, Edanbi5, Edanbi6, Edanbi7, Edanbi8, Edanbi9, Edanbi10, Edanbi11, Edanbi12 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Edanbi = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={EdanbiBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>e단비 APP UI·UX</h3>
        <h2>e-danbi Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>고객관리(영업직)를 위한 서비스를 운영하는 모바일 앱으로<br />단체문자, 선물하기, 기념일 등록 등의 다양한 콘텐츠를 집중하여 사용할 수 있도록 구현하였으며<br/>어시스턴트 기능으로 효율적이며 사용하는동안 재미를 느낄 수 있도록 유도하였습니다.<br/><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={20}>
        <img src={Edanbi1} alt="image" data-aos="fade-up" />
        <img src={Edanbi2} alt="image" data-aos="fade-up" style={{marginTop:'-200px'}}/>
        <img src={Edanbi3} alt="image" data-aos="fade-up" />
        <img src={Edanbi4} alt="image" data-aos="fade-up" style={{marginTop:'-400px'}}/>
      </SlideWrap>
      <SlideWrap results={20}>
        <img src={Edanbi5} alt="image" data-aos="fade-up" style={{marginTop:'-100px'}}/>
        <img src={Edanbi6} alt="image" data-aos="fade-up" style={{marginTop:'-300px'}} />
        <img src={Edanbi7} alt="image" data-aos="fade-up" />
        <img src={Edanbi8} alt="image" data-aos="fade-up" style={{marginTop:'-700px'}}/>
      </SlideWrap>
      <SlideWrap results={20}>
        <img src={Edanbi9} alt="image" data-aos="fade-up" style={{marginTop:'-400px'}}/>
        <img src={Edanbi10} alt="image" data-aos="fade-up" style={{marginTop:'-300px'}}/>
        <img src={Edanbi11} alt="image" data-aos="fade-up" style={{marginTop:'-300px'}}/>
        <img src={Edanbi12} alt="image" data-aos="fade-up" style={{marginTop:'-700px'}}/>
      </SlideWrap>
    </FixedBg>
  );
}