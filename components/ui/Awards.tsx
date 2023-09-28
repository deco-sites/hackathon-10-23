import Icon, { AvailableIcons } from "./Icon.tsx";

export interface AwardsProps {
  titleSection?: string;
  elimination: {
    title?: string;
    cards?: EliminatoriesAwardsProps[];
  };
  finalist: {
    title?: string;
    cards?: FinalistAwardsProps[];
  };
}

export interface EliminatoriesAwardsProps {
  iconLabel?: AvailableIcons;
  title?: string;

  /** @format html */
  description?: string;
}

export interface FinalistAwardsProps {
  iconLabel?: AvailableIcons;
  title?: string;
  price?: string;
  description?: string;
}

export default function Awards(
  { titleSection, elimination, finalist }: AwardsProps,
) {
  return (
    <div class="bg-[#0A2121] w-full">
      <div class="flex flex-col items-center gap-6">
        <div class="flex justify-start">
          <p class="font-semibold text-[#02F67C] text-[40px]">
            {titleSection}
          </p>
        </div>
        <div class="flex flex-col justify-start w-full gap-4">
          {elimination?.title && (
            <p class="text-[#FFFFFF] font-medium text-[32px]">
              {elimination?.title}
            </p>
          )}
          <div class="flex">
            {elimination?.cards?.map((
              { iconLabel, title, description }: EliminatoriesAwardsProps,
              index: number,
            ) => (
              <div
                key={index}
                class="flex flex-col justify-start items-center bg-[#0C2929] p-4 gap-3 md:gap-4"
              >
                {iconLabel && <Icon id={iconLabel} />}
                {title && (
                  <p class="text-[#FFFFFF] font-semibold md:text-[32px]">
                    {title}
                  </p>
                )}
                {description && (
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div class="flex flex-col justify-start w-full gap-4">
          {finalist?.title && (
            <p class="text-[#FFFFFF] font-medium text-[32px]">
              {finalist?.title}
            </p>
          )}
          <div class="flex">
            {finalist?.cards?.map((
              { iconLabel, title, description, price }: FinalistAwardsProps,
              index: number,
            ) => (
              <div
                key={index}
                class="flex flex-col justify-center items-center bg-[#0C2929] p-4 gap-3 md:gap-4"
              >
                {iconLabel && <Icon id={iconLabel} />}
                {title && (
                  <p class="text-[#FFFFFF] font-semibold text-lg md:text-[32px]">
                    {title}
                  </p>
                )}
                <div class="flex flex-col gap-1">
                  {price && (
                    <p class="text-[#02F67C] text-xl md:text-[32px] mt-1">
                      {price}
                    </p>
                  )}
                  {description && (
                    <p class="text-[#FFFFFF] text-xs md:text-lg">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
