import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setText, textSelector } from '../../reducers/textSlice'

const Input = () => {
    const dispatch = useAppDispatch()
    const text = useAppSelector(textSelector)

    return (
        <div>
            Input:
            <input value={text} onInput={(ev) => { dispatch(setText((ev.target as HTMLInputElement).value)) }} />
        </div>
    )
}

export default Input