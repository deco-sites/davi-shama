import { Component } from "preact";

export type Props = {
    colors: Array,
}

class HeaderBg extends Component<Props> {
  constructor() {
    super();
    this.props = super.props;
  }

  componentDidMount() {
    setTimeout(() => {
        const colorBar = document.getElementById('colorBar')
        const body = document.body, html = document.documentElement;
        const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        const sec = height / 6
        const colors = this.props.colors

        document.addEventListener("scroll", () => {
            const s = html.scrollTop

            if (0 <= s && s < sec) {
                colorBar.classList.remove(`bg-[${colors[1]}]`)
                colorBar.classList.add(`bg-[${colors[0]}]`)
            } else if (sec < s && s < sec * 2) {
                colorBar.classList.remove(`bg-[${colors[0]}]`, `bg-[${colors[2]}]`)
                colorBar.classList.add(`bg-[${colors[1]}]`)
            } else if (sec * 2 < s && s < sec * 3) {
                colorBar.classList.remove(`bg-[${colors[1]}]`, `bg-[${colors[3]}]`)
                colorBar.classList.add(`bg-[${colors[2]}]`)
            } else if (sec * 3 < s && s < sec * 4) {
                colorBar.classList.remove(`bg-[${colors[2]}]`, `bg-[${colors[4]}]`)
                colorBar.classList.add(`bg-[${colors[3]}]`)
            } else if (sec * 4 < s && s < sec * 5) {
                colorBar.classList.remove(`bg-[${colors[3]}]`, `bg-[${colors[5]}]`)
                colorBar.classList.add(`bg-[${colors[4]}]`)
            } else {
                colorBar.classList.remove(`bg-[${colors[4]}]`)
                colorBar.classList.add(`bg-[${colors[5]}]`)
            }
        });
    }, 2600);
}

  componentDidUpdate() {
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default HeaderBg;