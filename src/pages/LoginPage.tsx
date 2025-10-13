import { LoginForm } from "@/features/auth/components/LoginForm";
import type { LoginDto } from "@/features/auth/types";

export function LoginPage() {
  const onSubmit = ({ email, password }: LoginDto) => {
    console.log({ email, password });
  };

  return (
    <div>
      <h1 className="text-3xl">Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}
