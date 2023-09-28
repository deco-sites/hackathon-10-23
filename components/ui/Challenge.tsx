export interface ChallengeProps {
  title: string;

  /** @format html */
  description?: string;
}

export default function Challenge(
  { title, description }: ChallengeProps,
) {
  return (
    <div class="w-full bg-[#0A2121]">
      <div class="lg:container flex flex-col md:flex-row">
        <div class="font-semibold text-[#FFFFFF] text-[40px] md:text-[60px] lg:text-[80px]">
          {title}
        </div>
        <div class="flex flex-col items-center bg-[#EFF0F0] text-[#0D1717] p-4 gap-4 md:gap-6">
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
