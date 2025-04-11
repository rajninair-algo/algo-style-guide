import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import SimpleTable from "~/components/Table/SimpleTable"; // use your actual path
import { useState } from "react";
import { TemplateBlock } from "~/components/TemplateBlock";
import PaginationStyle_1 from "~/components/Table/PaginationStyle_1";

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

export default function TablePage() {
  const data = useLoaderData<typeof loader>();
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const handleDelete = (id) => {
    console.log("Handle Delete", id);
    alert("Delete id", id);
  };
  const totalPages = Math.ceil(data.length / rowsPerPage);
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Tables</h1>

      <h3 className="mb-2 text-lg font-bold ">Small Table - sm</h3>
      <TemplateBlock
        code={` <SimpleTable
          data={paginatedData}
          size="sm"
         viewURL="/dff"
         editURL="/"
          onDelete={(row) => console.log("Delete", row)}
        />`}
      >
        <SimpleTable
          data={paginatedData}
          size="sm"
          viewURL={(row) => `/users/${row.id}`}
          editURL={(row) => `/users/${row.id}/edit`}
          onDelete={(row) => handleDelete(row.id)}
        />
      </TemplateBlock>

      <br />

      <h3 className="mb-2 text-lg font-bold ">Medium Table - md</h3>

      <TemplateBlock
        code={`<SimpleTable
          data={paginatedData}
          size="md"
         viewURL="dff"
         editURL="/"
          onDelete={(row) => console.log("Delete", row)}
        />`}
      >
        <SimpleTable
          data={paginatedData}
          size="md"
          viewURL={(row) => `/users/${row.id}`}
          editURL={(row) => `/users/${row.id}/edit`}
          onDelete={(row) => handleDelete(row.id)}
        />
      </TemplateBlock>

      <br />

      <h3 className="mb-2 text-lg font-bold ">Large Table - lg</h3>
      <TemplateBlock
        code={`  <SimpleTable
        data={paginatedData}
        size="lg"
        onView={(row) => console.log("View", row)}
        onEdit={(row) => console.log("Edit", row)}
        onDelete={(row) => console.log("Delete", row)}
      />
`}
      >
        <SimpleTable
          data={paginatedData}
          size="lg"
          viewURL={(row) => `/users/${row.id}`}
          editURL={(row) => `/users/${row.id}/edit`}
          onDelete={(row) => handleDelete(row.id)}
        />
      </TemplateBlock>

      <PaginationStyle_1
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="center"
      />

      <br />
    </div>
  );
}
