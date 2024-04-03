import { FixedBg, Arrow, Description, LongText, SlideWrap } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Admin1, AdminBg, Admin2, Admin3 } from "assets/images";

export const EwelfareAdmin = () => {
  const height = window.innerHeight;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    }); // AOS init
  }, []);

  return (
    <FixedBg className={AdminBg} style={{ paddingTop: height + 'px' }} >
      <Arrow />
      <Description>
        <h3>e복지 Admin APP UI·UX</h3>
        <h2>e-welfare Admin Mobile UI·UX</h2>
        <div>
          <span className="sub_title">작업내용</span>
          <p>e복지를 사용하는 기업의 담당자를 위한 모바일 앱으로 기업 내에서의 커뮤니티를 관리하고, 포인트 및 이벤트 등을 관리할 수 있습니다.<br />그래프를 사용하여 직관적인 UI로 편리성을 제공하며 다양한 컬러를 사용하여 지루하지 않게 이용할 수 있도록 노력하였습니다.<br/><span>#Photoshop #Sketch</span></p>
        </div>
      </Description>
      <SlideWrap results={100}>
        <img src={Admin1} alt="image" data-aos="fade-up" style={{margin:'50px 0'}}/>
        <img src={Admin2} alt="image" data-aos="fade-up" style={{margin:'50px 0'}}/>
        <img src={Admin3} alt="image" data-aos="fade-up" style={{margin:'50px 0'}}/>
      </SlideWrap>
    </FixedBg>
  );
}