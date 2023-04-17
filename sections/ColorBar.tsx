export interface Props {
    color?: string;
}
  
export default function ColorBar({color}: Props) {
    return (
        <div class="fixed top-0 w-full">
            <div class={`w-full h-2 ${color? `bg-[${color}]` : 'multicolor'}`} />
        </div>
    )
}