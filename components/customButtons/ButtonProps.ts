export enum Colors{
  "primary", "info", "success", "warning", "danger", "secondary", "white", "facebook", "twitter",
  "google", "github", "transparent"
}

export enum Sizes {
  "sm", "lg"
}
export interface ButtonProps {
  color?: Colors,
  size?: Sizes,
  simple?: boolean,
  round?: boolean,
  fullWidth?: boolean,
  disabled?: boolean,
  block?: boolean,
  link?: boolean,
  justIcon?: boolean,
  children?: Node | any,
  className?: string,
  href?: any,
  target?:any,
  ref: 'HTMLButtonElement | null'
};