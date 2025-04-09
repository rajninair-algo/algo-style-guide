import { PrimaryButton } from "~/components/buttons/PrimaryButton";
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
              code={`<PrimaryButton onClick={handleClick}  size=\"${size}\">${size.toUpperCase()}</PrimaryButton>`}
            >
              <PrimaryButton onClick={handleClick} size={size as any}>
                {size.toUpperCase()}
              </PrimaryButton>
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
                code={`<PrimaryButton onClick={handleClick} variant=\"${variant}\" size=\"${size}\">${variant} ${size}</PrimaryButton>`}
              >
                <PrimaryButton
                  onClick={handleClick}
                  variant={variant as any}
                  size={size as any}
                >
                  {variant} {size}
                </PrimaryButton>
              </TemplateBlock>
            ))}

            <TemplateBlock
              code={`<PrimaryButton onClick={handleClick} variant=\"${variant}\" disabled>Disabled</PrimaryButton>`}
            >
              <PrimaryButton
                onClick={handleClick}
                variant={variant as any}
                disabled
              >
                Disabled
              </PrimaryButton>
            </TemplateBlock>

            <TemplateBlock
              code={`<PrimaryButton onClick={handleClick} variant=\"${variant}\" loading>Loading</PrimaryButton>`}
            >
              <PrimaryButton
                onClick={handleClick}
                variant={variant as any}
                loading
              >
                Loading
              </PrimaryButton>
            </TemplateBlock>

            <TemplateBlock
              code={`<PrimaryButton onClick={handleClick} variant=\"${variant}\" icon={<Plus />}>With Icon</PrimaryButton>`}
            >
              <PrimaryButton
                variant={variant as any}
                icon={<Plus className="h-4 w-4" />}
              >
                With Icon
              </PrimaryButton>
            </TemplateBlock>
          </div>
        </section>
      ))}
    </div>
  );
}
