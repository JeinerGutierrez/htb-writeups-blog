// Aquí defines tus write-ups; luego puedes mover esto a un JSON aparte.
const posts = [
    {
      title: "HTB - Lame (Root)",
      date: "2026-05-20",
      category: "HTB · Linux",
      tags: ["nmap", "smb", "exploit-db"],
      url: "https://tusitio.com/writeups/htb-lame"
    },
    {
      title: "HTB - Academy (User & Root)",
      date: "2026-05-15",
      category: "HTB · Web",
      tags: ["php", "sqli", "privesc"],
      url: "https://tusitio.com/writeups/htb-academy"
    },
    {
      title: "HTB - GoodGames (User & Root)",
      date: "2026-05-29",
      category: "HTB · Linux · Web",
      tags: ["nmap", "web", "privesc"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/goodgames.html"
    },
  ];
  
  function renderPosts() {
    const list = document.getElementById("posts-list");
    list.innerHTML = "";
  
    posts.forEach((post) => {
      const a = document.createElement("a");
      a.href = post.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "post-card";
  
      a.innerHTML = `
        <div class="post-meta">${post.category} · ${post.date}</div>
        <h3 class="post-title">${post.title}</h3>
        <div class="post-tags">${post.tags.join(" · ")}</div>
      `;
  
      list.appendChild(a);
    });
  }
  
  renderPosts();