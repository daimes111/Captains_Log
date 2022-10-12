const React = require('react')

class Index extends React.Component {
    render() {
        const {logs} = this.props
        return(
            <>
            <h1>Captains Log Entries</h1>
            <nav>
                <a href="/logs/new">Create New Log</a>
            </nav>
            <ul>
                {logs.map((log) => {
                    const {title, entry, isShipBroken, _id} = log
                    return(
                        <li key={_id}>
                           <a href={`/logs/${_id}`}>{title}</a> 
                        <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                            <input type="submit" value={`Delete ${title}`} />
                        </form>
                        </li>
                       
                    )
                })}
            </ul>
            </>
        )
    }
}

module.exports = Index