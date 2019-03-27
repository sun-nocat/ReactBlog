import React from 'react';
import {Spin,Alert} from 'antd'
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

            return   (<Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>)
		}
	}
}

export default ContentText;
