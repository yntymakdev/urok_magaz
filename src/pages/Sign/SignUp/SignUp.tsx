
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

export const SignUp = observer(() => {

	return (
		<div className="sign-main">
			<div className="sign-container">
				<div className='sign-top-text'>
					<span>Регистрация</span>
				</div>
				<button>
					<span>Зайти</span>
				</button>
				<div className='sign-bottom'>
					<Link to={'/sign-in'}>Уже есть аккаунт?</Link>
				</div>
			</div>
		</div>
	)
})