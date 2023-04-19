import HeaderBg from "deco-sites/davi-shama/islands/HeaderBg.tsx";

export interface Props {
    color?: string;
}
  
export default function ColorBar({color}: Props) {
    const colors1 = ["#2C94C3", "#FFD631", "#00974A", "#E2625B", "#4C2C3A", "#FFB5DA"]
    return (
        <div class="fixed top-0 w-full z-10">
            <HeaderBg colors={colors1} type={color ? 'single' : 'multi'} />
            { color && <div id="colorBar" class={`relative z-2 w-full h-2 transition duration-[1500ms] ${color? `bg-[${color}]` : 'multicolor'}`} /> }
        </div>
    )
}