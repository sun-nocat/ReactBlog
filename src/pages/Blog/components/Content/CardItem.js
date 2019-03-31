import React from 'react'
import { Card, Tag, Statistic, Icon, Row, Col } from 'antd';
import { relative } from 'path';




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


function CardItem(props) {
    let key = 10;

    return (
        
        <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px' }} >
            <Card
                style={{ width: '100%', height: '50px', padding: '16px', background: '#f5f6f7' }}
                bordered={false}
                onClick={() => { props.clickCard(props.data) }}
                className='ant-card-body'
            >
                <div style={{ marginTop: '-25px', marginLeft: '-20px', color: '#359aff' }}>

                    <div >
                        {((props.data.title.split('')).map((item, id) => {

                            console.log(item)
                            if (id < key) {
                                console.log(item.match(/[a-z]/))
                                if(item.match(/[a-z]/)){
                                    key=key+1
                                }
                                return item }
                            else if (id == key + 1) { return "..." }
                        })).join('')
                        }

                    </div>
                    <div style={{ position: 'relative', left: '80%', top: '-20px',width:'0px' }}><Tag color="blue"><Icon type="contacts" /> {props.data.time.split(" ")[0]}</Tag></div>

                </div>
            </Card>
        </div>
    )
}

export default CardItem;