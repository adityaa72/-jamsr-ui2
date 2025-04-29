// Custom hook to merge props
function useMergedProps({ render, componentProps, defaultElement = "div" }) {
  const mergeProps = (baseProps, overrideProps) => {
    const finalProps = { ...baseProps };

    for (const key in overrideProps) {
      if (key === "className") {
        const baseClass = baseProps.className || "";
        const overrideClass = overrideProps.className || "";
        finalProps.className = `${baseClass} ${overrideClass}`.trim();
      } else if (key === "style") {
        finalProps.style = { ...baseProps.style, ...overrideProps.style };
      } else if (
        key.startsWith("on") &&
        typeof overrideProps[key] === "function"
      ) {
        const baseHandler = baseProps[key];
        if (typeof baseHandler === "function") {
          finalProps[key] = (event) => {
            baseHandler(event);
            overrideProps[key](event);
          };
        } else {
          finalProps[key] = overrideProps[key];
        }
      } else {
        finalProps[key] = overrideProps[key];
      }
    }

    return finalProps;
  };

  const mergedProps = mergeProps(render?.props || {}, componentProps);

  const renderElement = () => {
    if (render) {
      return React.cloneElement(render, mergedProps, componentProps.children);
    }
    const DefaultElement = defaultElement;
    return (
      <DefaultElement {...mergedProps}>
        {componentProps.children}
      </DefaultElement>
    );
  };

  return { mergedProps, renderElement };
}

// Example Accordion component using the hook
function Accordion({ render, children, type = "single", ...restProps }) {
  const { renderElement } = useMergedProps({
    render,
    componentProps: { type, ...restProps, children },
    defaultElement: "div",
  });

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold">Accordion (type: {type})</h2>
      {renderElement()}
    </div>
  );
}

// Example Card component using the hook
function Card({ render, children, variant = "default", ...restProps }) {
  const { renderElement } = useMergedProps({
    render,
    componentProps: { variant, ...restProps, children },
    defaultElement: "section",
  });

  return (
    <div className="m-4">
      <h2 className="text-lg font-semibold">Card (variant: {variant})</h2>
      {renderElement()}
    </div>
  );
}

// Demo App
function App() {
  const handleClick = () => alert("Component clicked!");
  const handleRenderClick = () => alert("Render element clicked!");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Reusable Prop Merging Demo</h1>

      {/* Accordion with render prop */}
      <Accordion
        type="multiple"
        className="bg-blue-100 p-2"
        style={{ border: "2px solid blue" }}
        onClick={handleClick}
        render={
          <article
            className="bg-gray-200"
            style={{ padding: "10px" }}
            onClick={handleRenderClick}
          />
        }
      >
        <p>Accordion Content</p>
      </Accordion>

      {/* Accordion without render prop */}
      <Accordion className="bg-green-100 p-2">
        <p>Default Accordion Content</p>
      </Accordion>

      {/* Card with render prop */}
      <Card
        variant="outline"
        className="bg-red-100 p-2"
        onClick={handleClick}
        render={<div className="bg-yellow-200" onClick={handleRenderClick} />}
      >
        <p>Card Content</p>
      </Card>
    </div>
  );
}
