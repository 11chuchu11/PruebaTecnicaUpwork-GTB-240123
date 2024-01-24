import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Formatter, FormatterTypes } from '../../functions/formatter'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons/faMoneyCheckDollar'
import { IClientInvoiceData } from '../../Types'

interface Props {
	data: IClientInvoiceData
}
const ClientsCardItem = ({ data: { date, money, name, img } }: Props) => {
	
	return (
		<div className="flex font-poppins items-center justify-around">
			{img ? (
				<div className="h-[35px] w-[35px] ">
					<img src={img} alt="client" className="h-full w-full rounded-[50%]" />
				</div>
			) : (
				<span className="h-[35px] w-[35px] rounded-[50%] bg-gray200 text-black100 flex justify-center items-center">
					<FontAwesomeIcon fontSize={20} icon={faUser} />
				</span>
			)}

			<p className="text-black font-medium text-xs w-24">{name}</p>
			<div className="w-[103px] h-[28px] border rounded-lg border-blue200 text-blue200">
				<p className="text-center">{Formatter(FormatterTypes.DATE, date)}</p>
			</div>
			<div className="w-[103px] h-[28px] rounded-lg bg-blue200 text-white flex items-center gap-1 justify-center">
				<FontAwesomeIcon fontSize={24} icon={faMoneyCheckDollar} />
				{Formatter(FormatterTypes.NUMBER, money)} Bs.
			</div>
		</div>
	)
}

export default ClientsCardItem
