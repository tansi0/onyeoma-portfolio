function TagList({ items }) {
  return (
    <div className="tags" aria-label="Technologies">
      {items.map((item) => (
        <span className="tag" key={item}>{item}</span>
      ))}
    </div>
  );
}

export default TagList;
