// import { PostsList } from "@/components/PostsList";
// import { Counter } from "@/components/Counter";
// import { Stepper } from "@/components/Stepper";
// import { ValueCollector } from "@/components/ValueCollector";
// import { ViewPort } from "@/components/ViewPort";

import { Books } from "@/features/books/Books";
import { AuthInfo } from "@/shared/components/Auth/AuthInfo";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { Stepper } from "@/shared/components/Stepper";
import { StepperRedux } from "@/shared/components/StepperRedux";
import { ValueCollector } from "@/shared/components/ValueCollector";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>
      <Books />
      {/* <StepperRedux /> */}
      {/* <ValueCollector /> */}
      {/* <DataTable /> */}
      {/* <PostsList /> */}
      {/* <AuthInfo /> */}
      {/* <Stepper /> */}
      {/* <Stepper />
      <ViewPort />
      <Counter /> */}
    </div>
  );
}
