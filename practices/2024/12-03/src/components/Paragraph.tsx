import { useAppDispatch } from '../app/hooks'
import { setTextAsGili } from '../reducers/textSlice'
import Output from './Output'

const Paragraph = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Output />
            <button onClick={() => dispatch(setTextAsGili())}>SET AS GILI</button>
        </div>
    )
}

export default Paragraph