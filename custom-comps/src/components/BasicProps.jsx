
import { useState } from "react";

const Button = ({
  size = "medium",
  color = "primary",
  disabled = false,
  text = "Click Me",
  onClick,
}) => {
  const sizes = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-5 py-3 text-base",
  };

  const colors = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    dark: "bg-gray-900 text-white hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-lg font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${sizes[size]} ${colors[color]}`}
    >
      {text}
    </button>
  );
};

const BasicProps = () => {
  const [count, setCount] = useState(0);

  const buttons = [
    { text: "Primary", color: "primary", size: "small" },
    { text: "Secondary", color: "secondary", size: "small" },
    { text: "Danger", color: "danger", size: "small" },
    { text: "Success", color: "success", size: "small" },
    { text: "Outline", color: "outline", size: "medium" },
    { text: "Dark", color: "dark", size: "medium" },
    { text: "Large Button", color: "primary", size: "large" },
    { text: "Disabled", color: "primary", size: "medium", disabled: true },
    { text: "Delete", color: "danger", size: "medium" },
    { text: "Continue", color: "success", size: "medium" },
    { text: "Cancel", color: "secondary", size: "medium" },
    { text: "Submit", color: "dark", size: "medium" },
  ];

  return (
    <section className="w-full rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Button Variants
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Different sizes, colors, and states
          </p>
        </div>

        <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
          {count} clicks
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {buttons.map((button, index) => (
          <div
            key={index}
            className="flex min-w-0 flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
          >
            <span className="text-xs font-medium text-gray-500">
              {button.text}
            </span>
           

            <Button
             {...button}
              onClick={() => setCount((prev) => prev + 1)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BasicProps;
