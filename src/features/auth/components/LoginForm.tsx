import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "../../../shared/ui";
import { loginSchema, type LoginDto } from "../types";

type Props = {
  onSubmit: (data: LoginDto) => void;
};

export function LoginForm({ onSubmit }: Props) {
  const { register, handleSubmit, formState } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onFormSent: SubmitHandler<LoginDto> = async (data) => {
    // console.log(data);
    try {
      // some auth related stuff
      if (data.email === "admin@test.com" && data.password === "test123") {
        onSubmit(data);
        navigate("/");
      }
    } catch {
      // display error message
    }
  };

  const { errors, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onFormSent)}>
      <Input label="E-mail" error={errors.email} {...register("email")} />

      <Input
        label="Password"
        type="password"
        error={errors.password}
        {...register("password")}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
