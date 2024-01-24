import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Page } from '../../Types'
import { faBell } from '@fortawesome/free-solid-svg-icons'

interface Props {
	page: Page
}
const Header = ({ page: { title, icon } }: Props) => {
	return (
		<header className='flex h-fit w-full justify-between items-center'>
			<div className="font-bold font-poppins flex gap-x-5 items-center">
				<FontAwesomeIcon fontSize={28} icon={icon} />
				<h2 className="text-xl ">{title}</h2>
      </div>
      <div className='bg-blue200 text-white p-3 rounded-[50%] relative cursor-pointer'>
        <FontAwesomeIcon fontSize={28} icon={faBell} />
        <div className='h-4 w-4 rounded-[50%] bg-red200 absolute top-0 right-0'></div>
      </div>
		</header>
	)
}

export default Header
