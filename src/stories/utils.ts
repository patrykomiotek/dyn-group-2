// import { action } from "@storybook/addon-essentials";
import { action } from "storybook/actions";

export const renderAction = action("render") as (...args: unknown[]) => void;
