import { Component } from "preact";

export type Props = {
    id: array,
    add?: array,
    remove?: array,
}

class Animate extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    this.props.id.forEach(e => {
      this.props.remove.forEach(r => {
        document?.getElementById(e).classList.remove(r)
      });
      if (this.props.add) {
        this.props.add.forEach(a => {
          document?.getElementById(e).classList.add(a)
        });
      }
    });
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