// import { PostsList } from "@/components/PostsList";
// import { Counter } from "@/components/Counter";
// import { Stepper } from "@/components/Stepper";
// import { ValueCollector } from "@/components/ValueCollector";
// import { ViewPort } from "@/components/ViewPort";

import { AuthInfo } from "@/shared/components/Auth/AuthInfo";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>
      {/* <PostsList /> */}
      <AuthInfo />
      {/* <Stepper />
      <ValueCollector />
      <ViewPort />
      <Counter /> */}
    </div>
  );
}
