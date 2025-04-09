import { json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import DynamicTable from "~/components/Table/DynamicTable";
import PaginationStyle_1 from "~/components/Table/PaginationStyle_1";
import PaginationStyle_2 from "~/components/Table/PaginationStyle_2";

export const loader: LoaderFunction = async () => {
  const data = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      country: "USA",
      doj: "2023-01-10",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      country: "India",
      doj: "2022-11-25",
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      country: "UK",
      doj: "2023-03-14",
    },
    {
      id: 4,
      name: "David",
      email: "david@example.com",
      country: "India",
      doj: "2021-08-19",
    },
    {
      id: 5,
      name: "Eva",
      email: "eva@example.com",
      country: "USA",
      doj: "2022-12-01",
    },
    {
      id: 6,
      name: "Frank",
      email: "frank@example.com",
      country: "Germany",
      doj: "2023-02-22",
    },
    {
      id: 7,
      name: "Grace",
      email: "grace@example.com",
      country: "France",
      doj: "2023-01-18",
    },
    {
      id: 8,
      name: "Hank",
      email: "hank@example.com",
      country: "USA",
      doj: "2023-04-10",
    },
    {
      id: 9,
      name: "Irene",
      email: "irene@example.com",
      country: "India",
      doj: "2023-02-02",
    },
    {
      id: 10,
      name: "Jake",
      email: "jake@example.com",
      country: "Canada",
      doj: "2023-03-01",
    },
    {
      id: 11,
      name: "Karen",
      email: "karen@example.com",
      country: "UK",
      doj: "2022-10-15",
    },
    {
      id: 12,
      name: "Leo",
      email: "leo@example.com",
      country: "USA",
      doj: "2023-05-01",
    },
    {
      id: 13,
      name: "Mona",
      email: "mona@example.com",
      country: "Germany",
      doj: "2023-01-05",
    },
    {
      id: 14,
      name: "Nate",
      email: "nate@example.com",
      country: "India",
      doj: "2022-07-20",
    },
    {
      id: 15,
      name: "Olivia",
      email: "olivia@example.com",
      country: "France",
      doj: "2023-03-10",
    },
  ];

  return json(data);
};

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "doj", label: "Date of Joining" },
];

export default function ParentComponent() {
  const data = useLoaderData<typeof loader>();
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">User Table</h1>
      <DynamicTable
        data={paginatedData}
        columns={columns}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onEdit={(row) => console.log("edit", row)}
        onView={(row) => console.log("view", row)}
        onDelete={(row) => console.log("delete", row)}
      />
      {/* Pagination Component */}
      {/* Pagination style 1 */}
      <PaginationStyle_1
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
