export interface Props {
    color?: string;
}
  
export default function ColorBar({color}: Props) {
    return (
        <div class="fixed top-0 w-full">
            {
                color ? (
                    <div class={`w-full h-2 bg-[${color}]`} />
                ) : (
                    <div class={`w-full h-2 multicolor`} />
                )
            }
        </div>
    )
}