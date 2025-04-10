import { useState } from "react";
import { json, type LoaderFunction } from "@remix-run/node";
import PaginationStyle_1 from "~/components/Table/PaginationStyle_1";
import { useLoaderData } from "@remix-run/react";
import PaginationStyle_2 from "~/components/Table/PaginationStyle_2";
import { TemplateBlock } from "~/components/TemplateBlock";
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
const PaginationStyles = () => {
  const data = useLoaderData<typeof loader>();
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div>
      <h3 className="font-bold mb-4 text-2xl text-primary ">
        Pagination Style 1
      </h3>
      <hr />
      <br />
      <h4 className="font-bold">Left aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_1
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="left"
      />`}
      >
        <PaginationStyle_1
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="left"
        />
      </TemplateBlock>

      <h4 className="font-bold">Center aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_1
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="center"
      />`}
      >
        <PaginationStyle_1
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="center"
        />
      </TemplateBlock>

      <h4 className="font-bold">Right aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_1
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="right"
      />`}
      >
        <PaginationStyle_1
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="right"
        />
      </TemplateBlock>

      <br />
      <br />
      <hr />
      <br />

      <h3 className="font-bold mb-4 text-2xl text-primary ">
        Pagination Style 2
      </h3>

      <h4 className="font-bold">Left aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_2
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="left"
      />`}
      >
        <PaginationStyle_2
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="left"
        />
      </TemplateBlock>

      <h4 className="font-bold">Center aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_2
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="center"
      />`}
      >
        <PaginationStyle_2
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="center"
        />
      </TemplateBlock>

      <h4 className="font-bold">Right aligned</h4>
      <TemplateBlock
        code={`<PaginationStyle_2
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        alignSide="right"
      />`}
      >
        <PaginationStyle_2
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          alignSide="right"
        />
      </TemplateBlock>

      <hr />

      <br />
    </div>
  );
};
export default PaginationStyles;
