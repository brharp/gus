import React from 'react';
import PropTypes from 'prop-types';
import { setHeadingLevel } from '../utils/ug-utils';
//import 'mediaelement';
//import '../styles/mediaelementplayer.dist.css';
//import 'mediaelement/build/renderers/vimeo';
//import 'mediaelement/build/renderers/youtube';
import MediaElement from './MediaElement';

function Video (props) {
	let Heading = setHeadingLevel(props.headingLevel);
	let i = 0;
	return (
		<React.Fragment>
		<div className="container page-container video">
			<section className="row row-with-vspace site-content">
			<div className="col-md-12 content-area"><Heading>Program Videos</Heading></div>

			{props.videoData.map (video => {						
				let videoURL = video.node.field_video_src === "youtube" ? "https://www.youtube.com/watch?v=" + video.node.field_video_id : "https://player.vimeo.com/video/" + video.node.field_video_id;
				let videoType = "video/" + video.node.field_video_src;
				i++;
				return <React.Fragment key={video.node.drupal_id}>
					<div className="col-sm-6 content-area">
						<div className="embed-responsive embed-responsive-16by9">								
						{/* <video className="embed-responsive-item" width="100%" id="player1" preload="none" controls="controls">
								<source type={videoType} src={videoURL} />
						</video> */	}
						<MediaElement id={"player" + i} preload="none" controls width="100%" src={videoURL} type={videoType}/>
						</div>
					</div>
				</React.Fragment>
			})}
			</section>
		</div>
		</React.Fragment>
	)
}

Video.propTypes = {
	videoData: PropTypes.array,
}
Video.defaultProps = {
	videoData: null,
}

export default Video