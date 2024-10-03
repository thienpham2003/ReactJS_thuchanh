import "../App.css";
function Menu({ list }) {
  return (
    <nav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>

    </nav>
  );
}

function Header() {
  const list = [
    { url: "https://example.com", text: "Example" },
    { url: "https://google.com", text: "Google" },
    { url: "https://facebook.com", text: "Facebook" },
    { url: "https://twitter.com", text: "Twitter" }
  ];

  return (
    <header>
      <h1>My Website</h1>
      <Menu list={list} /> {/* Call Menu component and pass the list to it */}
    </header>
  );
}

export { Header, Menu };
