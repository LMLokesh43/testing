export enum colors{
  "primary",
  "dark",
  "light",
  "transparent"
}

export default interface HeaderProps {
  color: "primary" | "dark" | "light" | "transparent",
  rightLinks: Node,
  leftLinks: Node,
  brand: string,
  fixed: boolean,
  absolute: boolean,
  changeColorOnScroll: { height: number, color: "primary" | "dark" | "light" | "transparent"}
}