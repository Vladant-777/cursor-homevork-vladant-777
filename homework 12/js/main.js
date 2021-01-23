const buttons = document.querySelector('.buttons');
const results = document.querySelector('.results');

async function getData(value) {
  const result = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await result.json();
  console.log(data);
  console.log(data.next);
  showResults(data, value);
}

function showResults(data, value) {
  let output = '';
  if (value === 'people') {
    data.results.forEach((item) => {
      output += `
            <div class='info'>
                <h2>${item.name}</h2>
                <p>Birth Year: ${item.birth_year}</p>
                <p>Gender: ${item.gender}</p>
            </div>`;
    });
  } else if (value === 'planets') {
    data.results.forEach((item) => {
      output += `
        <div class='info'>
            <h2>${item.name}</h2>
        </div>`;
    });
  }
  results.innerHTML = output;
}

buttons.addEventListener('click', (e) => {
  console.log(getData(e.target.textContent.trim().toLowerCase()));
});
