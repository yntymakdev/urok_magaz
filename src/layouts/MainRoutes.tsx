import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Main/Cart/Cart'
import { Catalog } from '../pages/Main/Catalog/Catalog'
import { Product } from '../pages/Main/Product/Product'
import { SignIn } from '../pages/Sign/SignIn/SignIn'
import { SignUp } from '../pages/Sign/SignUp/SignUp'
import { MainLayout } from './MainLayout/MainLayout'
import { SignLayout } from './SignLayout/SignLayout'

export const MainRoutes = () => {
	return (
		<Routes>

			{/* SIGN LAYOUT */}
			<Route path='' element={<SignLayout />}>
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Route>

			{/* MAIN LAYOUT */}
			<Route path='/main' element={<MainLayout />}>
				<Route path='/main/catalog' element={<Catalog />} />
				<Route path='/main/product' element={<Product />} />
				<Route path='/main/profile' element={<></>} />
				<Route path='/main/cart' element={<Cart />} />
			</Route>

		</Routes>
	)
}