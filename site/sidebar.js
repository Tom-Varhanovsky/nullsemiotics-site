document.getElementById('sidebar-placeholder').innerHTML = `
  <aside class="sidebar">
    <div class="widget">
      <div class="widget-title">∴ navigate</div>
      <div class="widget-body">
        <a href="index.html">⌂ home</a>
        <a href="cabinet.html">▣ cabinet</a>
        <a href="blog.html">░ blog</a>
        <a href="projects.html">◈ projects</a>
      </div>
    </div>
    <div class="widget">
      <div class="widget-title">∴ now playing</div>
      <div class="widget-body"><span class="widget-placeholder">[ widget slot ]</span></div>
    </div>
    <div class="widget">
      <div class="widget-title">∴ now reading</div>
      <div class="widget-body"><span class="widget-placeholder">[ widget slot ]</span></div>
    </div>
    <div class="widget">
      <div class="widget-title">∴ elsewhere</div>
      <div class="widget-body">
        <a href="https://linkedin.com">linkedin</a>
        <a href="https://github.com">github</a>
      </div>
    </div>
  </aside>
`;

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('open');
});