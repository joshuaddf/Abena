import React from 'react'

type childrenprops = {
  children: React.ReactNode,
  className?: string
}

const Wrapper = ({ children, className='' }: childrenprops) => {
  return (
    <div className={`max-w-9xl mx-auto flex items-center justify-center px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper