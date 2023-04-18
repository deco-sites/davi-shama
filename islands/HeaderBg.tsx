import { Component } from "preact";

export type Props = {
    colors: Array,
}

class HeaderBg extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
    this.state
  }

  componentDidMount() {
    setTimeout(() => {
        const body = document.body, html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

        document.addEventListener("scroll", () => {
            const s = html.scrollTop
            let currentColor = (s * 360 / height) + 199
            this.setState({bgColor:  `hsla(${currentColor}, 63%, 47%, 1);`})
        });
    }, 2600);
}

  componentDidUpdate() {
  }

  render() {
    return (
        <style
            dangerouslySetInnerHTML={{
            __html: `
                #colorBar {
                    background-color: ${this.state.bgColor};
                }
        `,
            }}
        >
        </style>
   );
  }
}

export default HeaderBg;