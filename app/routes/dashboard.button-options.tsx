import React from "react";
import { Button } from "~/components/buttons/Buttons";
import { TemplateBlock } from "~/components/TemplateBlock";
import { Upload, Twitter, Facebook, Github } from "lucide-react";

export default function ButtonOptionsPage() {
  const variants = [
    "primary",
    "success",
    "info",
    "warning",
    "danger",
    "dark",
    "secondary",
    "default",
  ] as const;

  const sizes = ["lg", "md", "sm", "xs"] as const;
  const variantTextColors: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-green-600",
    danger: "text-red-600",
    warning: "text-yellow-600",
    info: "text-blue-600",
    dark: "text-gray-800",
    default: "text-gray-500",
  };

  const renderVariantTitle = (variant: string) => (
    <h3
      className={`text-lg font-medium capitalize mb-2 ${
        variantTextColors[variant] || "text-gray-700"
      }`}
    >
      {variant} variant
    </h3>
  );

  return (
    <div className="p-6 space-y-6">
      {/*  */}
      <h1 className="text-4xl font-bold mb-4">Button Template</h1>
      <hr />
      <div className="">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Button Sizes by Variant</h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={variant}>
                {renderVariantTitle(variant)}
                <div className="bg-slate-100 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {sizes.map((size) => (
                    <TemplateBlock
                      key={`${variant}-${size}`}
                      code={`<Button variant="${variant}" size="${size}">${size}</Button>`}
                    >
                      <Button variant={variant} size={size}>
                        {size}
                      </Button>
                    </TemplateBlock>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary py-1 mb-4">
            Button Rounded by Variant and Size
          </h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={`rounded-${variant}`}>
                {renderVariantTitle(variant)}
                <div className="bg-slate-100 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {sizes.map((size) => (
                    <TemplateBlock
                      key={`rounded-${variant}-${size}`}
                      code={`<Button variant="${variant}" size="${size}" rounded>${size}</Button>`}
                    >
                      <Button variant={variant} size={size} rounded>
                        {size}
                      </Button>
                    </TemplateBlock>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary py-1 mb-4">
            Button Outlined by Variant and Size
          </h2>
          <div className="space-y-6">
            {variants.map((variant) => (
              <div key={`outline-${variant}`}>
                {renderVariantTitle(variant)}
                <div className="bg-slate-100 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {sizes.map((size) => (
                    <TemplateBlock
                      key={`outline-${variant}-${size}`}
                      code={`<Button variant="${variant}" size="${size}" outline>${size}</Button>`}
                    >
                      <Button variant={variant} size={size} outline>
                        {size}
                      </Button>
                    </TemplateBlock>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary py-1 mb-4">
            Upload Button
          </h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <TemplateBlock
              code={`<Button icon={<Upload size={16} />} variant="primary">Upload</Button>`}
            >
              <Button icon={<Upload size={16} />} variant="primary">
                Upload
              </Button>
            </TemplateBlock>

            <TemplateBlock
              code={`<Button icon={<Upload size={16} />} variant="success">Save</Button>`}
            >
              <Button icon={<Upload size={16} />} variant="success">
                Save
              </Button>
            </TemplateBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
