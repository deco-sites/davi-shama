export interface Props {
    title: string;
    /** @format textarea */
    text: string;
    dividerColor: string;
}

export default function ProjectHighlight({ title, text, dividerColor }: Props) {
    return (
        <div class="mx-auto my-[200px] text-center max-w-[914px]">
            <div class="text-subdued text-xl leading-[1.5] mb-7">{title}</div>
            <div class="font-medium text-[40px] leading-[1.4] tracking-[-0.5%] mb-20">{text}</div>
            <div class={`bg-[${dividerColor}] h-[6px] mx-auto w-1/2 md:w-[682px]`}></div>
        </div>
    )
}