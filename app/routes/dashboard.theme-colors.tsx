const ThemeColors = () => {
  const themeColors = [
    { name: "Primary color", class: "bg-primary" },
    { name: "Primary light", class: "bg-primary-light" },
    { name: "Primary dark", class: "bg-primary-dark" },

    { name: "Secondary color", class: "bg-secondary" },
    { name: "Secondary light", class: "bg-secondary-light" },
    { name: "Secondary dark", class: "bg-secondary-dark" },

    { name: "Accent", class: "bg-accent" },

    { name: "Muted", class: "bg-muted" },
    { name: "Muted light", class: "bg-muted-light" },

    { name: "Success", class: "bg-success" },
    { name: "Success light", class: "bg-success-light" },
    { name: "Success dark", class: "bg-success-dark" },

    { name: "Danger", class: "bg-danger" },
    { name: "Danger light", class: "bg-danger-light" },
    { name: "Danger dark", class: "bg-danger-dark" },

    { name: "Warning", class: "bg-warning" },
    { name: "Warning light", class: "bg-warning-light" },
    { name: "Warning dark", class: "bg-warning-dark" },

    { name: "Info", class: "bg-info" },
    { name: "Info light", class: "bg-info-light" },
    { name: "Info dark", class: "bg-info-dark" },

    { name: "Dark", class: "bg-dark" },
    { name: "Dark light", class: "bg-dark-light" },
    { name: "Dark dark", class: "bg-dark-dark" },
  ];

  return (
    <>
      <div>
        <h4 className="text-2xl font-bold mt-4 mb-4">Font & Styles</h4>
        <p>
          <strong>Font :</strong> Montserrat, sans-serif
        </p>

        <h4 className="font-bold mt-4 mb-2">Theme Colors</h4>
        <div className="flex flex-wrap gap-4">
          {themeColors.map((color) => (
            <div
              key={color.name}
              className="flex items-center gap-2 min-w-[160px]"
            >
              <div className={`${color.class} w-4 h-4 border rounded-md`}></div>
              <span className="text-sm">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThemeColors;
