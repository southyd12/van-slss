const messageNode = document.getElementById('message');

const render = (message="", DOMNode=messageNode) => {
  DOMNode.textContent = message;
}

const getData = async () => {
  try {
    const response = await fetch ('/.netlify/functions/hello-world')
    if(!response.ok) throw response;
    const data = await response.json();
    console.log(data);
    render(data.message);
  } catch (err) {
    alert ('Error fetching. Check console')
    console.error(err);
  }
}

getData();
