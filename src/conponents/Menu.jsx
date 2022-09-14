import '../block-style/menu.css'

function Menu() {
	return (
		<aside className="menu">
			<ul className="menu-list">
				<li className="menu-item"><a className='menu__link' href="">Profile</a></li>
				<li className="menu-item"><a className='menu__link active' href="">Message</a></li>
				<li className="menu-item"><a className='menu__link' href="">Friends</a></li>
				<li className="menu-item"><a className='menu__link' href="">Music</a></li>
				<li className="menu-item"><a className='menu__link' href="">Settings</a></li>
			</ul>
		</aside>
	)
}

export default Menu