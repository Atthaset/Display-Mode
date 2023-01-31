import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { DisplayContext } from '../App'

const Content = () => {
    const { theme } = useContext(DisplayContext)

    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <div>
                <h1>Atthaset Autz</h1>
                <p>Aut's Workshop</p>
            </div>
            <img src={theme === "light" ? light : dark} alt="Logo" />
        </main>
    )
}

export default Content;