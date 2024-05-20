import { useEffect } from 'react'
import SetStoreForm from '../components/SetStoreForm/SetStoreForm'
import GridLayout from '../components/GridLayout/GridLayout'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
const SetStorePage = () => {
	return (
		<>
			<GridLayout>
				{/*dodac navbar */}
				<SetStoreForm />
			</GridLayout>
		</>
	)
}

export default SetStorePage
