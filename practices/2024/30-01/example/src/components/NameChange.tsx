import React, { useState } from 'react'

const NameChange = () => {
    const [firstname, setFirstName] = useState<string>("")
    const [finalName, setFinalName] = useState<string>("")


    return (
        <div>
            <input type="text" value={firstname}
                onInput={(ev) => {
                    const info = (ev.target as HTMLInputElement).value
                    setFirstName(info)
                }} />

            Hello {finalName}

            <button onClick={() => { setFinalName(firstname) }}>SAVE</button>
        </div>
    )
}

export default NameChange