import React from "react";
import loader from '../assets/preloader/tail-spin.svg'
import s from './Preloader.module.css'

const Preloader = () => {
return (
	<div className={s.preloader}><img src={loader} alt="" /></div>
)
}

export default Preloader