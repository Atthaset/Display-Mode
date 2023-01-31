import { useContext } from "react";
import Switch from "react-switch";
import { DisplayContext } from "../App";

const Title = () => {
    const { theme, setTheme } = useContext(DisplayContext)

    const toggle = (checked) => {
        setTheme(
            theme === "light" ? "dark" : "light"
        )
    }

    return (
        <header className={theme === "dark" ? "dark" : "light"}>
            <span>Mode [{theme}]</span>
            <Switch onChange={toggle} checked={theme === "dark"} uncheckedIcon={false} checkedIcon={false} onColor={'#ffa500'} />
        </header>
    )//checked คือ เมื่อเช็คว่าเป็น on กำหนดให้เป็น dark
}

export default Title;