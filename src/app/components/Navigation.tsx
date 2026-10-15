import Dropdown from "./common/Dropdown";
import NavLink from "./common/NavLink";

type NavigationProps = {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
};

type NavigationLink = {
  href: string;
  label: string;
  dropdownItems?: { id: string; title: string; url: string }[];
};

export default function Navigation({
  className = "",
  onClick,
}: NavigationProps) {
  const links: NavigationLink[] = [
    {
      href: "/about",
      label: "Über uns",
    },
    {
      href: "/#activity",
      label: "Unsere Aktivitäten",
      dropdownItems: [
        { id: "activity", title: "Worckshops", url: "/worckshops" },
        { id: "project", title: "Projekte", url: "/projects" },
        { id: "events", title: "Events & Networking", url: "/events" },
      ],
    },
    { href: "/projects", label: "Projekte" },
    { href: "/contakts", label: "Kontakte" },
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col h-screen items-center justify-start gap-8 py-8 md:flex md:flex-row md:gap-4 md:static md:h-auto md:py-0">
        {links.map((l) => (
          <li key={l.href} className={l.dropdownItems ? "relative group" : ""}>
            <NavLink onClick={() => onClick?.()} href={l.href}>
              {l.label}
            </NavLink>
            {l.dropdownItems && <Dropdown droplist={l.dropdownItems} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
