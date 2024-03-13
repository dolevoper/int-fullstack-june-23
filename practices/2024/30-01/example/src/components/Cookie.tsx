import { ReactNode } from 'react'

interface CookieProps {
   children: ReactNode,
   num : number 
}

const Cookie = ({children, num}:CookieProps) => {
   
  return (
    <div>
        <>I have {num}</>
        {children}
        cookies
    </div>
  )
}

export default Cookie