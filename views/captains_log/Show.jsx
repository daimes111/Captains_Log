const React = require('react')

class Show extends React.Component {
    render() {
        const { title, entry, isShipBroken, _id } = this.props.log
        const capName = title[0].toUpperCase() + title.substring(1)
        return(
            <>
            <h1>Captain's Log</h1>
            <nav>
                <a href="/logs">Back to entries</a><br />
                <a href={`/logs/${_id}/edit`}>Edit this entry</a>
            </nav>
            <h2>{capName}</h2>
            <p>{entry}</p>
            <h5>{isShipBroken? 'This ship cannot sail as it is currently broken':'This ship is ready to sail'}</h5>
            </>
        )
    }
}

module.exports = Show