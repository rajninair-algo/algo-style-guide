import { useState } from "react";
// https://youtu.be/yitelFyogRk?si=d-OAi8MIMdtG0a5z
// Akshay Saini - YT
const vehiclesData = [
  {
    id: Math.random(),
    name: "car",
    children: [
      {
        id: Math.random(),
        name: "toyota",
        children: [
          {
            id: Math.random(),
            name: "corolla",
          },
          {
            id: Math.random(),
            name: "camry",
            children: [
              {
                id: Math.random(),
                name: "e-class",
                children: [
                  {
                    id: Math.random(),
                    name: "SUV",
                  },
                ],
              },
              {
                id: Math.random(),
                name: "s-class",
                children: [
                  {
                    id: Math.random(),
                    name: "sedan",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: Math.random(),
        name: "honda",
      },
    ],
  },
  {
    id: Math.random(),
    name: "truck",
    children: [
      {
        id: Math.random(),
        name: "mercedes",
      },
      {
        id: Math.random(),
        name: "tata",
      },
    ],
  },
  {
    id: Math.random(),
    name: "bike",
  },
];
export const ShowCheckboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    // if children presernt, check them all  - add all of them to new state

    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      //   If all children are checked, mark the parent as checked
      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id] || false;

        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      vehiclesData.forEach((vehicle) => verifyChecked(vehicle));

      return newState;
    });
  };
  console.log(checked);
  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="parent pl-8 ">
          <label
            htmlFor={node.id}
            className="text-lg capitalize cursor-pointer"
          >
            <input
              type="checkbox"
              id={node.id}
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />{" "}
            {node.name}
          </label>
          {/* Recurrsion - calling the component from inside of the component */}
          {node.children && (
            <ShowCheckboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default function Page() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <h3>Dynamic Checkboxes</h3>
      <ShowCheckboxes
        data={vehiclesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
