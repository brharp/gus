import Img from 'gatsby-image';
import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { contentIsNullOrEmpty, setHeadingLevel, getNextHeadingLevel } from '../utils/ug-utils.js';
import '../styles/news.css';

function NewsGrid (props) {
    let Heading = setHeadingLevel(props.headingLevel);
    let NextHeading = getNextHeadingLevel(props.headingLevel);

    getNextHeadingLevel(props.headingLevel);

	if (!contentIsNullOrEmpty(props.newsData)) {
		const newsItems  = () => props.newsData.map((newsItem) => {
			let title = newsItem.node.title;
            let image = newsItem.node.relationships.field_image;
            let categories = Array.prototype.map.call(newsItem.node.relationships.field_news_category, s => s.name).join(', ');

			return <div key={newsItem.node.drupal_id} className={props.columnClass + " content-area news-item"}>
                <Link to={newsItem.node.fields.alias.value}>
                    {/* Use null alt atribute for linked image, title combo */}
                    {image && <div className="img-container"><Img fluid={image.localFile.childImageSharp.fluid} alt="" /></div>}
                    <NextHeading>{title}</NextHeading>
                    {categories && <p className="category">{categories}</p>}
                </Link>
			</div>
		})

		return (<div className="full-width-container bg-light news">
                    <div className="container page-container">
                        <section className="row row-with-vspace site-content">
                            <div className="col-md-12 content-area">
                                <Heading>{props.heading}</Heading>
                            </div>
                            {newsItems()}
                        </section>
                    </div>
                </div>
                )

	} else {
		return null
	}
}

NewsGrid.propTypes = {
    newsData: PropTypes.array,
    columnClass: PropTypes.string,
}

NewsGrid.defaultProps = {
    newsData: null,
    columnClass: 'col-md-3 col-sm-6',
}

export default NewsGrid