import { useState } from "react"
import Button from "./Button"
import languages from "../../../languages"

function ListButton() {

    // settiamp variabile per controllo apertura content al click
    const [ActiveButton, setActiveButton] = useState(null)

    return (
        <div className="container">
            <div className="button-list">

                {languages.map((language) => (

                    <Button key={language.id}
                        title={language.title}
                        description={language.description}
                        isOpen={ActiveButton === language.id}
                        onBtnToggle={() => setActiveButton(ActiveButton === language.id ? null : language.id)}
                    />
                ))}

            </div>
        </div>
    )
}

export default ListButton