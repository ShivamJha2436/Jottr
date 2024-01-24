import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Jot Down Your Ideas <hr/> with</span>
        <span className="headerTitleLg">Jottr</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluaW1hbCUyMGJsYWNrJTIwYW5kJTIwd2hpdGUlMjA0a3xlbnwwfDB8MHx8fDA%3D"
        alt=""
      />
    </div>
  );
}