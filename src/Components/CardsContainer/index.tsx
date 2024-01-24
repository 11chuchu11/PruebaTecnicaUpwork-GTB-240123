import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string
}
const FlexContainer = ({ children, className: className='' }: Props) => {
	return <div className={`flex gap-5 ${className}`}>{children}</div>
}

export default FlexContainer
