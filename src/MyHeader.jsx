class MyHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>{this.props.children}{React.Children.count(this.props.children)} label(s)</div>
    }    
}