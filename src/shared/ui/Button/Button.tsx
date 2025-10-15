// enum PALETTE {
//   emerald,
//   // EMERALD = "type/action", // 0
//   PETER_RIVER, // 1
// }

import { type ComponentProps } from "react";

const palette = {
  emerald: "#2ecc71",
  peterRiver: "#3498db",
  carrot: "#e67e22",
  clouds: "#ecf0f1",
  midnightBlue: "#2c3e50",
};

type Color = keyof typeof palette;
// type Color = keyof typeof PALETTE;

// type Props = {
//   color?: Color;
//   bgColor?: Color;
//   children: string;
//   onClick: () => void;
// };

type Props = {
  color?: Color;
  bgColor?: Color;
} & ComponentProps<"button">;

// export const Button = () => {}

// export const Button = memo(
export const Button = ({
  children, // Text (string), <span>Text</span> -> React.ReactNode -> Object (span element with children Text)
  color = "clouds",
  bgColor = "midnightBlue",
  // onClick,
  ...rest
}: Props) => {
  const styles = {
    color: palette[color],
    backgroundColor: palette[bgColor],
  };
  return (
    <button style={styles} className="p-2 rounded-md" {...rest}>
      {children}
    </button>
  );
};
// , (props) => label === 'yes' ? true : false
// );

// Button.displayName = "memo(Button)";
