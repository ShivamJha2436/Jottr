import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGMlMjB3YWxscGFwZXJzJTIwd2lkZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shivam</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, perspiciatis, nemo autem laboriosam possimus perferendis quaerat tempore enim quo quasi consequuntur dignissimos ipsum doloremque consectetur commodi quos pariatur, quidem ullam. Facere facilis, culpa ea ad a eveniet accusantium excepturi corrupti vel, modi, fuga commodi. Ducimus odit rem beatae! Rerum possimus maxime incidunt atque? Dignissimos culpa neque ducimus exercitationem molestiae velit quam. Modi, a? Qui assumenda ratione tempora dolore quam error molestias voluptate unde totam, fugit quod minus except.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, perspiciatis, nemo autem laboriosam possimus perferendis quaerat tempore enim quo quasi consequuntur dignissimos ipsum doloremque consectetur commodi quos pariatur, quidem ullam. Facere facilis, culpa ea ad a eveniet accusantium excepturi corrupti vel, modi, fuga commodi. Ducimus odit rem beatae! Rerum possimus maxime incidunt atque? Dignissimos culpa neque ducimus exercitationem molestiae velit quam. Modi, a? Qui assumenda ratione tempora dolore quam error molestias voluptate unde totam, fugit quod minus except.</p>
      </div>
    </div>
  );
}
