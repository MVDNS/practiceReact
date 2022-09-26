import s from './Header.module.css';


function Header() {
	return (
				<header className={s.header}>
					<img className={s.img} src='https://i.ibb.co/zVjHMcx/Pngtree-blue-samurai-head-esports-logo-4278445.png' alt='img'/>
					<div className={s.companyName}>MVDNSS</div>
					<div className={s.title}>
						<h1 className={s.text}>Profile</h1>
					</div>
				</header>
	)
}

export default Header