import React from 'react'
import { connect } from 'react-redux'


const Widget_text = (data) => {

    console.log('WIDGET FRERO: ', data.data.data[1].widgets[0])

    const dataWidgetText = data.data.data[1].widgets[0]

    return (
        <div className='container'>
            <div className="container clearfix">
                {console.log('ICI ET LA :', dataWidgetText.text)}
                {/* {console.log('WIDGET', this.props.state.data)} */}
                <>
                <div>{dataWidgetText.text}</div>
                {dataWidgetText.text}
                yeye
                </>
            </div>
        </div>

    )

}

// const mapStateToProps = state => {
//     return {
//         state
//     }
// }

export default (Widget_text)