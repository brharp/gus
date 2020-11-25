import PropTypes from 'prop-types';
import React from 'react';
import Grid from './grid';
import GridCell from './gridCell';
import { contentExists } from '../utils/ug-utils';

function LinksItems (props) {

	if(props.displayType==='grid') {
		
		if(contentExists(props.pageData) && props.pageData.length !== 0){
			return (
				<Grid key={props.pageData.drupal_id}>
					{props.pageData.map (paragraph  => {
						if(contentExists(paragraph.relationships)){
	console.log(paragraph.field_link_url.uri, "uri")
						const image = (contentExists(paragraph.relationships.field_link_image)) ? paragraph.relationships.field_link_image.relationships.field_media_image : null;
						const imageFile = (contentExists(image) && contentExists(image.localFile.childImageSharp)) ? <img src={image.localFile.childImageSharp.resize.src} alt="" /> : null;
						return <GridCell key={paragraph.drupal_id} 
									url={paragraph.field_link_url.uri} 
									image={imageFile} 
									heading={paragraph.field_link_url.title}
									headingLevel="h3" />
						}
						return null;
					})}
				</Grid>
			)
			
		}
}
		
		return null;

}

LinksItems.propTypes = {
    pageData: PropTypes.array,
	displayType: PropTypes.string,

}
  
LinksItems.defaultProps = {
    pageData: ``,
	displayType: `list`,

  }

export default LinksItems
