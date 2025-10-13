interface Todo {
  title: string;
  description: string;
  createdAt: Date;
}
type OptionalTodo = Partial<Todo>;
type RequiredTodo = Required<Todo>;
type WithoutDate = Omit<Todo, "createdAt">;
type WithoutPick = Pick<Todo, "title" | "description">;
type ReadonlyTodo = Readonly<Todo>;

type CustomReadonly<T> = {
  readonly [K in keyof T]-?: T[K];
};

type MyCustomReadonly = CustomReadonly<Todo>;
