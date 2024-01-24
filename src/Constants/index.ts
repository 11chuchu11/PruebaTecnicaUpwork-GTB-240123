import { faHouse, faUsers, faLocationDot, faTruck, faCashRegister, faClipboardList, faFileInvoiceDollar, faChartLine, faChartPie, faGear } from "@fortawesome/free-solid-svg-icons"
import { Page } from "../Types"

export const pages: Page[] = [
	{ title: 'Inicio', link: '/inicio', icon: faHouse, dropdown: false },
	{ title: 'Clientes', link: '/clientes', icon: faUsers, dropdown: false },
	{ title: 'Mapa de clientes', link: '/mapaclientes', icon: faLocationDot, dropdown: false },
	{ title: 'Monitoreo de distribuidores', link: '/monitoreodistribuidores', icon: faTruck, dropdown: false },
	{ title: 'Ventas', link: '/ventas', icon: faCashRegister, dropdown: false },
	{ title: 'Pedidos', link: '/pedidos', icon: faClipboardList, dropdown: false },
	{ title: 'Prestamos', link: '/prestamos', icon: faFileInvoiceDollar, dropdown: false },
	{ title: 'Finanzas', link: '/finanzas', icon: faChartLine, dropdown: true },
	{ title: 'Reportes', link: '/reportes', icon: faChartPie, dropdown: true },
	{ title: 'Configuracion', link: '/configuracion', icon: faGear, dropdown: true },
]
