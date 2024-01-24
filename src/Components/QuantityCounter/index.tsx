import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
	reduceFn?: ()=>void
	increaseFn?: ()=>void
}

const QuantityCounter = ({ setValue, value, reduceFn=()=>{}, increaseFn= ()=>{} }: Props) => {
  
  const reduceQuantity = () => {
		setValue(prev => prev - 1)
		reduceFn()
	}

	const increaseQuantity = () => {
		setValue(prev => prev + 1)
		increaseFn()
	}

  return (
		<div className="w-[64%] border border-gray400 rounded-md py-1 px-4 flex justify-between items-center ">
			Cantidad
			<div className="flex gap-2 items-center w-[50%]">
				<span
					className="w-[25px] h-[25px] p-1 rounded-[50%] border border-gray400 flex items-center justify-center cursor-pointer "
					onClick={reduceQuantity}>
					<FontAwesomeIcon icon={faMinus} />
				</span>
				<input
					type="number"
					min={1}
					className="border border-gray400 rounded-md text-center w-10"
					value={value}
					onChange={props => setValue(Number(props.target.value))}
				/>
				<span
					className="w-[25px] h-[25px] p-1 rounded-[50%] border border-gray400 flex items-center justify-center cursor-pointer"
					onClick={increaseQuantity}>
					<FontAwesomeIcon icon={faPlus} />
				</span>
			</div>
		</div>
  )
};

export default QuantityCounter;
