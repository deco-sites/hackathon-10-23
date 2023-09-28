import Icon, { AvailableIcons } from "./Icon.tsx";

export interface WhyGetInvolvedProps {
  titleSection?: string;
  cards?: CardProps[];
}

export interface CardProps {
  labelIcon?: AvailableIcons;
  title?: string;
  description?: string;
}

export default function WhyGetInvolved(
  { titleSection, cards }: WhyGetInvolvedProps,
) {
  return (
    <div class="w-full bg-[#0A2121]">
      <div class="flex flex-col items-center justify-center">
        <div class="flex justify-start">
          <p class="text-[#02F67C] font-semibold text-[32px] md:text-[40px]">
            {titleSection}
          </p>
        </div>
        <div class="flex flex-row wrap justify-center gap-2">
          {cards?.map((
            { labelIcon, title, description }: CardProps,
            index: number,
          ) => (
            <div
              key={index}
              class="bg-[#0C2929] flex flex-col justify-start items-center gap-6 p-4 text-[#FFFFFF] rounded-2xl"
            >
              {labelIcon && <Icon id={labelIcon ?? ""} />}
              {title && <p class="font-semibold md:text-[28px]">{title}</p>}
              {description && <p class="text-xs md:text-base">{description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
