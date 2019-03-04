import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {fetchAlbums} from '../actions/albumsAction'
class Albums extends Component {
	componentDidMount(){
		this.props.fetchAlbums(this.props.match.params.id)
	}
	render() {
		//console.log(this.props.albums)
		const albumList = this.props.albums.map(album=>(
			<div className="albums" key={album.id}>
				<Link to={'/photos/' + album.id}>{album.title}</Link>
			</div>
		))
		return (
			<div>
				<h2>Album List</h2>
				{albumList}
			</div>
		);
	}
}
const mapStateToProps = (state)=>({
	albums: state.albums.albums
})
export default connect(mapStateToProps, {fetchAlbums}) (Albums);