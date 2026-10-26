
const Card = ({ children, size = "medium", color = "primary", title }) => {
  const cardFormat = {
    small: "p-3 text-sm",
    medium: "p-5 text-base",
    large: "p-8 text-lg",
  };

  const colors = {
    primary:
      "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200",
    blue: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200",
    green:
      "border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950/40 dark:text-green-200",
  };

  return (
    <div className={`rounded-xl border ${cardFormat[size]} ${colors[color]}`}>
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}
      {children}
    </div>
  );
};

const Container = ({ children, layout = "grid" }) => {
  const layouts = {
    grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
    flex: "flex flex-wrap gap-4",
  };

  return <div className={layouts[layout]}>{children}</div>;
};

const ChildrenProps = () => {
  return (
    <Container layout="grid">
      <Card title="Blue Card" color="blue" size="medium">
        This is a blue card.
      </Card>

      <Card title="Green Card" color="green" size="medium">
        This is a green card.
      </Card>

      <Card title="Primary Card" color="primary" size="large">
        This is a large primary card.
      </Card>
    </Container>
  );
};

export default ChildrenProps;
