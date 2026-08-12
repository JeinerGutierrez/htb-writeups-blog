
const posts = [
    /*{
      title: "HTB - Lame (Root)",
      date: "2026-05-20",
      category: "HTB · Linux",
      tags: ["nmap", "smb", "exploit-db"],
      url: ""
    },
    {
      title: "HTB - Academy (User & Root)",
      date: "2026-05-15",
      category: "HTB · Web",
      tags: ["php", "sqli", "privesc"],
      url: ""
    },*/
    {
      title: "HTB - Responder (User)",
      date: "2026-08-12",
      category: "HTB · Windows · Web",
      tags: ["rfi", "responder", "ntlmv2", "winrm"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/responder.html"
    },

    {
      title: "HTB - Crocodile (User)",
      date: "2026-08-12",
      category: "HTB · Linux · Web",
      tags: ["ftp", "gobuster", "web"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/crocodile.html"
    },

    {
      title: "HTB - Sequel (User)",
      date: "2026-08-12",
      category: "HTB · Linux · Database",
      tags: ["mysql", "mariadb", "enum"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/sequel.html"
    },

    {
      title: "HTB - Skyfall (User & Root)",
      date: "2026-07-08",
      category: "HTB · Linux · Web",
      tags: ["ssrf", "minio", "vault", "privesc"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/skyfall.html"
    },

    {
      title: "HTB - GoodGames (User & Root)",
      date: "2026-05-29",
      category: "HTB · Linux · Web",
      tags: ["nmap", "web", "privesc"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/goodgames.html"
    },

    {
      title: "Docker - BreakmySSH",
      date: "2026-06-06",
      category: "Docker · Linux ",
      tags: ["nmap", "ssh"],
      url: "https://zerasedz-writeups-htb.vercel.app/writeups/breakmyssh.html"
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
  
      const tagsHtml = post.tags.map((t) => `<span>${t}</span>`).join("");

      a.innerHTML = `
        <div class="post-meta">${post.category} · ${post.date}</div>
        <h3 class="post-title">${post.title}</h3>
        <div class="post-tags">${tagsHtml}</div>
      `;
  
      list.appendChild(a);
    });
  }
  
  renderPosts();