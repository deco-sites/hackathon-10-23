export interface IntroProps {
  /** @title Left Column */
  left?: LeftColumnProps;

  /**
   * @title Right Column
   * @description The Right Column is hidden in Mobile
   */
  right?: {
    listItem?: ListItemProps[];
  };
}

export interface LeftColumnProps {
  title: string;

  /** @format html */
  description?: string;
}

export interface ListItemProps {
  text: string;
}

export default function Intro({ left, right }: IntroProps) {
  return (
    <div class="w-full bg-[#0A2121]">
      <div class="flex">
        <div class="bg-[#DA8FFF] text-[#0A2121] flex flex-col gap-4 p-4 w-full">
          <p class="font-bold text-[40px]">{left?.title}</p>
          {left?.description && (
            <p dangerouslySetInnerHTML={{ __html: left?.description }} />
          )}
        </div>
        <div class="hidden md:block bg-[#303549] p-4">
          <ul class="flex flex-col gap-4">
            {right?.listItem?.map(({ text }: ListItemProps, index: number) => (
              <div key={index} class="font-semibold text-[#FFFFFF] text-2xl">
                {`+ ${text}`}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
