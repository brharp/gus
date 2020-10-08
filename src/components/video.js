import React from 'react';
import PropTypes from 'prop-types';
import { setHeadingLevel } from '../utils/ug-utils';

function Video (props) {
	
	let Heading = setHeadingLevel(props.headingLevel);
	let vimeoURL = "https://player.vimeo.com/video/";
	let youtubeURL = "https://www.youtube.com/embed/";
	
	return (
		<React.Fragment>
		<div className="container page-container video">
			<section className="row row-with-vspace site-content">
				<div className="col-md-12 content-area"><Heading>Program Videos</Heading></div>
				
				{props.videoData.map (video => {
					let videoType = video.node.field_video_src;
					let transcriptFile = (video.node.relationships.field_video_transcript_file !== null ? video.node.relationships.field_video_transcript_file.localFile.publicURL : null);
					let transcriptURL = video.node.field_video_transcript_url;
					let videoURL = (videoType === "youtube" ? youtubeURL + video.node.field_video_id : vimeoURL + video.node.field_video_id);
					let videoTranscript = ((transcriptFile !== null) ? transcriptFile : (transcriptURL !== null) ? transcriptURL : null);
					let transcriptLink = (videoTranscript !== null ? <p><a href={videoTranscript}>Transcript</a></p> : null);
					
					return <React.Fragment key={video.drupal_id}>
					<div className="col-sm-6 content-area">
						<div className="embed-responsive embed-responsive-16by9">
						<iframe
						  src={videoURL}
						  title={video.node.title}
						  width="100%"
						  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						  allowFullScreen
						/>						
						</div>
						{transcriptLink}
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