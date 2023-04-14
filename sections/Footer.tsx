import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  textLeft?: string;
  textRight?: string;
}

export default function Footer({
  textLeft,
  textRight,
}: Props) {
  return (
    <div class="flex items-center justify-between px-8 mt-6 mb-7 text-sm">
      <div class="block">{textLeft}</div>
      <div class="block">{textRight}</div>
    </div>
  );
}
