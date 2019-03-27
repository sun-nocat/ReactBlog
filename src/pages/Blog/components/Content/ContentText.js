import React from  'react'



class ContentText extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.article.content)
        const txt = this.props.article.content
        return(

            <div dangerouslySetInnerHTML={{__html:txt}}></div>
        )
    }
}


export default ContentText;