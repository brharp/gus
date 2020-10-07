import React, { Component } from 'react';
import 'mediaelement/full';
import 'mediaelement/build/renderers/vimeo';

// Import stylesheet
import '../styles/mediaelementplayer.dist.css';


export default class MediaElement extends Component {

	state = {}

	render() {
		const props = this.props;
		return (
			<><video id={props.id} width={props.width} controls={props.controls} preload={props.preload}>
				<source src={props.src} type={props.type} />
			</video></>
		)
	}
	
	componentDidMount() {
		
		let loaded = false;
		if (!loaded) {
			const tag = document.createElement('script');
			tag.src = '//www.youtube.com/player_api';
			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			loaded = true;
		}

		const {MediaElementPlayer} = global;
		
		if (!MediaElementPlayer) {
			return;
		}

		const options = Object.assign({}, this.props.options, {
			// Read the Notes below for more explanation about how to set up the path for shims
			//pluginPath: './static/media/',
			success: (media, node, instance) => this.success(media, node, instance),
			error: (media, node) => this.error(media, node)
		});
		
		this.setState({player: new MediaElementPlayer(this.props.id)});
	}

	componentWillUnmount() {
		if (this.state.player) {
			this.state.player.remove();
			this.setState({player: null});
		}
	}

}