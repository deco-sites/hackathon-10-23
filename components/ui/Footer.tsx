import Icon, { AvailableIcons } from "./Icon.tsx";

export interface FooterProps {
  labelIcon: AvailableIcons;
  href: string;
}

export default function Footer({ links }: { links: FooterProps[] }) {
  return (
    <div class="w-full bg-[#0A2121] py-5">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col md:flex-row items-center md:justify-between">
        <p class="flex items-center font-medium text-white">
          Página feita com 💚 utilizando{" "}
          <Icon
            class="ml-2"
            id="Logo"
            alt="Logo by deco"
            width={90}
            height={45}
          />
        </p>
        <div class="flex gap-4 md:gap-6 text-white pt-5 md:pt-0">
          {links?.map(({ labelIcon, href }, index) => (
            <a href={href ?? "#"}>
              <Icon id={labelIcon ?? ""} size={30} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
