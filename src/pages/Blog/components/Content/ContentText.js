import React from 'react';
import Spin from '../../../../components/spin'

class ContentText extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.article.content);

		if (this.props.article.content) {
			const txt = this.props.article.content;
			return <div dangerouslySetInnerHTML={{ __html: txt }} />;
		} else {
            console.log('======================')

            return   (<Spin/>)
		}
	}
}

export default ContentText;
