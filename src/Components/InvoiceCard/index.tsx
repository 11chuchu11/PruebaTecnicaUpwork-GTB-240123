import { useState, useEffect, useContext, useRef } from 'react'
import QuantityCounter from '../QuantityCounter'
import InputPrice from '../InputPrice'
import { IClientData, IGlobalValues, IProduct } from '../../Types'
import { GlobalContext } from '../../Context'

interface Props {
	clients?: IClientData[]
	products?: IProduct[]
}

const formBase = {
	client: 0,
	product: 0,
	quantity: 0,
	price: 0,
	priceBase: 0,
}

const InvoiceCard = ({ clients, products }: Props) => {
	const [quantityInvoice, setQuantityInvoice] = useState(1)
	const [form, setForm] = useState<{ client: number; product: number; quantity: number; price: number; priceBase: number }>(formBase)

	const formRef = useRef<HTMLFormElement | null>(null)
	const { globalValues, setGlobalValues } = useContext(GlobalContext)

	const submitInvoice = () => {
		if (form.client && form.price && form.product && form.quantity) {
			setGlobalValues((prev: IGlobalValues) => ({ ...prev, invoices: [...prev.invoices, form] }))
			console.log(formRef)
			setForm(formBase)
		}
	}
	useEffect(() => {
		if (typeof quantityInvoice !== 'number' || quantityInvoice < 0) setQuantityInvoice(0)

		setForm(prev => ({ ...prev, quantity: quantityInvoice, price: prev.priceBase * quantityInvoice }))
	}, [quantityInvoice])

	useEffect(() => {
		const product = products?.find(product => product.id == form.product)
		setQuantityInvoice(1)
		setForm(prev => ({ ...prev, price: product?.price as number, priceBase: product?.price as number }))
	}, [form.product])

	useEffect(() => {
		setGlobalValues((prev: IGlobalValues) => ({
			...prev,
			cardValues: prev.cardValues?.map(card => {
				if (card.title === 'Pedidos totales') return { ...card, value: card.value + 1 }
				return card
			}),
		}))
	}, [globalValues.invoices])

	return (
		<form ref={formRef} className="mt-6 flex flex-col w-full text-xs text-gray400 font-semibold gap-3 font-poppins ">
			<select
				name="client"
				id="client"
				defaultValue={0}
				onChange={props => setForm(prev => ({ ...prev, client: Number(props.target.value) }))}
				className=" bg-white border border-gray400 rounded-md py-2 px-4">
				<option value={0} disabled>
					Clientes
				</option>
				{clients?.map(client => (
					<option value={client.id} key={`${client.name}-${client.id}`}>
						{client.name}
					</option>
				))}
			</select>
			<select
				name="product"
				id="product"
				defaultValue={0}
				onChange={props => setForm(prev => ({ ...prev, product: Number(props.target.value) }))}
				className="bg-white border border-gray400 rounded-md py-2 px-4">
				<option value={0} disabled>
					Productos
				</option>
				{products?.map(product => (
					<option value={product.id} key={`${product.name}-${product.id}`}>
						{product.name}
					</option>
				))}
			</select>

			<div className="w-[100%] flex gap-2">
				<QuantityCounter value={quantityInvoice} setValue={setQuantityInvoice} />
				<InputPrice value={form.price} />
			</div>

			<button
				type="reset"
				onClick={submitInvoice}
				className="place-self-end bg-blue100 text-white text-base font-semibold py-2 px-5 w-fit rounded-2xl ">
				Realizar pedido
			</button>
		</form>
	)
}

export default InvoiceCard
