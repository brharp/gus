import React from 'react';
import PropTypes from 'prop-types';
import { contentIsNullOrEmpty, setHeadingLevel } from '../utils/ug-utils';

function Video (props) {
	let Heading = setHeadingLevel(props.headingLevel);
	return (
		<React.Fragment>
			{!contentIsNullOrEmpty(props.videoData) && props.videoData.length !== 0 && <>
				<div className="container page-container video">
					<section className="row row-with-vspace site-content">
					<div className="col-md-12 content-area">
					<Heading>Program Videos</Heading>
					<div className="d-flex flex-wrap flex-fill justify-content-center">
					{props.videoData.map (video => {
						let videoURL = "https://www.youtube.com/embed/" + video.node.field_video_id;
						return <React.Fragment key={video.drupal_id}>
							<div className="embed-responsive embed-responsive-16by9">
							<iframe
							  src={videoURL}
							  title={video.node.title}
							  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							  frameBorder="0"
							  webkitallowfullscreen="true"
							  mozallowfullscreen="true"
							  allowFullScreen
							/>
							</div>
						</React.Fragment>
					})}
					</div>
					</div>
					</section>
				</div>
			</>}
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