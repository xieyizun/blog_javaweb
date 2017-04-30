import React, { Component } from 'react'
import './index.scss'

export default class Home extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		const { users, fetchUserList } = this.props
		return (
			<div className="home-container">
				<div className="home-container-inner">
					<div className="header">
						<h1>谢议尊的个人网站</h1>
						<p>Xie Yizun’s Personal Website</p>
					</div>
					<div className="content">
						<div className="content-inner">
							<p>
								<a href="#" style={{ 'margin-right': '5px' }}>Blog</a>
								 / 
								<a href="#" style={{ 'margin-left': '5px' }}>About</a>
							</p>
						</div>
					</div>
					<div className="footer">
						<p>
							<a href="#">Contact</a> | xieyizun.com
						</p>
					</div>
				</div>
			</div>
		)
	}
}