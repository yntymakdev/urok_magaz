
import { observer } from 'mobx-react-lite'
import { Link, useNavigate } from 'react-router-dom'

export const SignIn = observer(() => {
	const navigate = useNavigate()

	const signInHandler = () => {
		navigate('/main/catalog')
	}

	return (
		<div className="sign-main">
			<div className="sign-container">
				<div className='sign-top-text'>
					<span>Вход</span>
				</div>
				<button
					onClick={signInHandler}
				>
					<span>Войти</span>
				</button>
				<div className='sign-bottom'>
					<Link to={'/sign-up'}>Нету аккаунта?</Link>
				</div>
			</div>
		</div>
	)
})