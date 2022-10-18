const React = require('react')


class Default extends React.Component{
    render(){
        const {title, log} = this.props
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/logs">Check Current Captain's Logs</a>
                        <a href="/logs/new">Create a New Log</a>
                        { log? <a href={`/logs/${log._id}/edit`}> {log.title} Edit Page</a> : '' }
                        { log? <a href={`/logs/${log._id}`}> {log.title} Show Page</a> : '' }
                    </nav>
                    <h1>{title}</h1>
                    {/* <div class="lines"></div> */}
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports= Default