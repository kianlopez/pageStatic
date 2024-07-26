import Image3 from "../atoms/Image3";
import Text3 from "../atoms/Text3";
import "./Card3.css";

function Card3(props) {
    return (
        <div id="div_div-cards3">
            <Image3 image={props.image}></Image3>
            <Text3 text={props.text}></Text3>
        </div>
    );
}

export default Card3;