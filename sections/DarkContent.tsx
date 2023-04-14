import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
    title: string;
    /**
     * @format textarea
     */
    description: string;
    steps: Step[];
}

export interface Step {
    image: LiveImage;
    title: string;
    /**
     * @format textarea
     */
    description: string;
}

export default function DarkContent({title, description, steps}: Props) {
    return (
        <div class="bg-[rgba(0,0,0,.9)] py-40 text-white">
            <div class="container mx-auto">
                <div class="ml-[248px] mb-[124px]">
                    <h2 class="text-[40px] tracking-[-0.005em]">{title}</h2>
                    <div class="text-xl text-[rgba(255,255,255,.5)] tracking-[-0.005em] leading-[1.4] w-[724px]">{description}</div>
                </div>
                <div class="flex flex-col gap-[104px]">
                    {steps.map((step) => {
                        return (
                            <div class="flex gap-[144px] items-center">
                                <div class="flex-none">
                                    <Picture>
                                        <Source
                                            media="(min-width: 768px)"
                                            src={step.image}
                                        />
                                        <img
                                            src={step.image}
                                            alt={step.alt}
                                            decoding="async"
                                            loading="lazy"
                                            srcset={`${step.image} 2x`}
                                        />
                                    </Picture>
                                </div>
                                <div class="flex-none flex flex-col gap-5 w-[476px]">
                                    <h3 class="text-2xl text-white">{step.title}</h3>
                                    <div class="text-xl leading-[1.7] text-[rgba(255,255,255,.6)]">
                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}