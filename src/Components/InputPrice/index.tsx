interface Props {
	value: number
	setValue?: React.Dispatch<React.SetStateAction<number>>
}

const InputPrice = ({ setValue,value}:Props) => {
  return (
		<div className="flex">
			<input
				type="number"
				min={1}
				value={value}
				onChange={setValue ? (props) => setValue(Number(props.target.value)) : () => { }}
				// disabled={!setValue}
				className="border border-gray400 rounded-md rounded-r-none text-start w-24 h-full px-2"
			/>
			<span className="border border-gray400 text-center rounded-md rounded-l-none h-full w-10 flex justify-center items-center">Bs</span>
		</div>
  )
};

export default InputPrice;
