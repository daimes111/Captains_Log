const React = require('react')
const Default = require('../layout/Default')

class Show extends React.Component {
    render() {
        const { title, entry, isShipBroken, _id } = this.props.log
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
            <Default title={`${capName} Show Page`} log={this.props.log}>
           
            <h2>{capName}</h2>
            <p>{entry}</p>
            <h5>{isShipBroken? 'This ship cannot sail as it is currently broken':'This ship is ready to sail'}</h5>
            </Default>
        )
    }
}

module.exports = Show