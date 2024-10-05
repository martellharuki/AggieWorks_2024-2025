import Title from "./Components/Title"
import SubTitle from "./Components/SubTitle"
import BarDesign from "./Components/BarDesign"
import "./Header.css"
const Header = () => {
    return <div className="header_container">
        <Title></Title>
        <SubTitle></SubTitle>
        <BarDesign></BarDesign>
    </div>
}

export default Header