class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cliked: false };
  }
  render() {
    if (this.state.cliked) {
      return 'You cliked this.';
    }
    return <button onClick={ () => this.setState({ cliked: true }) }>{this.props.children}</button>;
  }
}

