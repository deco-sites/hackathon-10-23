import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "./Icon.tsx";

export interface HeroProps {
  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };

  links?: LinksProps[];
  title: string;
  description?: string;
  iconLabel?: AvailableIcons;
  cta?: CtaProps;
}

export interface CtaProps {
  text: string;
  href: string;

  /** @format html */
  infoBottom?: string;
}

export interface LinksProps {
  href: string;
  label: string;
  iconLabel?: AvailableIcons;
}

export default function HeroAndHeader(
  { logo, links, title, description, iconLabel, cta }: HeroProps,
) {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div class="hidden md:block relative bg-[#0A2121] z-[-2] pt-4">
        <Icon
          id="Background"
          class="w-full h-full absolute z-[-1] -top-9 left-0 pointer-events-none"
        />
        <div class="lg:container flex flex-col md:mx-auto gap-4 pt-10 px-4">
          <div class="flex justify-between">
            <img src={logo?.src ?? ""} alt={logo?.alt ?? "Logo by deco"} />
            <div class="flex gap-4">
              {links?.map((
                { href, label, iconLabel }: LinksProps,
                index: number,
              ) => (
                <a
                  href={href}
                  key={index}
                  role="button"
                  class={`flex justify-center items-center text-[#0D1717] bg-[#FAFAFA] h-7 px-2 font-semibold`}
                >
                  {iconLabel && <Icon class="mr-2" id={iconLabel} size={16} />}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[15vw] 2xl:text-[260px] text-[#FAFAFA] font-bold h-48 flex items-center">
              {title}
            </p>
            <div class="flex justify-between">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} width={139} height={139} />
                </div>
              )}
              {cta?.text && (
                <div class="py-24 px-14 bg-gradient-green">
                  <div class="flex flex-col gap-2">
                    <a class="relative flex justify-center" href={cta?.href}>
                      <Icon
                        id="ButtonTicket"
                        width="274"
                        height="88"
                        class="text-[#00FF80]"
                      />
                      <span class="absolute top-5 z-0 font-bold text-[32px]">
                        {cta.text}
                      </span>
                    </a>
                    {cta?.infoBottom && (
                      <p
                        dangerouslySetInnerHTML={{ __html: cta?.infoBottom }}
                      />
                    )}
                  </div>
                </div>
              )}
              {description && (
                <div>
                  <p class="text-[#C9CFCF] text-[60px] font-medium">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div class="block md:hidden relative bg-[#0A2121]">
        <Icon id="Background" class="w-full h-full absolute z-0 top-0 left-0" />
        <div></div>
      </div>
    </>
  );
}
