import { useAppDispatch } from '../app/hooks'
import { resetText } from '../reducers/textSlice'
import Paragraph from './Paragraph'

const Container = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Paragraph />
            <button onClick={() => { dispatch(resetText()) }}>RESET</button>
        </div>
    )
}

export default Container