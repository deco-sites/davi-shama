import { Component } from "preact";

export type Props = {
    id: string,
    add?: array,
    remove?: array,
}

class Animate extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    this.props.remove.forEach(r => {
      document?.getElementById(this.props.id).classList.remove(r)
    });
    if (this.props.add) {
      this.props.add.forEach(a => {
        document?.getElementById(this.props.id).classList.add(a)
      });
    }
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Animate;