import { observer } from 'mobx-react-lite'
import s from './index.module.scss'

export const Product = observer(() => {
	return (
		<div className={s.main}>
			<span>Product</span>
		</div>
	)
})