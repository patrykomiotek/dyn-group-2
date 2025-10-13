type Props = {
  color?: "red" | "green" | "blue";
  children: string | number | (string | number)[]; // children, key, htmlFor, style, className
  // children: React.ReactNode;
};

// export function Text(props: Props) {
export function Text({ color = "blue", children }: Props) {
  // const color = props.color;
  const style = {
    backgroundColor: color,
  };
  return <p style={style}>{children}</p>;
}

// export { Text }
