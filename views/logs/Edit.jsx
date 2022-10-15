const React = require('react')
const Default = require('../layout/Default')   

class Edit extends React.Component {
    render(){
        const { title, entry, isShipBroken, _id} = this.props.log
        return(
            <Default title={`Edit ${title}`} log={this.props.log}>
                
                <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                    Title: <input type="text" name="title" defaultValue={title} /><br />
                    Entry: <input type="text" name="entry" defaultValue={entry} /><br />
                    Is Ship Broken: <input type="checkbox" name="isShipBroken" defaultChecked={isShipBroken} /><br />
                    <input type="submit" value="Edit Entry" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit