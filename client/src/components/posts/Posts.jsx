import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3N8ZW58MHx8MHx8fDA%3D" />
      <Post img="https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" />
      <Post img="https://images.unsplash.com/photo-1657639039662-9edac2e6a40b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2dzfGVufDB8fDB8fHww"/>
      <Post img="https://plus.unsplash.com/premium_photo-1672280727393-ab6f0b26f527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2dzfGVufDB8fDB8fHww"/>
      <Post img="https://images.unsplash.com/photo-1657639454131-4583b011f62d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2dzfGVufDB8fDB8fHww"/>
    </div>
  );
}