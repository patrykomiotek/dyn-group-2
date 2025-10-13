import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button, Input } from "../ui";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(3, { error: "Too short" }),
  favLanguage: z.enum(["js", "java", "c#"]),
});
type FormSchema = z.infer<typeof formSchema>;

export function FormRefsRHF() {
  const { register, handleSubmit, formState, watch } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  const { errors, isValid, isSubmitting } = formState;
  const watchedEmail = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!isValid && <p className="text-red-500">Invalid form</p>}

      {/* <FormSection watchedEmail={watchedEmail}> */}
      <p>E-mail: {watchedEmail}</p>
      <Input
        label="E-mail"
        id="email"
        type="email"
        error={errors.email}
        {...register("email")}
      />
      {/* </FormSection> */}

      <Input
        label="Password"
        id="password"
        type="password"
        error={errors.password}
        {...register("password")}
      />

      <Input
        label="Favorite language"
        id="favLanguage"
        error={errors.favLanguage}
        {...register("favLanguage")}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
