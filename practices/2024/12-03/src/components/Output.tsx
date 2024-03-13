import { useAppSelector } from "../app/hooks"
import { textSelector } from "../reducers/textSlice"

const Output = () => {
    const text = useAppSelector(textSelector)

    return (
        <div>Output:{text}</div>
    )
}

export default Output