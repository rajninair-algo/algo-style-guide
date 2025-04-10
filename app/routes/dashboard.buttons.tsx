import { Button } from "~/components/buttons/Buttons";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { TemplateBlock } from "~/components/TemplateBlock";

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    alert("I'm clicked");
  };
  const sizes = ["sm", "md", "lg", "xl"];
  const variants = ["primary", "secondary", "outline"];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Buttons</h1>

      {/* Primary Button Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Primary Button - Sizes</h2>

        <div className="grid md:grid-cols-2 md:gap-x-4">
          {sizes.map((size) => (
            <TemplateBlock
              key={size}
              code={`<Button onClick={handleClick}  size=\"${size}\">${size.toUpperCase()}</Button>`}
            >
              <Button onClick={handleClick} size={size as any}>
                {size.toUpperCase()}
              </Button>
            </TemplateBlock>
          ))}
        </div>
      </section>

      {/* All Variants and States */}
      {variants.map((variant) => (
        <section key={variant} className="space-y-4">
          <h2 className="text-xl font-semibold capitalize">
            {variant} Buttons
          </h2>
          <div className="grid md:grid-cols-2 md:gap-x-4">
            {sizes.map((size) => (
              <TemplateBlock
                key={`${variant}-${size}`}
                code={`<Button onClick={handleClick} variant=\"${variant}\" size=\"${size}\">${variant} ${size}</Button>`}
              >
                <Button
                  onClick={handleClick}
                  variant={variant as any}
                  size={size as any}
                >
                  {variant} {size}
                </Button>
              </TemplateBlock>
            ))}

            <TemplateBlock
              code={`<Button onClick={handleClick} variant=\"${variant}\" disabled>Disabled</Button>`}
            >
              <Button onClick={handleClick} variant={variant as any} disabled>
                Disabled
              </Button>
            </TemplateBlock>

            <TemplateBlock
              code={`<Button onClick={handleClick} variant=\"${variant}\" loading>Loading</Button>`}
            >
              <Button onClick={handleClick} variant={variant as any} loading>
                Loading
              </Button>
            </TemplateBlock>

            <TemplateBlock
              code={`<Button onClick={handleClick} variant=\"${variant}\" icon={<Plus />}>With Icon</Button>`}
            >
              <Button
                variant={variant as any}
                icon={<Plus className="h-4 w-4" />}
              >
                With Icon
              </Button>
            </TemplateBlock>
          </div>
        </section>
      ))}
    </div>
  );
}
