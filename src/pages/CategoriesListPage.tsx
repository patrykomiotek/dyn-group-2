import { fetchCategories } from "shared/services/categories";
import type { CategoryDto } from "shared/types/api";
import { useEffect, useState } from "react";

export function CategoriesListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<CategoryDto[]>([]);

  const loadData = async () => {
    try {
      const response = await fetchCategories();
      setData(response.records);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Categories List</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Component error</p>}
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6">
          <h2 className="text-2xl">{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}
