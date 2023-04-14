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
                    <div class="w-full h-2">
                        <svg width="100%" height="8" viewBox="0 0 1440 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="8" fill="url(#paint0_radial_423_2221)"/>
                        <defs>
                        <radialGradient id="paint0_radial_423_2221" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.09207e-06 4) scale(1440 652.143)">
                        <stop stop-color="#FC7074"/>
                        <stop offset="0.390625" stop-color="#EA95D6"/>
                        <stop offset="0.661458" stop-color="#54C3FF"/>
                        <stop offset="0.96875" stop-color="#4CB943"/>
                        </radialGradient>
                        </defs>
                        </svg>
                    </div>
                )
            }
        </div>
    )
}