export interface Props {
  pages: string[];
}

export default function CurrentPage({
    pages,
}: Props) {
    let next = pages[0]
    pages?.forEach((page, i) => {
        if (page === window?.location?.pathname && i < pages.length) next = pages[i + 1]
    })
  return (
    <div class="mt-28">
        <div class="text-[64px] w-full overflow-hidden">
            <div class="w-[3000px] ml-[-50%]">go to next project — go to next project — go to next project — go to next project</div>
        </div>
        <div class="mt-8 flex justify-center">
            {
                <a
                    href={next}
                    class="inline-block bg-black text-white px-7 py-4"
                >
                    Next Project
                </a>
            }
        </div>
    </div>
  );
}