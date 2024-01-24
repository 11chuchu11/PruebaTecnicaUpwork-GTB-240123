import { useContext, useEffect, useState } from 'react'
import ActionCard from '../../Components/ActionCard'
import Card from '../../Components/Card'
import FlexContainer from '../../Components/CardsContainer'
import ClientsCardItem from '../../Components/ClientsCardItem'
import InvoiceCard from '../../Components/InvoiceCard'
import { IClientData, IClientInvoiceData, IData, IGlobalValues, IProduct } from '../../Types'
import axios from 'axios'
import { randomDate } from '../../functions/randomDate'
import { randomNumber } from '../../functions/randomNumber'
import { GlobalContext } from '../../Context'
import Chart  from '../../Components/Chart'

const Home = () => {
	const [data, setData] = useState<IData | undefined>()
	const { globalValues, setGlobalValues } = useContext(GlobalContext)

	useEffect(() => {
		axios
			.get('https://api.escuelajs.co/api/v1/users', {
				params: {
					limit: 100,
				},
			})
			.then(response => {
				setGlobalValues((prev: IGlobalValues) => ({
					...prev,
					cardValues: prev.cardValues?.map(card => {
						if (card.title === 'Clientes nuevos') return { ...card, value:response.data.length }
						return card
					}),
				}))
				const users = response.data.slice(52, 56)
				const parsedData: IClientData[] = users.map((user: { name: string; avatar: string; id: number }) => ({
					name: user.name,
					img: user.avatar,
					id: user.id,
				}))
				setData(prev => ({ ...prev, clientsData: parsedData }))
			})
		axios.get('https://api.escuelajs.co/api/v1/products', { params: { limit: 10, offset: 0 } }).then(response => {
			const parsedData: IProduct[] = response.data.map((product: { title: string; price: number; id: number }) => ({
				name: product.title,
				price: product.price,
				id: product.id,
			}))
			setData(prev => ({ ...prev, productsData: parsedData }))
		})
	}, [])

	useEffect(() => {
		if (data?.clientsData) {
			const parsedData: IClientInvoiceData[] = data.clientsData.map(data => ({
				name: data.name,
				date: randomDate(),
				money: randomNumber(),
				img: data.img,
			}))

			setData(prev => ({ ...prev, clientsInvoicesData: parsedData }))
		}
	}, [data?.clientsData])

	return (
		<section className="w-full">
			<FlexContainer className="mb-8">
				{globalValues.cardValues.map(card => (
					<Card data={card} key={card.title} />
				))}
			</FlexContainer>
			<h3 className="text-black100 text-lg font-semibold font-poppins mb-8">Acciones rápidas</h3>
			<FlexContainer className='mb-8'>
				<ActionCard title="Clientes" subtitle="Vista rápida">
					<div className="mt-6 flex flex-col gap-4 ">
						{data?.clientsInvoicesData?.map((client, i) => (
							<ClientsCardItem data={client} key={`${client.name}-${i}`} />
						))}
					</div>
				</ActionCard>
				<ActionCard title="Realizar pedido">
					<InvoiceCard clients={data?.clientsData} products={data?.productsData} />
				</ActionCard>
				<ActionCard className="w-[213px]"></ActionCard>
			</FlexContainer>
			<FlexContainer className='h-[350px]'>
				<Chart/>
			</FlexContainer>
		</section>
	)
}

export default Home
