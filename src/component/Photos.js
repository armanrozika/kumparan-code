import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions/photoActions'
class Photos extends Component {
	state = {
		show: 'photo-hide',
		hide: 'photo-hide',
		img: '',
		imgtitle: ''
	}
	componentDidMount(){
		this.props.fetchPhotos(this.props.match.params.id)
	}
	hideModal = ()=>{
		this.setState({
			show: 'photo-hide'
		})
	}
	showModal = (id,  title)=>{
		this.setState({
			show: 'photo-big',
			img: id,
			imgtitle: title
		})
	}
	render() {
		console.log(this.props.photos)
		const photoList = this.props.photos.map(photo=>(
			<div onClick={()=>this.showModal(photo.url, photo.title)} className="photo-item" key={photo.id}>
				<img src={photo.thumbnailUrl} alt=""/>
			</div>
		))
		return (
			<div className="photo-wrap">
				{photoList}
				<div className={this.state.show}>
					<div className="photo-big-wrap">
						<img src={this.state.img} alt=""/>
						<div className="photo_title">
							{this.state.imgtitle}
						</div>
						<div onClick={this.hideModal} className="close">X</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state)=> ({
	photos: state.photos.photos
})
export default connect(mapStateToProps, {fetchPhotos}) (Photos);
