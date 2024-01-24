/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, createContext, useState } from 'react'
import { IGlobalValues } from '../Types'

const globalValuesBase = {
	cardValues: [
		{ title: 'Clientes nuevos', value: 18, variationValue: 8.2, currency: false },
		{ title: 'Prestamos activos', value: 25, variationValue: -8.2, currency: false },
		{ title: 'Pedidos totales', value: 1236, variationValue: 8.2, currency: false },
		{ title: 'Ingresos totales', value: 1783, variationValue: 8.2, currency: true },
	],
	invoices: [],
}

export const GlobalContext = createContext<{ globalValues: IGlobalValues; setGlobalValues: any }>({
	globalValues: globalValuesBase,
	setGlobalValues: () => {},
})

interface Props extends PropsWithChildren {}
export const ContextProvider = ({ children }: Props) => {
	const [globalValues, setGlobalValues] = useState<IGlobalValues>(globalValuesBase)

	return <GlobalContext.Provider value={{ globalValues, setGlobalValues }}>{children}</GlobalContext.Provider>
}
