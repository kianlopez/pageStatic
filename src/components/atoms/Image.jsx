import './Image.css'

function Image(props){
    return (
        <img id="cards_img" src={props.image} alt="logo" />
    )
}

export default Image;