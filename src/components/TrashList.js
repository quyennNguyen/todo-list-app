function TrashList({ list, remove, restore }) {
  return (
    <>
      <h1>Recycle Bin</h1>
      <ul>
        {list.map((item) => (
          <Item key={item} item={item} remove={remove} restore={restore} />
        ))}
      </ul>
    </>
  );
}

function Item({ item, remove, restore }) {
  return (
    <li>
      <button onClick={remove}>X</button>
      <p>{item}</p>
      <button id="restore-btn" onClick={restore}>Restore</button>
    </li>
  );
}

export default TrashList;
