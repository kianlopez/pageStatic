import Image2 from "../atoms/Image2";
import Text2 from "../atoms/Text2";
import "./Card2.css";

function Card2(props) {
    return (
        <div id="div_div-cards2">
            <Image2 image={props.image}></Image2>
            <Text2 text={props.text}></Text2>
        </div>
    );
}

export default Card2;