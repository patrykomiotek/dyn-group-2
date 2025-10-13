export interface ApiListResponse<T> {
  records: T[];
}

export interface CategoryDto {
  id: number;
  fields: {
    name: string;
  };
}
