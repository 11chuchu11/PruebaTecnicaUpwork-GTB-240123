import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
	selected?: boolean
	link?: string
	title: string
	icon: IconProp
	dropdown: boolean
}
const Item = ({ title, icon, dropdown, link }: Props) => {
	return (
		<li >
			<a
				href={link}
				className="text-white text-base flex items-center text-start py-3 cursor-pointer hover:bg-white hover:text-black100 hover:rounded-md">
				<span className="w-[20%] flex justify-center text-xl">
					<FontAwesomeIcon icon={icon} />
				</span>
				<span className="text-nowrap w-[80%] flex justify-between items-center pr-2">
					{title}
					{dropdown && <FontAwesomeIcon icon={faChevronDown} />}
				</span>
			</a>
		</li>
	)
}

export default Item
