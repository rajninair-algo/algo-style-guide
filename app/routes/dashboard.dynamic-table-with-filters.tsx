import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import DynamicTable from "~/components/Table/DynamicTable";

export const loader: LoaderFunction = async () => {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", country: "USA" },
    { id: 2, name: "Bob", email: "bob@example.com", country: "India" },
    { id: 3, name: "Charlie", email: "charlie@example.com", country: "UK" },
    { id: 4, name: "David", email: "david@example.com", country: "India" },
    { id: 5, name: "Eva", email: "eva@example.com", country: "USA" },
    { id: 6, name: "Frank", email: "frank@example.com", country: "Germany" },
    // add more rows for pagination
  ];
  return json(data);
};

export default function TablePage() {
  const data = useLoaderData<typeof loader>();
  type User = {
    id: number;
    name: string;
    email: string;
    country: string;
  };
  type Column<T> = {
    key: keyof T;
    label: string;
    sortable?: boolean;
    searchable?: boolean;
  };

  const columns: Column<User>[] = [
    { key: "id", label: "ID", sortable: false },
    { key: "name", label: "Name", sortable: true, searchable: false },
    { key: "email", label: "Email", searchable: true },
    { key: "country", label: "Country", sortable: true, searchable: true },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">User Table</h1>
      <DynamicTable data={data} columns={columns} rowsPerPage={3} />
    </div>
  );
}
