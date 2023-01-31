import { useState } from "react";
import Switch from "react-switch";

const Title = () => {
    const [theme, setTheme] = useState(false)

    const toggle = (checked) => {
        setTheme(checked)
    }

    return (
        <header>
            <span>Mode</span>
            <Switch onChange={toggle} checked={theme} />
        </header>
    )
}

export default Title;