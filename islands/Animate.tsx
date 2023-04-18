import { Component } from "preact";

export type Props = {
    id: array,
    add?: array,
    remove?: array,
    event?: 'pageLoad' | 'elementVisible'
}

class Animate extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    if (this.props.event !== 'elementVisible') {
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
    } else {
      let isVisible = false;
      const element = document?.getElementById(this.props.id[0]);
      const options = {
        root: document,
        rootMargin: '0px',
        threshold: 0.6
      };
      const observer = new IntersectionObserver((entries, options) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && !isVisible) {
            isVisible = !isVisible;
            this.props.remove.forEach(r => {
              element.classList.remove(r)
              console.log("visível", element);
            });
            this.props.add.forEach(a => {
              element.classList.add(a)
            });
          }
        });
      }, options);
      observer.observe(element);
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