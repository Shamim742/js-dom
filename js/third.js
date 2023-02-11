const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> My dynamic section </h1>
<P>Extra text add inside paragraph</p>
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
  <li>forth item</li>
</ul>
`
main.appendChild(section)