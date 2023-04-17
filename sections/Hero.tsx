import Animate from "deco-sites/start/islands/Animate.tsx";

export interface Props {
  hi: string;
  intro: string;
  animatedIntro?: {
    line1: string;
    line2: string;
    line3: string;
  }
  description: string;
}

export default function Hero({
  hi,
  intro,
  animatedIntro,
  description,
}: Props) {
  return (
    <>
      <Animate id={["heroHi", "heroLine1", "heroLine2", "heroLine3"]} remove={["opacity-0", "translate-y-5"]} />
      <div id="hero" class="container mx-auto mt-[96px] flex gap-[124px] pl-5 pr-12 lg:(container px-0)">
        <div class="flex gap-5 items-stretch w-[640px] text-3xl leading-[1.25] md:leading-[1.25] md:text-5xl tracking-[-0.7%]">
          <div class="hidden md:block flex-none w-[6px] bg-black rounded-full"></div>
          <div class="flex-auto">
            <div class="md:hidden">
              <span class="font-medium">{hi}</span>
            </div>
            <div class="md:hidden">{intro}</div>
            <div class="hidden md:block">
              <div id="heroHi" class="font-medium duration-[1600ms] delay-100 opacity-0 translate-y-5">{hi}</div>
              <div id="heroLine1" class="duration-[1600ms] delay-200 opacity-0 translate-y-5">{animatedIntro?.line1}</div>
              <div id="heroLine2" class="duration-[1600ms] delay-300 opacity-0 translate-y-5">{animatedIntro?.line2}</div>
              <div id="heroLine3" class="duration-[1600ms] delay-[400ms] opacity-0 translate-y-5">{animatedIntro?.line3}</div>
            </div>
          </div>
        </div>
        <div class="hidden w-[352px] leading-[1.7] text-subdued lg:block">
          {description}
        </div>
      </div>
    </>
  );
}
