import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Home from './Views/Home'

import { pages } from './Constants'
import { ContextProvider } from './Context'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Views/NotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: '/inicio',
		element: <Home />,
	},
]) 

function App() {
	return (
		<ContextProvider>
			<div className="flex h-full">
				<NavBar navbarItems={pages} />

				<div className="w-full m-5">
					<Header page={pages[0]} />

					<main className="mt-5 relative">
						<RouterProvider router={router}/>
					</main>
				</div>
			</div>
		</ContextProvider>
	)
}

export default App





