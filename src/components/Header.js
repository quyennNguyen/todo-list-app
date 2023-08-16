function Header({ menu, openNav, openTaskBox, viewTask, viewTrash }) {
  return (
    <header>
      <button id="arrow" onClick={openNav}>
        {menu ? "<<" : "MENU>>"}
      </button>
      {menu && (
        <nav>
          <ul>
            <li>Search</li>
            <li>
              <button class="nav-btn" onClick={openTaskBox}>
                Create new task
              </button>
            </li>
            <li>
              <button class="nav-btn" onClick={viewTask}>
                My List
              </button>
            </li>
            <li>
              <button class="nav-btn" onClick={viewTrash}>
                Trash
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
