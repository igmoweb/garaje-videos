const FactLayout = ({ children, fact, factswidget }) => {
  return (
    <div className="min-h-screen p-24">
      {children}

      <main className="flex justify-between pt-16">
        {fact}
        <div className="w-44">{factswidget}</div>
      </main>
    </div>
  );
};

export default FactLayout;
