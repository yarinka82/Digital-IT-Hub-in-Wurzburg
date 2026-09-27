type DropdownItem = {
  id: string;
  title: string;
  url: string;
};

type DropdownProps = {
  droplist: DropdownItem[];
};

export default function Dropdaun({ droplist }: DropdownProps) {
  return (
    <ul
      className="absolute left-1/2 -translate-x-1/2 top-full z-40 w-48 p-2 mt-1 
                             bg-[#111] border border-gray-800 rounded-xl shadow-xl
                             invisible opacity-0 translate-y-2 pointer-events-none
                             transition-all duration-200 ease-out
                             group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
    >
      {droplist.map((drop) => (
        <li key={drop.id}>
          <a
            href={drop.url}
            className="block px-4 py-2 text-sm text-gray-300 rounded-lg hover:bg-gray-800 hover:text-blue-400 transition-colors"
          >
            {drop.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
