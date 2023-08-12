function MenuNav(props) {
  return (
    <nav>
      <ul>
        <li>Search</li>
        <li>
          <button class="nav-btn" onClick={props.open}>
            Create new task
          </button>
        </li>
        <li>
          <button class="nav-btn" onClick={props.viewTask}>
            My List
          </button>
        </li>
        <li>
          <button class="nav-btn" onClick={props.viewTrash}>
            Trash
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuNav;
