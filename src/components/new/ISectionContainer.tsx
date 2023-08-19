import React, { FC } from "react";

interface Props {
  children?: React.ReactNode,
  className?: string,
  id?: string,
}

const ISectionContainer: FC<Props> = ({children, className, id}) => {
  const style = "flex mx-2 sm:mx-4 md:mx-12 " + className;

  return (
    <div 
      id={id}
      className={style}
    >
      {children}
    </div>
  )
}

export default ISectionContainer;