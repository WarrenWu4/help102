import "../styles/reviewblock.css"
import UnitBlock from "./UnitBlock";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

export default function ReviewBlock(props) {

    const profile_img = (props.pic === "") ? "src/assets/tao_card_imgs/default.jpg":"src/assets/tao_card_imgs/"+props.pic;

    // TODO: change color for some units b/c hard to see w/ white text
    const unitNumToColor = {
        1:"#6096B4",
        2:"#93BFCF",
        3:"#EAC7C7",
        4:"#E5FDD1",
        5:"#C9F4AA",
        6:"#D9ACF5",
        7:"#AAE3E2",
        8:"#7286D3"
    };

    const handleClick = (link) => () => {
        if (link != "") {
            let path = "src/assets/review_videos/"+link;
            props.SetVideo(path);
            props.SetPlay("flex");
            props.SetVidPlay(true);
        }
    }

    // TODO: Add gallery functions
    const vidGallery = props.vid.map((v) =>
        <div className="video" onClick={handleClick(v.link)}>
            <div className="video-title">{v.title}</div>
            <div className="video-date">{v.date}</div>
            <div className="video-units">Units Covered:</div>
            <div className="video-unit-container">
                {v.units.map((unit) => 
                    <UnitBlock num={unit} color={unitNumToColor[unit]}/>
                )}
            </div>
        </div>
    )

    return (
        <div className="reviewblock-container">


            <div className="reviewblock-header">
                <div className="reviewblock-profile" style={{backgroundImage:`url(${profile_img}`}}></div>
                <div className="reviewblock-bar">
                    <div className="reviewblock-name">{props.name}</div>
                    <div className="reviewblock-divider"></div>
                </div>
            </div>


            <div className="reviewblock-gallery">
                <div className="reviewblock-left-btn"><FaAngleLeft/></div>
                <div className="reviewblock-video-container">
                    {vidGallery}
                </div>
                <div className="reviewblock-right-btn"><FaAngleRight/></div>
            </div>

        </div>
    )
}