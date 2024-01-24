import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface IClientData{
	name: string
	img: string
	id: number
}

export interface ICard {
	title: string
	value: number
	variationValue: number
	currency: boolean
}

export interface IClientInvoiceData {
	name: string
	date: string
	money: number
	img?: string
}

export interface IProduct{
	name: string
	price: number
	id:number
}

export interface IData {
	clientsData?: IClientData[]
	clientsInvoicesData?: IClientInvoiceData[]
	cardsValues?: ICard[]
	productsData?: IProduct[]
}

export interface Page {
	link?: string
	title: string
	icon: IconProp
	dropdown: boolean
}

export interface IGlobalValues {
	cardValues: {
		title: string
		value: number
		variationValue: number
		currency: boolean
	}[]
	invoices: {
		client: number
		product: number
		quantity: number
		price: number
		priceBase: number
	}[]
}