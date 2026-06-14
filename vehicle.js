const WHATSAPP_NUMBER = "917708642784";

const vehicles = {
  sedan: [
    {
      id:"dzire",
      name:"Maruti Swift Dzire",
      image:"images/vehicles/dzire1.webp",
      type:"Sedan",
      seats:"4 Seats",
      bags:"2 Bags",
      fuel:"Petrol / Diesel / CNG",
      badges:["AC","4 Seater","Fuel Efficient"]
    },
    {
      id:"etios",
      name:"Toyota Etios",
      image:"images/vehicles/etios1.webp",
      type:"Sedan",
      seats:"4 Seats",
      bags:"3 Bags",
      fuel:"Petrol / Diesel / CNG",
      badges:["AC","Reliable","Spacious"]
    },
    {
      id:"aura",
      name:"Hyundai Aura",
      image:"images/vehicles/aura1.webp",
      type:"Sedan",
      seats:"4 Seats",
      bags:"2 Bags",
      fuel:"Petrol / Diesel",
      badges:["AC","Modern","Comfortable"]
    },
    {
      id:"ciaz",
      name:"Maruti Ciaz",
      image:"images/vehicles/ciaz1.webp",
      type:"Sedan",
      seats:"4 Seats",
      bags:"3 Bags",
      fuel:"Petrol",
      badges:["AC","Premium","Spacious"]
    }
  ],

  suv: [
    {
      id:"ertiga",
      name:"Maruti Ertiga",
      image:"images/vehicles/ertiga1.webp",
      type:"6 / 7 Seater",
      seats:"7 Seats",
      bags:"4 Bags",
      fuel:"Petrol / CNG",
      badges:["AC","7 Seater","Family Car"]
    },
    {
      id:"innova",
      name:"Toyota Innova",
      image:"images/vehicles/innova1.webp",
      type:"7 Seater",
      seats:"7 Seats",
      bags:"5 Bags",
      fuel:"Diesel",
      badges:["AC","Premium","Reliable"]
    },
    {
      id:"innova-crysta",
      name:"Toyota Innova Crysta",
      image:"images/vehicles/crysta1.webp",
      type:"7 Seater",
      seats:"7 Seats",
      bags:"5 Bags",
      fuel:"Diesel",
      badges:["AC","Luxury","Premium"]
    },
    {
      id:"innova-hycross",
      name:"Toyota Hycross",
      image:"images/vehicles/hycross1.webp",
      type:"7 Seater",
      seats:"7 Seats",
      bags:"4 Bags",
      fuel:"Hybrid",
      badges:["AC","Latest","Hybrid"]
    }
  ],

  traveller: [
    {
      id:"tempo-traveller-12",
      name:"Tempo Traveller 12 Seater",
      image:"images/vehicles/TT1.webp",
      type:"Tempo Traveller",
      seats:"12 Seats",
      bags:"8 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","GPS","Music System"]
    },
    {
      id:"tempo-traveller-14",
      name:"Tempo Traveller 14 Seater",
      image:"images/vehicles/TT2.webp",
      type:"Tempo Traveller",
      seats:"14 Seats",
      bags:"10 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","Comfortable","Safe"]
    },
    {
      id:"tempo-traveller-16",
      name:"Tempo Traveller 16 Seater",
      image:"images/vehicles/TT3.webp",
      type:"Tempo Traveller",
      seats:"16 Seats",
      bags:"12 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","Spacious","Corporate"]
    },
    {
      id:"tempo-traveller-21",
      name:"Tempo Traveller 18-21 Seater",
      image:"images/vehicles/TT4.webp",
      type:"Tempo Traveller",
      seats:"18-21 Seats",
      bags:"15 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","Large Groups","Comfortable"]
    }
  ],

  bus: [
    {
      id:"mini-coach",
      name:"Coach 21 / 26 / 30 Seater",
      image:"images/vehicles/coach1.webp",
      type:"Coach",
      seats:"21-30 Seats",
      bags:"20 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","Comfortable","Push Back Seats"]
    },
    {
      id:"bus",
      name:"Bus 30 / 45 / 55 Seater",
      image:"images/vehicles/bus1.webp",
      type:"Bus",
      seats:"30-55 Seats",
      bags:"35 Bags",
      fuel:"Diesel",
      badges:["AC / Non-AC","Large Groups","Entertainment"]
    }
  ]
};

const sedanGrid = document.getElementById("sedanGrid");
const suvGrid = document.getElementById("suvGrid");
const travellerGrid = document.getElementById("travellerGrid");
const busGrid = document.getElementById("busGrid");

const vehicleModalElement = document.getElementById("vehicleModal");
const vehicleModal = new bootstrap.Modal(vehicleModalElement);

const vehiclePreviewModalElement = document.getElementById("vehiclePreviewModal");
const vehiclePreviewModal = new bootstrap.Modal(vehiclePreviewModalElement);

const selectedVehicleImage = document.getElementById("selectedVehicleImage");
const selectedVehicleName = document.getElementById("selectedVehicleName");
const selectedVehicleInfo = document.getElementById("selectedVehicleInfo");
const vehicleModalTitle = document.getElementById("vehicleModalTitle");
const vehicleModalSub = document.getElementById("vehicleModalSub");

const vehicleAccommodation = document.getElementById("vehicleAccommodation");
const vehicleAccommodationExtras = document.querySelectorAll(".vehicle-accommodation-extra");

const vehiclePickupDate = document.getElementById("vehiclePickupDate");
const vehicleDropDate = document.getElementById("vehicleDropDate");
const vehiclePreviewBtn = document.getElementById("vehiclePreviewBtn");
const vehiclePreviewContent = document.getElementById("vehiclePreviewContent");
const sendVehicleWhatsapp = document.getElementById("sendVehicleWhatsapp");
const vehicleEnquiryForm = document.getElementById("vehicleEnquiryForm");

let selectedVehicle = null;
let finalVehicleMessage = "";

function getAllVehicles(){
  return [
    ...vehicles.sedan,
    ...vehicles.suv,
    ...vehicles.traveller,
    ...vehicles.bus
  ];
}

function renderVehicleCard(vehicle){
  const card = document.createElement("div");
  card.className = "vehicle-card-wrap reveal active highlight-target";
  card.id = vehicle.id;

  card.innerHTML = `
    <div class="vehicle-card">
      <div class="vehicle-img-wrap">
        <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
        <span class="vehicle-type-tag">${vehicle.type}</span>
      </div>

      <div class="vehicle-info">
        <h3>${vehicle.name}</h3>

        <div class="vehicle-badges">
          ${vehicle.badges.map(badge => `<span>${badge}</span>`).join("")}
        </div>

        <div class="vehicle-specs">
          <div><i class="bi bi-people-fill"></i> ${vehicle.seats}</div>
          <div><i class="bi bi-suitcase2-fill"></i> ${vehicle.bags}</div>
          <div><i class="bi bi-fuel-pump-fill"></i> ${vehicle.fuel}</div>
        </div>

        <button class="vehicle-book-btn" onclick="openVehicle('${vehicle.id}')">
          Enquire Now
        </button>
      </div>
    </div>
  `;

  return card;
}

function renderVehicles(){
  vehicles.sedan.forEach(vehicle => sedanGrid.appendChild(renderVehicleCard(vehicle)));
  vehicles.suv.forEach(vehicle => suvGrid.appendChild(renderVehicleCard(vehicle)));
  vehicles.traveller.forEach(vehicle => travellerGrid.appendChild(renderVehicleCard(vehicle)));
  vehicles.bus.forEach(vehicle => busGrid.appendChild(renderVehicleCard(vehicle)));
}

function setMinDateTime(){
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  const currentDateTime = now.toISOString().slice(0,16);

  vehiclePickupDate.min = currentDateTime;
  vehicleDropDate.min = currentDateTime;
}

function openVehicle(id){
  selectedVehicle = getAllVehicles().find(vehicle => vehicle.id === id);

  if(!selectedVehicle) return;

  if(window.location.hash !== `#${id}`){
    history.pushState(null, "", `#${id}`);
  }

  selectedVehicleImage.src = selectedVehicle.image;
  selectedVehicleImage.alt = selectedVehicle.name;
  selectedVehicleName.textContent = selectedVehicle.name;
  selectedVehicleInfo.textContent = `${selectedVehicle.type} • ${selectedVehicle.seats} • ${selectedVehicle.bags}`;
  vehicleModalTitle.textContent = "Vehicle Enquiry";
  vehicleModalSub.textContent = selectedVehicle.name;

  vehicleEnquiryForm.reset();
  vehicleAccommodationExtras.forEach(field => field.classList.remove("show"));
  setMinDateTime();

  vehicleModal.show();
}

vehicleAccommodation.addEventListener("change", () => {
  if(vehicleAccommodation.value === "Yes"){
    vehicleAccommodationExtras.forEach(field => field.classList.add("show"));
  }else{
    vehicleAccommodationExtras.forEach(field => field.classList.remove("show"));
    document.getElementById("vehicleAdults").value = "";
    document.getElementById("vehicleChildren").value = "";
  }
});

function validateVehicleForm(){
  const destination = document.getElementById("vehicleDestination").value.trim();
  const passengers = document.getElementById("vehiclePassengers").value;
  const pickup = document.getElementById("vehiclePickup").value.trim();
  const drop = document.getElementById("vehicleDrop").value.trim();
  const pickupDate = document.getElementById("vehiclePickupDate").value;
  const dropDate = document.getElementById("vehicleDropDate").value;
  const accommodation = document.getElementById("vehicleAccommodation").value;
  const adults = document.getElementById("vehicleAdults").value;
  const children = document.getElementById("vehicleChildren").value;

  if(!destination || !passengers || !pickup || !drop || !pickupDate || !dropDate || !accommodation){
    alert("Please fill all required fields.");
    return false;
  }

  const now = new Date();
  const selectedPickup = new Date(pickupDate);
  const selectedDrop = new Date(dropDate);

  if(selectedPickup < now){
    alert("Older pickup date/time cannot be selected.");
    return false;
  }

  if(selectedDrop < selectedPickup){
    alert("Drop date/time should be after pickup date/time.");
    return false;
  }

  if(accommodation === "Yes" && (!adults || children === "")){
    alert("Please enter adult and child count.");
    return false;
  }

  return true;
}

function formatDateTime(value){
  if(!value) return "";

  const date = new Date(value);

  return date.toLocaleString("en-IN", {
    day:"2-digit",
    month:"short",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit"
  });
}

vehiclePreviewBtn.addEventListener("click", () => {
  if(!selectedVehicle) return;
  if(!validateVehicleForm()) return;

  const destination = document.getElementById("vehicleDestination").value.trim();
  const passengers = document.getElementById("vehiclePassengers").value;
  const pickup = document.getElementById("vehiclePickup").value.trim();
  const drop = document.getElementById("vehicleDrop").value.trim();
  const pickupDate = document.getElementById("vehiclePickupDate").value;
  const dropDate = document.getElementById("vehicleDropDate").value;
  const accommodation = document.getElementById("vehicleAccommodation").value;
  const adults = document.getElementById("vehicleAdults").value;
  const children = document.getElementById("vehicleChildren").value;

  finalVehicleMessage =
`Hello Beast Holidays,

I want to enquire about vehicle booking.

Selected Vehicle: ${selectedVehicle.name}
Vehicle Type: ${selectedVehicle.type}
Seats: ${selectedVehicle.seats}

Destination: ${destination}
Passenger Count: ${passengers}
Pickup Location: ${pickup}
Drop Location: ${drop}
Pickup Date & Time: ${formatDateTime(pickupDate)}
Drop Date & Time: ${formatDateTime(dropDate)}
Accommodation Needed: ${accommodation}
${accommodation === "Yes" ? `Adult Count: ${adults}
Child Count: ${children}
Note: Children above 10 years will be considered as adults.` : ""}

Please share availability and details.`;

  vehiclePreviewContent.innerHTML = `
    <p><strong>Vehicle:</strong> ${selectedVehicle.name}</p>
    <p><strong>Type:</strong> ${selectedVehicle.type}</p>
    <p><strong>Seats:</strong> ${selectedVehicle.seats}</p>
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Passengers:</strong> ${passengers}</p>
    <p><strong>Pickup:</strong> ${pickup}</p>
    <p><strong>Drop:</strong> ${drop}</p>
    <p><strong>Pickup Date & Time:</strong> ${formatDateTime(pickupDate)}</p>
    <p><strong>Drop Date & Time:</strong> ${formatDateTime(dropDate)}</p>
    <p><strong>Accommodation:</strong> ${accommodation}</p>
    ${accommodation === "Yes" ? `
      <p><strong>Adults:</strong> ${adults}</p>
      <p><strong>Children:</strong> ${children}</p>
      <p><strong>Note:</strong> Children above 10 years will be considered as adults.</p>
    ` : ""}
  `;

  vehiclePreviewModal.show();
});

sendVehicleWhatsapp.addEventListener("click", () => {
  const encodedMessage = encodeURIComponent(finalVehicleMessage);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
});

function openVehicleFromHash(){
  const hash = window.location.hash.replace("#", "");
  if(!hash) return;

  const vehicle = getAllVehicles().find(item => item.id === hash);

  if(!vehicle) return;

  setTimeout(() => {
    const target = document.getElementById(hash);

    if(target){
      target.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });

      target.classList.add("highlight-vehicle");

      setTimeout(() => {
        target.classList.remove("highlight-vehicle");
      }, 2500);
    }
  }, 250);
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.15
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

renderVehicles();
setMinDateTime();
openVehicleFromHash();

window.addEventListener("hashchange", openVehicleFromHash);
