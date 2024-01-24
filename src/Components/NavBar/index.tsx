import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Item from './Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Page } from '../../Types'

interface Props {
	navbarItems: Page[]
}

const NavBar = ({ navbarItems }: Props) => {
	return (
		<nav className="bg-blue200 h-full w-[244px] relative flex flex-col items-center font-semibold ">
			{
				//* Title
			}

			<h1 className="font-baloo text-title mt-[29px] mb-[21px] text-start">
				<span className="text-blue100">Smart</span>
				<span className="text-white100">water</span>
			</h1>

			{
				//* Navbar
			}
			<ul className="w-[85%]">
				{navbarItems.map(item => (
					<Item icon={item.icon} title={item.title} key={item.title} dropdown={item.dropdown} link={ item.link} />
				))}
			</ul>

			{
				//* Quit Button
			}
			<div className="w-[58%] flex justify-between items-center bg-white px-5 py-3 rounded-md text-sm absolute bottom-5 cursor-pointer">
				<span>
					<FontAwesomeIcon fontSize={22} icon={faRightFromBracket} />
				</span>
				<span>Salir</span>
			</div>
		</nav>
	)
}

export default NavBar
