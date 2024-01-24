import { ICard } from "../../Types"
import { Formatter, FormatterTypes } from "../../functions/formatter"

interface Props {
  data: ICard
}
const Card = ({data:{currency,title,value,variationValue}}:Props) => {
  return (
		<div className="w-[214px] h-[143px] rounded-xl border border-gray100 font-poppins px-5 py-4">
			<p className="font-semibold text-sm text-black100 mb-3">{title}</p>
			<span className="text-blue200 font-semibold text-3xl">
				{currency ? Formatter(FormatterTypes.NUMBER, value) : Formatter(FormatterTypes.NUMBER, value)} {currency&&' Bs'}
			</span>
			<p className="mt-3 font-normal text-gray300 text-xs">
				<span className={`p-1 rounded-lg mr-2 ${variationValue>0 ?'bg-green100 text-green200': 'bg-red100 text-red200'}`}>+{variationValue>0 ? variationValue : variationValue*-1}%</span>
				En el ultimo mes
			</p>
		</div>
  )
};

export default Card;
