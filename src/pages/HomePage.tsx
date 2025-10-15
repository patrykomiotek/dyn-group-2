// import { PostsList } from "@/components/PostsList";
// import { Counter } from "@/components/Counter";
// import { Stepper } from "@/components/Stepper";
// import { ValueCollector } from "@/components/ValueCollector";
// import { ViewPort } from "@/components/ViewPort";

import { Books } from "@/features/books/Books";
import { EmployeeList } from "@/features/employees/EmployeeList";
import { ProductsListWithUse } from "@/features/products/components/ProductsListWithUse";
import { AuthInfo } from "@/shared/components/Auth/AuthInfo";
import { DataTable } from "@/shared/components/DataTable/DataTable";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary/ErrorBoundary";
import { FormRefs } from "@/shared/components/FormRefs";
import { Stepper } from "@/shared/components/Stepper";
import { StepperRedux } from "@/shared/components/StepperRedux";
import { CodeSplitting } from "@/shared/components/Users/CodeSplitting";
import { ValueCollector } from "@/shared/components/ValueCollector";
import { ResponsiveDashboard } from "exercises/Exercise1_useLayoutEffect";
import { CustomForm } from "exercises/Exercise2_useImperativeHandle";
import { UserManagement } from "exercises/Exercise3_useTransition";
import React, { Suspense } from "react";

const LazyComponent = React.lazy(
  () => import("../shared/components/Users/LazyProfile")
);

export function HomePage() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>

      <Suspense fallback={<p>Loading...</p>}>
        {/* <LazyComponent userId={123} /> */}
        <ProductsListWithUse />
      </Suspense>

      {/* <CodeSplitting /> */}
      {/* <UserManagement /> */}
      {/* <CustomForm /> */}
      {/* <FormRefs onSubmit={handleSubmit} /> */}
      {/* <ResponsiveDashboard /> */}
      {/* <Stepper /> */}
      {/* <EmployeeList /> */}
      {/* <Books /> */}
      {/* <StepperRedux /> */}
      {/* <ValueCollector /> */}
      {/* <DataTable /> */}
      {/* <PostsList /> */}
      {/* <AuthInfo /> */}
      {/* <Stepper /> */}
      {/* <ErrorBoundary fallback={<p>Stepper error</p>}>
        <Stepper />
      </ErrorBoundary> */}
      {/*<ViewPort />
      <Counter />*/}
    </div>
  );
}
