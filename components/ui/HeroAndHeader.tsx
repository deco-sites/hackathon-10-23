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
      <div class="hidden md:block">
        <div class="lg:container flex flex-col md:mx-auto gap-4">
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
                  class={`flex justify-center items-center text-[#0D1717] bg-[#FAFAFA]`}
                >
                  {iconLabel && <Icon class="ml-2" id={iconLabel} />}
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-[200px] text-[#FAFAFA] font-bold">{title}</p>
            <div class="flex justify-between">
              {iconLabel && (
                <div>
                  <Icon id={iconLabel} />
                </div>
              )}
              {cta?.text && (
                <div>
                  <div class="flex flex-col gap-2">
                    <a class="relative" href={cta?.href}>
                      <Icon id="ButtonTicket" width="274" height="88" />
                      <span class="absolute">{cta.text}</span>
                    </a>
                    {cta?.infoBottom && <p dangerouslySetInnerHTML={{ __html: cta?.infoBottom }} />}
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
      <div class="block md:hidden">
        <div></div>
      </div>
    </>
  );
}
