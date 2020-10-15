import React, { Component } from 'react';
import 'mediaelement';

export default class Video extends Component {
    state = {}

	success(media, node, instance) {
        // Your action when media was successfully loaded
        console.log("SUCCESS");
        console.log(media);
        console.log(node);
        console.log(instance);

        // add HTML5 events to the YouTube API media object
        media.addEventListener('play', function() {
            console.log('yeah, it is playing!');
        }, false);

        media.addEventListener('timeupdate', function() {
        // access HTML5-like properties
            console.log('current: ' + media.currentTime);
        }, false);

	}

	error(media) {
		// Your action when media had an error loading
	}

	render() {
		const
			props = this.props,
			sources = JSON.parse(props.sources),
			tracks = JSON.parse(props.tracks),
			sourceTags = [],
			tracksTags = []
		;

		for (let i = 0, total = sources.length; i < total; i++) {
			const source = sources[i];
			sourceTags.push(`<source src="${source.src}" type="${source.type}">`);
		}

		for (let i = 0, total = tracks.length; i < total; i++) {
			const track = tracks[i];
			tracksTags.push(`<track src="${track.src}" kind="${track.kind}" srclang="${track.lang}"${(track.label ? ` label=${track.label}` : '')}>`);
		}

		const
			mediaBody = `${sourceTags.join("\n")}
				${tracksTags.join("\n")}`,
			mediaHtml = props.mediaType === 'video' ?
				`<video id="${props.id}" width="${props.width}" height="${props.height}"${(props.poster ? ` poster=${props.poster}` : '')}
					${(props.controls ? ' controls' : '')}${(props.preload ? ` preload="${props.preload}"` : '')}>
					${mediaBody}
				</video>` :
				`<audio id="${props.id}" width="${props.width}" controls>
					${mediaBody}
				</audio>`
        ;

        console.log(mediaHtml);
		return (<div dangerouslySetInnerHTML={{__html: mediaHtml}}></div>);

	}

	componentDidMount() {
        // let loaded = false;
        // if (!loaded) {
        //     const tag = document.createElement('script');
        //     tag.src = '//www.youtube.com/player_api';
        //     const firstScriptTag = document.getElementsByTagName('script')[0];
        //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        //     loaded = true;
        // }

		const {MediaElementPlayer} = global;
		
		if (!MediaElementPlayer) {
			return;
		}

		const options = Object.assign({}, JSON.parse(this.props.options), {
			pluginPath: './static/media/',
			success: (media, node, instance) => this.success(media, node, instance),
			error: (media, node) => this.error(media, node)
        });
		
		this.setState({player: new MediaElementPlayer(this.props.id, options)});
	}

	componentWillUnmount() {
		if (this.state.player) {
			this.state.player.remove();
			this.setState({player: null});
		}
	}
}