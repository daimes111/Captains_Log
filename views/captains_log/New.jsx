const React = require('react')

class New extends React.Component {
    render() {
        return (
            <>
            <h1>Create a New Entry Log</h1>
            <nav>
                <a href="/logs">Check Current Logs</a>
            </nav>
            <form method="POST" action="/logs">
                <input type="text" name="title" placeholder="Entry Title"/><br />
                <input type="textarea" name="entry" placeholder="Entry"/><br />
                Ship Broken?: <input type="checkbox" name="shipIsBroken" default={true} defaultChecked="true" /><br />
                <input type="submit" value="Submit Log"/>
            </form>
            </>
        )
    }
}

module.exports = New