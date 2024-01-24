import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.unsplash.com/photo-1607571587001-8c9815cb72b5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fHww" />
      <Post img="https://images.unsplash.com/photo-1515923152115-758a6b16f35e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fHww" />
      <Post img="https://images.unsplash.com/photo-1451481454041-104482d8e284?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fHww"/>
      <Post img="https://images.unsplash.com/photo-1604079669261-263fd5e55daf?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fHww"/>
      <Post img="https://images.unsplash.com/photo-1472566316349-bce77aa2a778?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJsYWNrfGVufDB8MHwwfHx8MA%3D%3D"/>
      <Post img="https://images.unsplash.com/photo-1499428665502-503f6c608263?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEJsYWNrfGVufDB8MHwwfHx8MA%3D%3D"/>
    </div>
  );
}