import Animate from "deco-sites/start/islands/Animate.tsx";

export interface Props {
  hi: string;
  intro: string;
  description: string;
}

export default function Hero({
  hi,
  intro,
  description,
}: Props) {
  return (
    <>
      <Animate id="hero" remove={["opacity-0", "translate-y-5"]} />
      <div id="hero" class="container mx-auto mt-[96px] flex gap-[124px] pl-5 pr-12 lg:(container px-0) duration-[1600ms] delay-200 opacity-0 translate-y-5">
        <div class="flex gap-5 items-stretch w-[640px] text-3xl leading-[1.25] md:leading-[1.25] md:text-5xl tracking-[-0.7%]">
          <div class="hidden md:block flex-none w-[6px] bg-black rounded-full"></div>
          <div class="flex-auto">
            <div>
              <span class="font-medium">{hi}</span>
            </div>
            <div>{intro}</div>
          </div>
        </div>
        <div class="hidden w-[352px] leading-[1.7] text-subdued lg:block">
          {description}
        </div>
      </div>
    </>
  );
}
