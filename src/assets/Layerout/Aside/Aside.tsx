import AsideFooter from "./AsideFooter";
import Box from "./Box";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Aside() {
  return (
    <aside className="h-screen w-1/5 border-r-2 border-gray-400">
      <Logo />
      <Nav />
      <AsideFooter />
      <Box />
    </aside>
  );
}
