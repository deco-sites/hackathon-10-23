import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "./Icon.tsx";
import { asset } from "$fresh/runtime.ts";

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
      <div
        class="hidden md:block relative bg-[#0A2121] bg-no-repeat bg-repeat-x"
        style={{ backgroundImage: `url(${asset(`/backgroundTop.svg`)})` }}
      >
        <div class="lg:container flex flex-col md:mx-auto gap-4 pt-14 px-4">
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
            <p class="text-[16vw] lg:text-[170px] xl:text-[215px] 2xl:text-[260px] text-[#FAFAFA] font-bold h-48 flex items-center">
              {title}
            </p>
            <div class="flex justify-between">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} width={139} height={139} />
                </div>
              )}
              {cta?.text && (
                <div class="py-24 px-14 bg-gradient-green relative z-[0] rounded-full">
                  <div class="flex flex-col gap-2">
                    <a
                      class="relative flex justify-center text-[#00FF80]"
                      href={cta?.href}
                    >
                      <Icon
                        id="ButtonTicket"
                        width="274"
                        height="88"
                      />
                      <span class="absolute top-5 z-0 font-bold text-[32px] text-[#000] hover:text-[#FFFFFF]">
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
      <div class="block md:hidden relative bg-[#0A2121] bg-no-repeat bg-contain" style={{ backgroundImage: `url(${asset(`/backgroundTop.svg`)})` }}>
        <div class="flex flex-col gap-4 pt-10 px-4">
          <div class="flex justify-start">
            <img src={logo?.src ?? ""} alt={logo?.alt ?? "Logo by deco"} />
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[50px] sm:text-[65px] text-[#FAFAFA] font-bold h-12 flex items-center">
              {title}
            </p>
            <div class="flex justify-between relative pb-36">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} width={40} height={40} />
                </div>
              )}
              {cta?.text && (
                <div class="w-full flex justify-center">
                  <div class="mt-4 pt-4 pb-5 px-3 rounded-full bg-transparent sm:bg-gradient-green absolute top-10 z-[0]">
                    <div class="flex flex-col gap-2 text-center items-center">
                      <a class="relative flex justify-center" href={cta?.href}>
                        <Icon
                          id="ButtonTicket"
                          width="150"
                          height="50"
                          class="text-[#00FF80]"
                        />
                        <span class="absolute top-3 z-0 font-bold text-[18px]">
                          {cta.text}
                        </span>
                      </a>
                      {cta?.infoBottom && (
                        <p
                          class="text-center"
                          dangerouslySetInnerHTML={{ __html: cta?.infoBottom }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
              {description && (
                <div>
                  <p class="text-[#C9CFCF] text-[22px] font-medium">
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div class="flex flex-col justify-center items-center gap-4 mb-4">
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
      </div>
    </>
  );
}
