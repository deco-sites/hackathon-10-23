export interface RulesProps {
  title: string;

  points?: PointsProps[];
}

export interface PointsProps {
  title?: string;

  /** @format html */
  description?: string;
}

export default function Rules({ title, points }: RulesProps) {
  return (
    <div class="w-full bg-[#0A2121]">
      <div class="flex flex-col gap-6">
        <div class="flex justify-start">
          <p class="text-[#02F67C] font-semibold text-[40px]">{title}</p>
        </div>
        <div class="flex flex-col gap-6">
          {points?.map(({ title, description }: PointsProps, index: number) => (
            <div
              key={index}
              class="text-[#FFFFFF] flex flex-col md:flex-row gap-4 md:gap-6 justify-start p-4 md:p-5 lg:p-6"
            >
              <p>{title}</p>
              {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
