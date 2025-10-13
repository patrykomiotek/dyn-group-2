import { FormRefs } from "@/components/FormRefs";
import type { RegistrationFormDto } from "@/shared/types/RegistrationFormDto";

export function RegistrationPage() {
  const onSubmit = ({ email, password, favLanguage }: RegistrationFormDto) => {
    console.log({ email, password, favLanguage });
  };

  return (
    <div>
      <h1 className="text-3xl">Registration</h1>
      <FormRefs onSubmit={onSubmit} />
    </div>
  );
}
