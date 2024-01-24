import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NotFound = () => {

  return (
		<div className="relative top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center text-blue100 font-poppins text-7xl font-bold">
			<span className="border-[10px] p-[150px] flex flex-col justify-center items-center border-blue100 rounded-[50%]">
				<p>404</p>
				<FontAwesomeIcon icon={faPlugCircleXmark} />
				<p>Not Found</p>
			</span>
		</div>
  )
};

export default NotFound;
