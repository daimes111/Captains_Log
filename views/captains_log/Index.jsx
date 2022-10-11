const React = require('react')

class Index extends React.Component {
    render() {
        const {captains_log} = this.props
        return(
            <>
            <h1>Captains Log Entries</h1>
            <nav>
                <a href="/logs/new">Create New Log</a>
            </nav>
            <ul>
                {captains_log.map((log) => {
                    const {title, entry, isShipBroken} = log
                    return(
                        <li key={log._id}>
                           <a href={`/logs/${log._id}`}>{title}</a> 
                        </li>
                    )
                })}
            </ul>
            </>
        )
    }
}

module.exports = Index