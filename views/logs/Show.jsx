const React = require('react')
const Default = require('../layout/Default')


class Show extends React.Component {
    render() {
        const { title, entry, isShipBroken, _id } = this.props.log
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
            <Default title={`${capName} Show Page`} log={this.props.log}>
                
                <div className="show">
                <div className="lines"></div>
                <h2>{capName}</h2>
                <p>{entry}</p>
                <h4>{isShipBroken? 'This ship cannot sail as it is currently broken':'This ship is ready to sail'}</h4>
                </div>
            </Default>
        )
    }
}

module.exports = Show