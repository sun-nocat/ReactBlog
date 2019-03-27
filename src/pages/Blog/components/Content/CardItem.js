import React from 'react'
import { Card, Tag, Statistic, Icon, Row, Col } from 'antd';




// class CardItem extends React.Component {
//     constructor(props){
//         super(props)
//         this.clicks = this.clicks.bind(this)
//     }



//     clicks(e){
//         this.props.clickCard(this.props.id)
        
//     }

//     render() {
//         return (
//             <div style={{ paddingLeft: '10px', paddingRight: '10px',paddingTop:'10px' }} >
//                 <Card
//                     style={{ width: '100%', height: '50px', padding:'16px',background:'#f5f6f7'}}
//                     bordered={false}
//                     onClick={this.clicks}
//                     className='ant-card-body'
//                 >
//                 <div style={{marginTop:'-25px',marginLeft:'-20px',color:'#359aff'}}>
//                     {this.props.data.title}
//                 </div>
//                 </Card>
//             </div>
//         )
//     }
// }


function CardItem(props){
    return(
        <div style={{ paddingLeft: '10px', paddingRight: '10px',paddingTop:'10px' }} >
            <Card
                style={{ width: '100%', height: '50px', padding:'16px',background:'#f5f6f7'}}
                bordered={false}
                onClick={()=>{props.clickCard(props.data.id)}}
                className='ant-card-body'
            >
            <div style={{marginTop:'-25px',marginLeft:'-20px',color:'#359aff'}}>
                {props.data.title}
            </div>
            </Card>
        </div>
    )
}

export default CardItem;