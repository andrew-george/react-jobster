import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Error, Landing, ProtectedRoute, Register } from './pages'
import {
	AddJob,
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
} from './pages/dashboard/index'

function App() {
	return (
		<Router>
			<ToastContainer position='top-center' />
			<Routes>
				debugger
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path='all-jobs' element={<AllJobs />} />
					<Route path='add-job' element={<AddJob />} />
					<Route path='profile' element={<Profile />} />
				</Route>
				<Route path='landing' element={<Landing />} />
				<Route path='register' element={<Register />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	)
}

export default App
