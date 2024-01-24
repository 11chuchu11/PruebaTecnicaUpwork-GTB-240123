import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren{
  title?: string
  subtitle?: string
  className?: string
}
const ActionCard = ({title, subtitle, className, children}: Props) => {
  return (
		<div className={`w-[447px] h-[264px] py-4 px-5 rounded-xl border border-gray100 font-poppins ${className}`}>
			<div className="flex justify-between items-center">
				<h4 className="text-black text-base font-semibold">
					{title}
					{subtitle && <span className="text-gray200 text-xs font-normal ml-2">{subtitle}</span>}
				</h4>
				{title && <FontAwesomeIcon fontSize={16} icon={faBarsStaggered} />}
      </div>
      {children}
		</div>
  )
};

export default ActionCard;
