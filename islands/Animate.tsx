import { Component } from "preact";

export type Props = {
    id: string,
    add: string,
    remove: string,
}

class Animate extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    document?.getElementById(this.props.id).classList.add(this.props.add)
    document?.getElementById(this.props.id).classList.remove(this.props.remove)
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Animate;