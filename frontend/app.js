const providers = [];

function createProfile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const serviceType = document.getElementById("serviceType").value;

  if (!name || !email || !phone || !serviceType) {
    alert("Fill all fields");
    return;
  }

  providers.push({ name, email, phone, serviceType });
  renderProviders();
}

function renderProviders() {
  const list = document.getElementById("providers");
  list.innerHTML = "";

  providers.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <strong>${p.name}</strong><br/>
        ${p.serviceType}<br/>
        ${p.phone}
      </div>
    `;
  });
}

function requestService() {
  const service = document.getElementById("service").value;
  const location = document.getElementById("location").value;
  const payment = document.getElementById("payment").value;

  alert(`Service requested: ${service} in ${location} | Payment: ${payment}`);
}
