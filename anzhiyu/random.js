var posts=["m3u8/","study/","hello-world/","study - 副本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };