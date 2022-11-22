import React from 'react'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						Job <span>Tracking</span> App
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
							quod aliquid inventore repellendus id amet. A ipsam porro quod
							cupiditate?
						</p>
						<Link to='/register' className='btn btn-hero'>
							login/register
						</Link>
					</h1>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	)
}

export default Landing
