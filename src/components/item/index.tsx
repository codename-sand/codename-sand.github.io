import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import { Thumb1, Thumb2, Thumb3, Thumb4, Thumb5, Thumb6, Thumb7, Thumb8, Thumb9, Thumb10, Thumb11, Thumb12, Thumb13, Thumb14, Thumb15, Thumb16, Thumb17, Thumb18, Thumb19, Thumb20, Thumb21, Thumb22, Thumb23} from "assets/images";
import { Item , HoverItem ,ItemContainer } from "./styles";

export const ItemBox = () => {
    const thumbnails = [Thumb23, Thumb22, Thumb21, Thumb20, Thumb19, Thumb18, Thumb17, Thumb16, Thumb15, Thumb14, Thumb13, Thumb12, Thumb11, Thumb10, Thumb9, Thumb8, Thumb7, Thumb6, Thumb5, Thumb4, Thumb3, Thumb2, Thumb1];

    return (
        <ItemContainer>
            {data.list.map((item, index) => {
                const thumbnail = thumbnails[index];
                return (
                    <Link to={item.link} key={index} target="_blank">
                        <Item className={thumbnail} id="thumbItem"/>
                        <HoverItem id="hoverItem">
                            <div className="text_wrap">
                                <h3>{'code ' + (index + 1)}</h3>
                                <p className="title">{item.title}</p>
                                <p className="desc">{item.description}</p>
                            </div>
                            <p className="tag">{item.tag}</p>
                        </HoverItem>
                    </Link>
                );
            })}
        </ItemContainer>
    );
}