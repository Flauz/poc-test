import React from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser';


const Widget_text = (data) => {


    const dataWidgetText = data.data.data[1].widgets[0]

    console.log('WIDGET TEXT :', dataWidgetText)

    const dataWidget = dataWidgetText.text

    const dataWidgetStyle = dataWidgetText.widget_style

    console.log('WIDGET STYLE :', dataWidgetStyle)

    return (
        <div className='container'>
            <div className="container clearfix">
                {console.log('ICI ET LA :', dataWidgetText.text)}
                {/* {console.log('WIDGET', this.props.state.data)} */}
                <>
                <div>{dataWidgetText.text}</div>
                <div className={dataWidgetStyle}>{ReactHtmlParser(dataWidget)}</div>
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