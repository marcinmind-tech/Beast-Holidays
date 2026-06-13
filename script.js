const destination = document.getElementById("destination");
const pickup = document.getElementById("pickup");
const drop = document.getElementById("drop");
const pickupDate = document.getElementById("pickupDate");
const dropDate = document.getElementById("dropDate");
const vehicle = document.getElementById("vehicle");
const passengers = document.getElementById("passengers");
const accommodation = document.getElementById("accommodation");
const adults = document.getElementById("adults");
const children = document.getElementById("children");

const locationFields = document.getElementById("locationFields");
const dateFields = document.getElementById("dateFields");
const vehicleFields = document.getElementById("vehicleFields");
const stayFields = document.getElementById("stayFields");
const guestFields = document.getElementById("guestFields");

const previewBtn = document.getElementById("previewBtn");
const previewContent = document.getElementById("previewContent");
const sendWhatsapp = document.getElementById("sendWhatsapp");

const whatsappNumber = "917708642784";
let finalMessage = "";

function showField(field){
  if(field) field.classList.add("show");
}

function hideField(field){
  if(field) field.classList.remove("show");
}

destination?.addEventListener("input", () => {
  if(destination.value.trim().length > 1){
    showField(locationFields);
  }
});

[pickup, drop].forEach(input => {
  input?.addEventListener("input", () => {
    if(pickup.value.trim() && drop.value.trim()){
      showField(dateFields);
    }
  });
});

[pickupDate, dropDate].forEach(input => {
  input?.addEventListener("change", () => {
    if(pickupDate.value && dropDate.value){
      showField(vehicleFields);
    }
  });
});

[vehicle, passengers].forEach(input => {
  input?.addEventListener("input", () => {
    if(vehicle.value && passengers.value){
      showField(stayFields);
    }
  });

  input?.addEventListener("change", () => {
    if(vehicle.value && passengers.value){
      showField(stayFields);
    }
  });
});

accommodation?.addEventListener("change", () => {
  if(accommodation.value === "Yes"){
    showField(guestFields);
  }else{
    hideField(guestFields);
    adults.value = "";
    children.value = "";
  }
});

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

function validateForm(){
  if(!destination.value.trim()){
    alert("Please enter where you are planning to visit.");
    return false;
  }

  if(!pickup.value.trim() || !drop.value.trim()){
    alert("Please enter pickup and drop location.");
    return false;
  }

  if(!pickupDate.value || !dropDate.value){
    alert("Please select pickup and drop date/time.");
    return false;
  }

  if(!vehicle.value || !passengers.value){
    alert("Please select vehicle and passenger count.");
    return false;
  }

  if(!accommodation.value){
    alert("Please select accommodation option.");
    return false;
  }

  if(accommodation.value === "Yes"){
    if(!adults.value || children.value === ""){
      alert("Please enter adult and child count.");
      return false;
    }
  }

  return true;
}

previewBtn?.addEventListener("click", () => {
  if(!validateForm()) return;

  const stayNeeded = accommodation.value;

  finalMessage =
`Hello Beast Holidays,

I want to enquire about a trip.

Destination: ${destination.value}
Pickup Location: ${pickup.value}
Drop Location: ${drop.value}
Pickup Date & Time: ${formatDateTime(pickupDate.value)}
Drop Date & Time: ${formatDateTime(dropDate.value)}
Vehicle: ${vehicle.value}
Passenger Count: ${passengers.value}
Accommodation Needed: ${stayNeeded}
${stayNeeded === "Yes" ? `Adult Count: ${adults.value}
Child Count: ${children.value}
Note: Children above 10 years will be considered as adults.` : ""}

Please share the package details.`;

  previewContent.innerHTML = `
    <p><strong>Destination:</strong> ${destination.value}</p>
    <p><strong>Pickup:</strong> ${pickup.value}</p>
    <p><strong>Drop:</strong> ${drop.value}</p>
    <p><strong>Pickup Date & Time:</strong> ${formatDateTime(pickupDate.value)}</p>
    <p><strong>Drop Date & Time:</strong> ${formatDateTime(dropDate.value)}</p>
    <p><strong>Vehicle:</strong> ${vehicle.value}</p>
    <p><strong>Passengers:</strong> ${passengers.value}</p>
    <p><strong>Accommodation:</strong> ${stayNeeded}</p>
    ${stayNeeded === "Yes" ? `
      <p><strong>Adults:</strong> ${adults.value}</p>
      <p><strong>Children:</strong> ${children.value}</p>
      <p><strong>Note:</strong> Children above 10 years will be considered as adults.</p>
    ` : ""}
  `;

  const modal = new bootstrap.Modal(document.getElementById("previewModal"));
  modal.show();
});

sendWhatsapp?.addEventListener("click", () => {
  const encodedMessage = encodeURIComponent(finalMessage);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
});

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


// review
const reviews = [
  {
    name: "Malathi",
    text: "Excellent experience with Beast Holidays. The journey was well organized and the service was highly professional."
  },
  {
    name: "Dr. Ashish Jain",
    text: "Nice experience with Beast Holidays. They made our trip so comfortable. Special thanks to driver Arun."
  },
  {
    name: "Bharathi Amaran",
    text: "We went on a 5-day Sabarimala Yatra and the entire travel experience was amazing and extremely comfortable."
  },
  {
    name: "Kiran Mudunuru",
    text: "Stayed in Ooty for 4 days. The trip was excellent and well organised. Highly recommend Beast Holidays."
  },
  {
    name: "Om Thaker",
    text: "Wonderful trip with Beast Holidays. Everything was well-organized, smooth and completely stress-free."
  },
  {
    name: "Yogeswari Ponnambalam",
    text: "Best service and very affordable prices. Our guide and driver Arun Kumar made the experience special."
  },
  {
    name: "Bhuvanaa Suresh",
    text: "Wonderful experience. Clean vehicle and genuine driver. Safe and secure journey with elders and kids."
  },
  {
    name: "Raja Elangovan",
    text: "Amazing travel experience. The driver made the travel fun and safe. Planning to book again."
  },
  {
    name: "V Mani Lakshminarayanan",
    text: "Safe and smooth travel across Tamilnadu and Kerala because of the excellent service provided."
  },
  {
    name: "Rajesh Karanjkar",
    text: "Wonderful time travelling with Beast Holidays. Vehicle was clean and driver Arun Kumar was experienced."
  }
];

const reviewFlowTrack = document.getElementById("reviewFlowTrack");

if (reviewFlowTrack) {
  const repeatedReviews = [...reviews, ...reviews];

  reviewFlowTrack.innerHTML = repeatedReviews.map(review => `
    <div class="review-card">
      <h4>${review.name}</h4>
      <div class="review-stars">★★★★★</div>
      <p>${review.text}</p>
    </div>
  `).join("");
}
