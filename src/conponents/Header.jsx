import '../block-style/header.css';

function Header() {
	return (
				<header className="header">
				<div className="header-wrapper">
					<div className="header__logo">
						<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" />
						<div className="header__company">MVDNSS</div>
					</div>
					<div className="header__title">Profile</div>
				</div>
				</header>
	)
}

export default Header