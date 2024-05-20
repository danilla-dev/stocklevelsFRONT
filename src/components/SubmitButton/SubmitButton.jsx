import style from './SubmitButton.module.scss'
const SubmitButton = () => {
	return (
		<button type='submit' className={`${style.button}  btn submit-btn`}>
			Submit
		</button>
	)
}

export default SubmitButton
