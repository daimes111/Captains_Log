const React = require('react')
const Default = require('../layout/Default')


class New extends React.Component {
    render() {
        return (
            <Default title="Create New Log">
            
            <form method="POST" action="/logs">
                <input type="text" name="title" placeholder="Entry Title"/><br />
                <input type="textarea" name="entry" placeholder="Entry"/><br />
                Ship Broken?: <input type="checkbox" name="isShipBroken" value="true" defaultChecked={true} /><br /> 
                {/* default={true}   */}

                <input type="submit" value="Submit Log"/>
            </form>
            </Default>
        )
    }
}

module.exports = New