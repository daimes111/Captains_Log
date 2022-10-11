const React = require('react')

class New extends React.Component {
    render() {
        return (
            <>
            <h1>Create a New Entry Log</h1>
            <form method="POST" action="/logs">
                <input type="text" name="title" placeholder="Entry Title"/><br />
                <input type="textarea" name="entry" placeholder="Entry"/><br />
                Ship Broken?: <input type="checkbox" name="shipIsBroken" value="true"  /><br />
                <input type="submit" value="Submit Log"/>
            </form>
            </>
        )
    }
}

module.exports = New