import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { faker } from "@faker-js/faker";
import { useCallback, useRef, useState } from "react";
import { TableHeader } from "./TableHeader";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";

const data = [
  {
    id: 1,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    id: 2,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    id: 3,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
];

export const DataTable = () => {
  // const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedValue = useRef<number | null>(null);
  // Set, Map

  const handleChange = (id: number) => {
    // setSelectedId(id);
    // console.log({ id });
    selectedValue.current = id;
    // alert(selectedValue.current);
  };

  return (
    <table>
      <TableHead>
        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>ID</TableHeader>
          <TableHeader>First Name</TableHeader>
          <TableHeader>Last Name</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((elem) => (
          <TableRow key={elem.id}>
            <TableCell>
              <Checkbox id={elem.id} onChange={() => handleChange(elem.id)} />
            </TableCell>
            <TableCell>{elem.id}</TableCell>
            <TableCell>{elem.firstName}</TableCell>
            <TableCell>{elem.lastName}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};
