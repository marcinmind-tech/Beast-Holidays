const WHATSAPP_NUMBER = "917708642784";

const packages = {
  "1D": [
    {
      id:"isha-marudhamalai",
      title:"Isha + Marudhamalai",
      route:"Coimbatore → Perur → Isha → Marudhamalai → Coimbatore",
      duration:"1 Day",
      image:"images/isha.webp",
      badges:["Spiritual","Family"],
      itinerary:[
        { day:"Day 1", text:"Visit Perur Patteswarar Temple, Isha Yoga Center, Adiyogi and Marudhamalai Temple before returning to Coimbatore." }
      ]
    },
    {
      id:"ooty-1d",
      title:"Ooty One Day Trip",
      route:"Coimbatore → Ooty → Coimbatore",
      duration:"1 Day",
      image:"images/ooty.webp",
      badges:["Hill Station","Bestseller"],
      itinerary:[
        { day:"Day 1", text:"Cover Doddabetta Peak, Ooty Lake, Botanical Garden, Rose Garden, Tea Factory and Chocolate Museum." }
      ]
    },
    {
      id:"topslip-masani",
      title:"Top Slip + Masani Amman",
      route:"Coimbatore → Top Slip → Masani Amman → Coimbatore",
      duration:"1 Day",
      image:"images/top-slip.webp",
      badges:["Nature","Temple"],
      itinerary:[
        { day:"Day 1", text:"Visit Top Slip, Parambikulam region and Masani Amman Temple before returning to Coimbatore." }
      ]
    },
    {
      id:"palani",
      title:"Palani Temple",
      route:"Coimbatore → Palani → Coimbatore",
      duration:"1 Day",
      image:"images/palani.webp",
      badges:["Pilgrimage","Temple"],
      itinerary:[
        { day:"Day 1", text:"Travel from Coimbatore to Palani, visit Palani Murugan Temple and return to Coimbatore." }
      ]
    }
  ],

  "2D": [
    {
      id:"ooty-2d",
      title:"Ooty + Coonoor",
      route:"Coimbatore → Ooty → Coonoor → Coimbatore",
      duration:"2 Days / 1 Night",
      image:"images/ooty.webp",
      badges:["Hill Station","Family"],
      itinerary:[
        { day:"Day 1", text:"Coimbatore to Ooty. Visit Doddabetta Peak, Tea Factory and Botanical Garden. Stay at Ooty." },
        { day:"Day 2", text:"Visit Rose Garden, Ooty Lake, Thread Garden, Wax Museum, Ketti Valley View, Sims Park, Dolphin’s Nose and Lamb’s Rock. Return to Coimbatore." }
      ]
    },
    {
      id:"valparai-2d",
      title:"Valparai",
      route:"Coimbatore → Valparai → Coimbatore",
      duration:"2 Days / 1 Night",
      image:"images/valparai.webp",
      badges:["Tea Estates","Nature"],
      itinerary:[
        { day:"Day 1", text:"Visit Eachanari Temple, Masani Amman Temple, Aliyar Dam and Monkey Falls on the way to Valparai. Stay at Valparai." },
        { day:"Day 2", text:"Cover Balaji Temple, Sholayar Dam, tea estates and viewpoints before returning to Coimbatore." }
      ]
    },
    {
      id:"kodaikanal-2d",
      title:"Kodaikanal",
      route:"Coimbatore → Kodaikanal → Coimbatore",
      duration:"2 Days / 1 Night",
      image:"images/kodaikanal.webp",
      badges:["Hill Station","Couple"],
      itinerary:[
        { day:"Day 1", text:"Visit Silver Cascade Falls, Kodaikanal Lake and Coaker’s Walk. Stay at Kodaikanal." },
        { day:"Day 2", text:"Visit Guna Cave, Dolphin’s Nose, Echo Point, Pillar Rocks, Bryant Park, Green Valley View and Kurinji Andavar Temple. Return to Coimbatore." }
      ]
    },
    {
      id:"munnar-2d",
      title:"Munnar",
      route:"Coimbatore → Munnar → Coimbatore",
      duration:"2 Days / 1 Night",
      image:"images/munnar.webp",
      badges:["Kerala","Tea Gardens"],
      itinerary:[
        { day:"Day 1", text:"Travel to Munnar via Chinnar Wildlife Sanctuary, Lakkam Waterfalls and Eravikulam National Park. Stay at Munnar." },
        { day:"Day 2", text:"Visit Rose Garden, Elephant Safari, Mattupetty Dam, Tea Garden, Echo Point and Top Station. Return to Coimbatore." }
      ]
    }
  ],

  "3D": [
    {
      id:"ooty-3d",
      title:"Ooty Complete",
      route:"Coimbatore → Ooty → Coonoor → Coimbatore",
      duration:"3 Days / 2 Nights",
      image:"images/ooty.webp",
      badges:["Bestseller","Hills"],
      itinerary:[
        { day:"Day 1", text:"Visit Doddabetta Peak, Tea Factory and Botanical Garden. Stay at Ooty." },
        { day:"Day 2", text:"Visit Pine Forest, Kamarajar Dam, Shooting Spot, Pykara Waterfalls and Pykara Lake. Stay at Ooty." },
        { day:"Day 3", text:"Visit Rose Garden, Ooty Lake, Thread Garden, Wax Museum, Ketti Valley View, Sims Park, Dolphin’s Nose and Lamb’s Rock. Return to Coimbatore." }
      ]
    },
    {
      id:"kodaikanal-3d",
      title:"Kodaikanal Complete",
      route:"Coimbatore → Kodaikanal → Coimbatore",
      duration:"3 Days / 2 Nights",
      image:"images/kodaikanal.webp",
      badges:["Hill Station","Family"],
      itinerary:[
        { day:"Day 1", text:"Coimbatore to Palani Murugan Temple, then to Kodaikanal. Visit Lake and Coaker’s Walk. Stay at Kodaikanal." },
        { day:"Day 2", text:"Visit Pillar Rocks, Bryant Park, Guna Cave and Green Valley View. Stay at Kodaikanal." },
        { day:"Day 3", text:"Visit Chettiar Park, Kurinji Andavar Temple, Silver Cascade Falls and return to Coimbatore." }
      ]
    },
    {
      id:"munnar-3d",
      title:"Munnar Complete",
      route:"Coimbatore → Munnar → Coimbatore",
      duration:"3 Days / 2 Nights",
      image:"images/munnar.webp",
      badges:["Kerala","Nature"],
      itinerary:[
        { day:"Day 1", text:"Visit Chinnar Wildlife Sanctuary, Lakkam Waterfalls and Eravikulam National Park. Stay at Munnar." },
        { day:"Day 2", text:"Visit Rose Garden, Elephant Safari, Mattupetty Dam, Tea Garden, Echo Point and Top Station. Stay at Munnar." },
        { day:"Day 3", text:"Visit Kalari/Kathakali show, Attukad Waterfalls, Pothamedu Viewpoint and Spice Garden. Return to Coimbatore." }
      ]
    },
    {
      id:"wayanad-3d",
      title:"Wayanad",
      route:"Coimbatore → Wayanad → Coimbatore",
      duration:"3 Days / 2 Nights",
      image:"images/wayanad.webp",
      badges:["Kerala","Wildlife"],
      itinerary:[
        { day:"Day 1", text:"Visit Banasura Sagar Dam, Edakkal Cave and Kuruva Island. Stay at Wayanad." },
        { day:"Day 2", text:"Visit Muthanga Wildlife Sanctuary and nearby nature spots. Stay at Wayanad." },
        { day:"Day 3", text:"Visit Pookode Lake and Soochipara Waterfalls before returning to Coimbatore." }
      ]
    }
  ],

  "4D": [
    {
      id:"ooty-4d",
      title:"Ooty Leisure",
      route:"Coimbatore → Coonoor → Ooty → Kotagiri → Coimbatore",
      duration:"4 Days / 3 Nights",
      image:"images/ooty.webp",
      badges:["Hill Station","Leisure"],
      itinerary:[
        { day:"Day 1", text:"Visit Coonoor, Ketti Valley View, Sims Park, Dolphin’s Nose, Lamb’s Rock, Rose Garden and Ooty Lake. Stay at Ooty." },
        { day:"Day 2", text:"Visit Pine Forest, Kamarajar Dam, 9th Mile Shooting Spot, Pykara Waterfalls and Pykara Dam. Stay at Ooty." },
        { day:"Day 3", text:"Visit Doddabetta Peak, Tea Factory and Botanical Garden. Stay at Ooty." },
        { day:"Day 4", text:"Visit Kotagiri, Catherine Waterfalls and Kodanadu Viewpoint before returning to Coimbatore." }
      ]
    },
    {
      id:"munnar-thekkady-4d",
      title:"Munnar + Thekkady",
      route:"Coimbatore → Munnar → Thekkady → Coimbatore",
      duration:"4 Days / 3 Nights",
      image:"images/thekkady.webp",
      badges:["Kerala","Wildlife"],
      itinerary:[
        { day:"Day 1", text:"Travel to Munnar with sightseeing at Lakkam Waterfalls and Eravikulam National Park. Stay at Munnar." },
        { day:"Day 2", text:"Visit Mattupetty Dam, Rose Garden, Echo Point, tea plantations and Top Station. Stay at Munnar." },
        { day:"Day 3", text:"Travel to Thekkady. Visit Spice Garden and optional off-road safari. Stay at Thekkady." },
        { day:"Day 4", text:"Visit Periyar Wildlife Sanctuary and local sightseeing before returning to Coimbatore." }
      ]
    },
    {
      id:"coorg-wayanad-4d",
      title:"Coorg + Wayanad",
      route:"Coimbatore → Coorg → Wayanad → Coimbatore",
      duration:"4 Days / 3 Nights",
      image:"images/coorg.webp",
      badges:["Combo","Nature"],
      itinerary:[
        { day:"Day 1", text:"Travel from Coimbatore to Coorg, check-in and relax. Stay at Coorg." },
        { day:"Day 2", text:"Visit Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple and Nisargadhama. Stay at Coorg." },
        { day:"Day 3", text:"Travel to Wayanad and visit Edakkal Caves and waterfalls based on time. Stay at Wayanad." },
        { day:"Day 4", text:"Visit Pookode Lake and Lakkidi View Point before returning to Coimbatore." }
      ]
    },
    {
      id:"kodaikanal-rameswaram-4d",
      title:"Kodaikanal + Rameswaram",
      route:"Coimbatore → Kodaikanal → Rameswaram → Madurai",
      duration:"4 Days / 3 Nights",
      image:"images/rameswaram.webp",
      badges:["Temple","Hills"],
      itinerary:[
        { day:"Day 1", text:"Visit Palani Temple, Silver Cascade Falls, Kodaikanal Lake and local sightseeing. Stay at Kodaikanal." },
        { day:"Day 2", text:"Visit Pine Forest, Guna Cave, Pillar Rocks and Green Valley View. Stay at Kodaikanal." },
        { day:"Day 3", text:"Travel to Rameswaram, temple darshan and local sightseeing. Stay at Rameswaram." },
        { day:"Day 4", text:"Travel to Madurai, visit Meenakshi Amman Temple and drop." }
      ]
    }
  ],

  "5D": [
    {
      id:"ooty-kodaikanal-5d",
      title:"Ooty + Kodaikanal",
      route:"Coimbatore → Ooty → Kodaikanal → Coimbatore",
      duration:"5 Days / 4 Nights",
      image:"images/ooty-kodaikanal.webp",
      badges:["Combo","Hill Stations"],
      itinerary:[
        { day:"Day 1", text:"Visit Coonoor spots and transfer to Ooty. Stay at Ooty." },
        { day:"Day 2", text:"Ooty sightseeing including Botanical Garden, Rose Garden, Ooty Lake, Doddabetta, Tea Factory and Wax Museum. Stay at Ooty." },
        { day:"Day 3", text:"Travel from Ooty to Kodaikanal and enjoy leisure evening. Stay at Kodaikanal." },
        { day:"Day 4", text:"Visit Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { day:"Day 5", text:"Optional shopping or lake visit and return to Coimbatore." }
      ]
    },
    {
      id:"munnar-varkala-alleppey-5d",
      title:"Munnar + Varkala + Alleppey",
      route:"Coimbatore → Munnar → Varkala → Alleppey → Coimbatore",
      duration:"5 Days / 4 Nights",
      image:"images/alleppey.webp",
      badges:["Kerala","Backwaters"],
      itinerary:[
        { day:"Day 1", text:"Travel to Munnar via scenic route and check in. Stay at Munnar." },
        { day:"Day 2", text:"Visit Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum and Eravikulam National Park. Stay at Munnar." },
        { day:"Day 3", text:"Transfer to Varkala. Visit Varkala Beach, Cliff and Janardanaswamy Temple. Stay at Varkala." },
        { day:"Day 4", text:"Transfer to Alleppey, enjoy houseboat/backwater experience. Stay at Alleppey." },
        { day:"Day 5", text:"Return drop at Coimbatore." }
      ]
    }
  ],

  "6D": [
    {
      id:"ooty-kodaikanal-madurai-6d",
      title:"Ooty + Kodaikanal + Madurai",
      route:"Coimbatore → Ooty → Kodaikanal → Madurai → Coimbatore",
      duration:"6 Days / 5 Nights",
      image:"images/madurai.webp",
      badges:["Family","Temple","Hills"],
      itinerary:[
        { day:"Day 1", text:"Visit Isha Yoga Center, Coonoor sightseeing and transfer to Ooty. Stay at Ooty." },
        { day:"Day 2", text:"Ooty sightseeing covering Botanical Garden, Rose Garden, Ooty Lake, Doddabetta and Tea Factory. Stay at Ooty." },
        { day:"Day 3", text:"Travel from Ooty to Kodaikanal. Stay at Kodaikanal." },
        { day:"Day 4", text:"Kodaikanal sightseeing including Pillar Rocks, Bryant Park, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { day:"Day 5", text:"Travel to Madurai. Visit Meenakshi Amman Temple and Thirumalai Nayakkar Mahal. Stay at Madurai." },
        { day:"Day 6", text:"Madurai local sightseeing and return to Coimbatore." }
      ]
    }
  ],

  "7D": [
    {
      id:"ooty-kodaikanal-munnar-7d",
      title:"Ooty + Kodaikanal + Munnar",
      route:"Coimbatore → Ooty → Kodaikanal → Munnar → Coimbatore",
      duration:"7 Days / 6 Nights",
      image:"images/munnar.webp",
      badges:["Full Vacation","Premium"],
      itinerary:[
        { day:"Day 1", text:"Coimbatore pickup, Coonoor sightseeing and transfer to Ooty. Stay at Ooty." },
        { day:"Day 2", text:"Ooty local sightseeing including Botanical Garden, Rose Garden, Ooty Lake and Doddabetta. Stay at Ooty." },
        { day:"Day 3", text:"Pykara, Pine Forest and Shooting Point sightseeing. Stay at Ooty." },
        { day:"Day 4", text:"Travel from Ooty to Kodaikanal. Stay at Kodaikanal." },
        { day:"Day 5", text:"Kodaikanal sightseeing including Pillar Rocks, Bryant Park, Guna Cave and Coaker’s Walk. Stay at Kodaikanal." },
        { day:"Day 6", text:"Travel from Kodaikanal to Munnar. Stay at Munnar." },
        { day:"Day 7", text:"Munnar sightseeing and return to Coimbatore." }
      ]
    }
  ]
};

const packageGrid = document.getElementById("packageGrid");
const durationButtons = document.querySelectorAll(".duration-btn");

const modalElement = document.getElementById("packageModal");
const packageModal = new bootstrap.Modal(modalElement);

const previewModalElement = document.getElementById("previewPackageModal");
const previewPackageModal = new bootstrap.Modal(previewModalElement);

const modalPackageTitle = document.getElementById("modalPackageTitle");
const modalPackageRoute = document.getElementById("modalPackageRoute");
const modalPackageBadges = document.getElementById("modalPackageBadges");
const modalItinerary = document.getElementById("modalItinerary");

const packageAccommodation = document.getElementById("packageAccommodation");
const accommodationExtras = document.querySelectorAll(".accommodation-extra");
const packageEnquiryForm = document.getElementById("packageEnquiryForm");

const scrollToEnquiryBtn = document.getElementById("scrollToEnquiryBtn");
const modalEnquiryFormArea = document.getElementById("modalEnquiryFormArea");

const travelDate = document.getElementById("travelDate");
const previewPackageBtn = document.getElementById("previewPackageBtn");
const packagePreviewContent = document.getElementById("packagePreviewContent");
const sendPackageWhatsapp = document.getElementById("sendPackageWhatsapp");

let selectedPackage = null;
let activeDuration = "1D";
let finalPackageMessage = "";

function setTodayAsMinDate(){
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayValue = `${yyyy}-${mm}-${dd}`;

  travelDate.min = todayValue;
}

function renderPackages(duration){
  activeDuration = duration;
  packageGrid.innerHTML = "";

  packages[duration].forEach(pkg => {
    const card = document.createElement("div");

  card.className = "package-col reveal active";
  card.id = pkg.id;

    card.innerHTML = `
      <div class="package-card" style="background-image:url('${pkg.image}')">
        <div class="package-card-content">
          <div class="package-badges">
            ${pkg.badges.map(badge => `<span>${badge}</span>`).join("")}
          </div>

          <h3>${pkg.title}</h3>
          <p>${pkg.route}</p>

          <div class="package-card-meta">
            <small><i class="bi bi-clock"></i> ${pkg.duration}</small>
            <small><i class="bi bi-geo-alt"></i> From Coimbatore</small>
          </div>

          <button class="view-package-btn" onclick="openPackage('${pkg.id}')">
            Enquire Now
          </button>
        </div>
      </div>
    `;

    packageGrid.appendChild(card);
  });
}

function openPackage(id){
  selectedPackage = packages[activeDuration].find(pkg => pkg.id === id);

  if(!selectedPackage) return;
history.pushState(null, "", `#${id}`);
  if(window.location.hash !== `#${id}`){
    history.pushState(null, "", `#${id}`);
  }

  modalPackageTitle.textContent = selectedPackage.title;
  modalPackageRoute.textContent = selectedPackage.route;

  modalPackageBadges.innerHTML = selectedPackage.badges
    .map(badge => `<span>${badge}</span>`)
    .join("");

  modalItinerary.innerHTML = selectedPackage.itinerary
    .map(item => `
      <div class="itinerary-item">
        <div class="itinerary-day">${item.day}</div>
        <div class="itinerary-text">${item.text}</div>
      </div>
    `)
    .join("");

  packageEnquiryForm.reset();
  accommodationExtras.forEach(field => field.classList.remove("show"));
  setTodayAsMinDate();

  packageModal.show();

  setTimeout(() => {
    modalEnquiryFormArea.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
  }, 350);
}

durationButtons.forEach(button => {
  button.addEventListener("click", () => {
    durationButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderPackages(button.dataset.duration);
  });
});

packageAccommodation.addEventListener("change", () => {
  if(packageAccommodation.value === "Yes"){
    accommodationExtras.forEach(field => field.classList.add("show"));
  }else{
    accommodationExtras.forEach(field => field.classList.remove("show"));
    document.getElementById("adultCount").value = "";
    document.getElementById("childCount").value = "";
  }
});

scrollToEnquiryBtn.addEventListener("click", () => {
  modalEnquiryFormArea.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
});

function validatePackageForm(){
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const pickup = document.getElementById("customerPickup").value.trim();
  const selectedDate = document.getElementById("travelDate").value;
  const vehicle = document.getElementById("vehicleSelect").value;
  const passengers = document.getElementById("passengerCount").value;
  const accommodation = document.getElementById("packageAccommodation").value;
  const adults = document.getElementById("adultCount").value;
  const children = document.getElementById("childCount").value;

  if(!name || !phone || !pickup || !selectedDate || !vehicle || !passengers || !accommodation){
    alert("Please fill all required fields.");
    return false;
  }

  if(phone.length !== 10 || isNaN(phone)){
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  const today = new Date();
  today.setHours(0,0,0,0);

  const chosenDate = new Date(selectedDate);
  chosenDate.setHours(0,0,0,0);

  if(chosenDate < today){
    alert("Older dates cannot be selected.");
    return false;
  }

  if(accommodation === "Yes" && (!adults || children === "")){
    alert("Please enter adult and child count.");
    return false;
  }

  return true;
}

previewPackageBtn.addEventListener("click", () => {
  if(!selectedPackage) return;
  if(!validatePackageForm()) return;

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const pickup = document.getElementById("customerPickup").value.trim();
  const selectedDate = document.getElementById("travelDate").value;
  const vehicle = document.getElementById("vehicleSelect").value;
  const passengers = document.getElementById("passengerCount").value;
  const accommodation = document.getElementById("packageAccommodation").value;
  const adults = document.getElementById("adultCount").value;
  const children = document.getElementById("childCount").value;

  const itineraryText = selectedPackage.itinerary
    .map(item => `${item.day}: ${item.text}`)
    .join("\n");

  finalPackageMessage =
`Hello Beast Holidays,

I want to enquire about this tour package.

Package: ${selectedPackage.title}
Duration: ${selectedPackage.duration}
Route: ${selectedPackage.route}

Customer Name: ${name}
Phone: ${phone}
Pickup Location: ${pickup}
Travel Date: ${selectedDate}
Vehicle: ${vehicle}
Passenger Count: ${passengers}
Accommodation Needed: ${accommodation}
${accommodation === "Yes" ? `Adult Count: ${adults}
Child Count: ${children}
Note: Children above 10 years will be considered as adults.` : ""}

Itinerary:
${itineraryText}

Please share availability and package details.`;

  packagePreviewContent.innerHTML = `
    <p><strong>Package:</strong> ${selectedPackage.title}</p>
    <p><strong>Duration:</strong> ${selectedPackage.duration}</p>
    <p><strong>Route:</strong> ${selectedPackage.route}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Pickup:</strong> ${pickup}</p>
    <p><strong>Travel Date:</strong> ${selectedDate}</p>
    <p><strong>Vehicle:</strong> ${vehicle}</p>
    <p><strong>Passengers:</strong> ${passengers}</p>
    <p><strong>Accommodation:</strong> ${accommodation}</p>
    ${accommodation === "Yes" ? `
      <p><strong>Adults:</strong> ${adults}</p>
      <p><strong>Children:</strong> ${children}</p>
      <p><strong>Note:</strong> Children above 10 years will be considered as adults.</p>
    ` : ""}
  `;

  previewPackageModal.show();
});

sendPackageWhatsapp.addEventListener("click", () => {
  const encodedMessage = encodeURIComponent(finalPackageMessage);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
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

setTodayAsMinDate();
renderPackages("1D");

function openPackageFromHash(){
  const hash = window.location.hash.replace("#", "");
  if(!hash) return;

  for(const duration in packages){
    const found = packages[duration].find(pkg => pkg.id === hash);

    if(found){
      durationButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.duration === duration);
      });

      renderPackages(duration);

      setTimeout(() => {
        const targetCard = document.getElementById(hash);

        if(targetCard){
          targetCard.scrollIntoView({
            behavior:"smooth",
            block:"center"
          });

          targetCard.classList.add("highlight-package");

          setTimeout(() => {
            targetCard.classList.remove("highlight-package");
          }, 2500);
        }
      }, 200);

      break;
    }
  }
}

window.addEventListener("hashchange", openPackageFromHash);
openPackageFromHash();
