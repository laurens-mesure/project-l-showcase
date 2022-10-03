import { NavItem } from "./NavItem";

function Nav() {
  return (
    <nav className="relative left-[10%] w-min flex-shrink flex-grow-0 py-5 sm:left-[5%] lg:pt-20">
      <ol
        className="grid -translate-x-1/2 transform grid-cols-3 grid-rows-1 text-sm uppercase sm:text-base"
        style={{
          textOrientation: "upright",
          writingMode: "vertical-lr",
        }}
      >
        <li onClick={() => scrollToElement("about")}>
          <NavItem title="about" />
        </li>
        <li onClick={() => scrollToElement("work")}>
          <NavItem title="work" />
        </li>
        <li onClick={() => scrollToElement("contact")}>
          <NavItem title="contact" />
        </li>
      </ol>
    </nav>
  );
}

function scrollToElement(element: string) {
  const container = document.querySelector(`#${element}`);
  if (!container) return;

  window.scrollTo({
    top: container.getBoundingClientRect().top,
    behavior: "smooth",
  });
}

export default Nav;
