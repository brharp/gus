import React from 'react';
import PropTypes from 'prop-types';
import { contentIsNullOrEmpty } from '../utils/ug-utils';

function Video (props) {
	return (
		<React.Fragment>
			{!contentIsNullOrEmpty(props.videoData) && props.videoData.length !== 0 && <>
				{props.videoData.map (video => {
					let videoURL = "https://www.youtube.com/embed/" + video.node.field_video_id;
					return <React.Fragment key={video.drupal_id}>
						<div className="video">
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