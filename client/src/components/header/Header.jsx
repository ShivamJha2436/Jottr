import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Jottr</span>
        <span className="headerTitleLg">Jot Down Your Ideas & Thoughts</span>
      </div>
      <img
        className="headerImg"
        src="https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
    </div>
  );
}