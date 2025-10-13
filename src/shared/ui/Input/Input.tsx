import {
  useId,
  forwardRef,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from "react";
import type { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  (
    { label, id, error, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const reactId = useId();
    const componentId = id ? id : reactId;
    return (
      <div className="flex flex-col my-4">
        <label className="justify-start mr-4" htmlFor={componentId}>
          {label}
        </label>
        <input
          id={componentId}
          className="outline outline-offset outline-solid p-1"
          ref={ref}
          {...rest}
        />
        {error && <p className="text-red-500">{`${error.message}`}</p>}
      </div>
    );
  }
);

Input.displayName = "forwardRef(Input)";
