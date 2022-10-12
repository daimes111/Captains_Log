const React = require('react')

class Edit extends React.Component {
    render(){
        const { title, entry, isShipBroken, _id} = this.props.log
        return(
            <>
            <h1>Edit this Entry</h1>
            <nav>
                <a href="/logs">Back to Captain's Entries</a>
            </nav>
            <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                Title: <input type="text" name="title" defaultValue={title} /><br />
                Entry: <input type="text" name="entry" defaultValue={entry} /><br />
                Is Ship Broken: <input type="checkbox" name="isShipBroken" defaultChecked={isShipBroken} /><br />
                <input type="submit" value="Edit Entry" />
            </form>
            </>
        )
    }
}

module.exports = Edit