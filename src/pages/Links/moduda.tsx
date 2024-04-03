import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { ModudaBg, Moduda1, Moduda2, Moduda3, Moduda4, Moduda5, Moduda6, Moduda7, Moduda8, Moduda9 } from "assets/images";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Moduda = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={ModudaBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>모두다 APP UI·UX</h3>
        <h2>MODUDA Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>광주 지역의 새로운 장소를 소개 및 안내하는 모바일 앱으로 깔끔하면서도 역동적인 UI를 구현하고자 노력하였습니다.<br /> <span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={25}>
        <img src={Moduda1} alt="image" data-aos="fade-up" />
        <img src={Moduda2} alt="image" data-aos="fade-up" style={{marginTop:'120px'}}/>
        <img src={Moduda3} alt="image" data-aos="fade-up" />
      </SlideWrap>
      <SlideWrap results={25}>
        <img src={Moduda5} alt="image" data-aos="fade-up" style={{marginTop:'-100px'}}/>
        <img src={Moduda4} alt="image" data-aos="fade-up" style={{marginTop:'-520px'}}/>
        <img src={Moduda6} alt="image" data-aos="fade-up" style={{marginTop:'-700px'}} />
      </SlideWrap>
      <SlideWrap results={25}>
        <img src={Moduda9} alt="image" data-aos="fade-up"/>
        <img src={Moduda8} alt="image" data-aos="fade-up" style={{marginTop:'-720px'}}/>
        <img src={Moduda7} alt="image" data-aos="fade-up" style={{marginTop:'-1300px'}}/>
      </SlideWrap>
    </FixedBg>
  );
}