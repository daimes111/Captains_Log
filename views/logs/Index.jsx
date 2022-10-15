const React = require('react')
const Default = require('../layout/Default')

class Index extends React.Component {
    render() {
        const {logs} = this.props
        return(
            <Default title="Captains Log Entries">
            <ul>
                {logs.map((log) => {
                    const {title, entry, isShipBroken, _id} = log
                    return(
                        <li key={_id}>
                           <a href={`/logs/${_id}`}>{title}</a><br />
                           
                        <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                            <input type="submit" value={`Delete ${title}`} />
                        </form>
                        </li>
                       
                    )
                })}
            </ul>
            </Default>
        )
    }
}

module.exports = Index