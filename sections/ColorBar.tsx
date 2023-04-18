import HeaderBg from "deco-sites/davi-shama/islands/HeaderBg.tsx";

export interface Props {
    color?: string;
}
  
export default function ColorBar({color}: Props) {
    const colors1 = ["#2C94C3", "#FFD631", "#00974A", "#E2625B", "#4C2C3A", "#FFB5DA"]
    return (
        <div class="fixed top-0 w-full z-10">
            <div class="hidden">
                <HeaderBg colors={colors1} />
                { colors1.map(c => {
                    return <div class={`bg-[${c}]`}></div>
                }) }
            </div>
            <div id="colorBar" class={`w-full h-2 duration-[50ms] ${color? `bg-[${color}]` : 'multicolor'}`} />
        </div>
    )
}