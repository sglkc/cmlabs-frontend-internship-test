import NavbarItem from "./Item";

export default function Navbar() {
  return (
    <nav class="px-16 b-b-2 b-gray-100 flex justify-between items-center">
      <a class="py-4 fw-black font-size-5" href="/">mealapp</a>
      <div class="flex px-2">
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/">Foods</NavbarItem>
        <NavbarItem href="/">Ingredients</NavbarItem>
        <NavbarItem href="/">Local Culinary</NavbarItem>
      </div>
    </nav>
  )
}
