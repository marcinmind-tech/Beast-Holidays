const WHATSAPP_NUMBER = "917708642784";

const packages = {
  "1D": [
    {
      "id": "isha-marudhamalai",
      "title": "Isha + Marudhamalai",
      "route": "Coimbatore → Isha → Marudhamalai → Coimbatore",
      "duration": "1 Day",
      "image": "images/isha.webp",
      "badges": ["Pilgrimage", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Visit Perur Patteswarar Temple, Isha Yoga Center, and Marudhamalai." }
      ]
    },
    {
      "id": "ooty",
      "title": "Ooty",
      "route": "Coimbatore → Ooty → Coimbatore",
      "duration": "1 Day",
      "image": "images/ooty.webp",
      "badges": ["Hill Station", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Doddabetta Peak, Ooty Lake, Botanical Garden, Rose Garden, Tea Factory and Chocolate Museum." }
      ]
    },
    {
      "id": "top-slip-masani-amman",
      "title": "Top Slip + Masani Amman",
      "route": "Coimbatore → Top Slip → Masani Amman → Coimbatore",
      "duration": "1 Day",
      "image": "images/top-slip.webp",
      "badges": ["Nature", "Temple"],
      "itinerary": [
        { "day": "Day 1", "text": "Visit Top Slip, Parambikulam and Masani Amman Temple." }
      ]
    },
    {
      "id": "guruvayur",
      "title": "Guruvayur",
      "route": "Coimbatore → Guruvayur → Coimbatore",
      "duration": "1 Day",
      "image": "images/guruvayur.webp",
      "badges": ["Temple", "Kerala"],
      "itinerary": [
        { "day": "Day 1", "text": "Visit Guruvayur Krishna Temple, Punnathur Kotta, Mammiyur Sri Mahadeva Temple and Chavakkad Beach." }
      ]
    },
    {
      "id": "palani",
      "title": "Palani",
      "route": "Coimbatore → Palani → Coimbatore",
      "duration": "1 Day",
      "image": "images/palani.webp",
      "badges": ["Pilgrimage", "Temple"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Palani, Palani Murugan Temple and back to Coimbatore." }
      ]
    }
  ],

  "2D": [
    {
      "id": "ooty-2d",
      "title": "Ooty",
      "route": "Coimbatore → Ooty → Coonoor → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/ooty.webp",
      "badges": ["Hill Station", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty, Doddabetta Peak, Tea Factory, Botanical Garden. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty to Rose Garden, Lake, Thread Garden, Wax Museum, Coonoor, Ketti Valley View, MRC Military Camp outside view, Sims Park, Dolphin’s Nose, Lamb’s Rock and back to Coimbatore." }
      ]
    },
    {
      "id": "valparai-2d",
      "title": "Valparai",
      "route": "Coimbatore → Valparai → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/valparai.webp",
      "badges": ["Tea Estates", "Nature"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Valparai, on the way Eachanari Temple, Masani Amman Temple, Aliyar Dam and Monkey Falls. Stay at Valparai." },
        { "day": "Day 2", "text": "Balaji Temple, Sholayar Dam, Valparai Tea Estate, Valparai viewpoints and back to Coimbatore." }
      ]
    },
    {
      "id": "kodaikanal-2d",
      "title": "Kodaikanal",
      "route": "Coimbatore → Kodaikanal → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/kodaikanal.webp",
      "badges": ["Hill Station", "Couple"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Kodaikanal, Silver Cascade Falls, Kodaikanal Lake, Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Guna Cave, Dolphin’s Nose, Echo Point, Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple and back to Coimbatore." }
      ]
    },
    {
      "id": "munnar-2d",
      "title": "Munnar",
      "route": "Coimbatore → Munnar → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/munnar.webp",
      "badges": ["Kerala", "Tea Gardens"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar, Chinnar Wildlife Sanctuary, Lakkam Waterfalls, Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 2", "text": "Rose Garden, Elephant Safari, Mattupatty Dam, Tea Garden, Echo Point, Top Station and back to Coimbatore." }
      ]
    },
    {
      "id": "mysore-2d",
      "title": "Mysore",
      "route": "Coimbatore → Mysore → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/mysore.webp",
      "badges": ["Heritage", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Mysore, Mysore Palace, Jaganmohan Palace, St. Philomena’s Church, Lalith Mahal Palace and Mysore Zoo. Stay at Mysore." },
        { "day": "Day 2", "text": "Chamundeshwari Temple, Rail Museum, Brindavan Gardens and back to Coimbatore." }
      ]
    },
    {
      "id": "malampuzha-guruvayur-2d",
      "title": "Malampuzha Dam + Guruvayur",
      "route": "Coimbatore → Malampuzha → Guruvayur → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/guruvayur.webp",
      "badges": ["Temple", "Kerala"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Punnathur Kotta, Mammiyur Sri Mahadeva Temple and Malampuzha Dam. Stay at Guruvayur." },
        { "day": "Day 2", "text": "Guruvayur Krishna Temple, Chavakkad Beach and back to Coimbatore." }
      ]
    },
    {
      "id": "sabarimalai-2d",
      "title": "Sabarimalai",
      "route": "Coimbatore → Sabarimalai → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/sabarimalai.webp",
      "badges": ["Pilgrimage", "Temple"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Pamba, Sabarimalai. Stay at Sabarimalai." },
        { "day": "Day 2", "text": "Sabarimalai, Erumeli and back to Coimbatore." }
      ]
    },
    {
      "id": "rameshwaram-2d",
      "title": "Rameshwaram",
      "route": "Coimbatore → Rameshwaram → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/rameswaram.webp",
      "badges": ["Temple", "Pilgrimage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Rameshwaram Temple. Stay at Rameswaram." },
        { "day": "Day 2", "text": "Dhanushkodi, APJ Memorial Museum, Pamban Bridge and back to Coimbatore." }
      ]
    },
    {
      "id": "thiruchendur-2d",
      "title": "Thiruchendur",
      "route": "Coimbatore → Thiruchendur → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/thiruchendur.webp",
      "badges": ["Temple", "Pilgrimage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Thiruchendur Temple. Stay at Thiruchendur." },
        { "day": "Day 2", "text": "Temple visit and back to Coimbatore." }
      ]
    },
    {
      "id": "thiruvannamalai-2d",
      "title": "Thiruvannamalai",
      "route": "Coimbatore → Thiruvannamalai → Coimbatore",
      "duration": "2 Days / 1 Night",
      "image": "images/thiruvannamalai.webp",
      "badges": ["Temple", "Pilgrimage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Thiruvannamalai, Thiruvannamalai Girivalam. Stay at Thiruvannamalai." },
        { "day": "Day 2", "text": "Temple darshan and back to Coimbatore." }
      ]
    }
  ],

  "3D": [
    {
      "id": "ooty-3d",
      "title": "Ooty",
      "route": "Coimbatore → Ooty → Coonoor → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/ooty.webp",
      "badges": ["Bestseller", "Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty, Doddabetta Peak, Tea Factory, Botanical Garden. Stay at Ooty." },
        { "day": "Day 2", "text": "Pine Forest, Kamarajar Dam outside view, 6th Mile, 9th Mile Shooting Spot, Pykara Waterfalls and Pykara Lake. Stay at Ooty." },
        { "day": "Day 3", "text": "Rose Garden, Ooty Lake, Thread Garden, Wax Museum, Coonoor, Ketti Valley View, Sims Park, Dolphin’s Nose, Lamb’s Rock and back to Coimbatore." }
      ]
    },
    {
      "id": "kodaikanal-3d",
      "title": "Kodaikanal",
      "route": "Coimbatore → Kodaikanal → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/kodaikanal.webp",
      "badges": ["Hill Station", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Palani Murugan Temple, Palani to Kodaikanal, Lake and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Pillar Rocks, Bryant Park, Guna Cave, Green Valley View. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Chettiar Park, Kurinji Andavar Temple, Silver Cascade Falls and back to Coimbatore." }
      ]
    },
    {
      "id": "munnar-3d",
      "title": "Munnar",
      "route": "Coimbatore → Munnar → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/munnar.webp",
      "badges": ["Kerala", "Nature"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar, Chinnar Wildlife Sanctuary, Lakkam Waterfalls, Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 2", "text": "Rose Garden, Elephant Safari, Mattupatty Dam, Tea Garden, Echo Point and Top Station. Stay at Munnar." },
        { "day": "Day 3", "text": "Kalari and Kathakali live performance show, Attukadu Waterfalls, Pothamedu Viewpoint, Spice Garden and back to Coimbatore." }
      ]
    },
    {
      "id": "wayanad-3d",
      "title": "Wayanad",
      "route": "Coimbatore → Wayanad → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/wayanad.webp",
      "badges": ["Kerala", "Wildlife"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Wayanad, Banasura Sagar Dam, Edakkal Cave, Kuruva Island. Stay at Wayanad." },
        { "day": "Day 2", "text": "Muthunga Wildlife Sanctuary, Pakshipathalam and Pazhassi tourist place. Stay at Wayanad." },
        { "day": "Day 3", "text": "Pookot Lake, Soochipara Waterfalls and back to Coimbatore." }
      ]
    },
    {
      "id": "valparai-3d",
      "title": "Valparai + Athirapally",
      "route": "Coimbatore → Valparai → Athirapally → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/athirapally.webp",
      "badges": ["Waterfalls", "Tea Estates"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Valparai, Loam's View Point, Monkey Falls, Tea Estates, Tiger Valley and Balaji Temple. Overnight stay." },
        { "day": "Day 2", "text": "Athirapally Waterfalls, Vazhachal Falls and Charpa Falls." },
        { "day": "Day 3", "text": "Nallamudi Viewpoint, Chinna Kallar Falls, Valparai sightseeing and back." }
      ]
    },
    {
      "id": "mysore-coorg-3d",
      "title": "Mysore + Coorg",
      "route": "Coimbatore → Coorg → Mysore → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/coorg.webp",
      "badges": ["Heritage", "Nature"],
      "itinerary": [
        { "day": "Day 1", "text": "Dubare Elephant Camp, Golden Temple and Nisargadhama Forest." },
        { "day": "Day 2", "text": "Abbey Falls, Coffee Plant, Raja Seat and Mysore halt." },
        { "day": "Day 3", "text": "Mysore Zoo, Rail Museum, Mysore Palace, Chamundeshwari Temple, Lalith Mahal Palace and back to Coimbatore." }
      ]
    },
    {
      "id": "navagraha-temple-3d",
      "title": "Navagraha Temple",
      "route": "Coimbatore → Thanjavur → Mayiladuthurai → Thirunallaru → Coimbatore",
      "duration": "3 Days / 2 Nights",
      "image": "images/navagraha.webp",
      "badges": ["Temple", "Pilgrimage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Thanjavur, Brihadeeswara Temple, Thingalur, Alangudi and Thirunageswaram. Stay at Mayiladuthurai." },
        { "day": "Day 2", "text": "Suryanar, Kanjanoor, Vaitheeswaran and Thiruvenkadu. Stay at Thirunallaru." },
        { "day": "Day 3", "text": "Keezhperumpallam, Thirunallaru Sani Bhagavan Temple and back to Coimbatore." }
      ]
    }
  ],

  "4D": [
    {
      "id": "ooty-4d",
      "title": "Ooty",
      "route": "Coimbatore → Coonoor → Ooty → Kotagiri → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/ooty.webp",
      "badges": ["Hill Station", "Leisure"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coonoor, Ketti Valley View, MRC Military Camp outside view, Sim’s Park, Dolphin’s Nose, Lamb’s Rock, Ooty, Rose Garden, Lake, Thread Garden and Wax Museum. Stay at Ooty." },
        { "day": "Day 2", "text": "Pine Forest, Kamarajar Dam, Tree Garden, 9th Mile Shooting Spot, Pykara Waterfalls and Pykara Dam. Stay at Ooty." },
        { "day": "Day 3", "text": "Doddabetta Peak, Tea Factory and Botanical Garden. Stay at Ooty." },
        { "day": "Day 4", "text": "Ooty to Kotagiri, Catherine Waterfalls, Kodanadu Viewpoint and back to Coimbatore." }
      ]
    },
    {
      "id": "kodaikanal-4d",
      "title": "Kodaikanal",
      "route": "Coimbatore → Kodaikanal → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/kodaikanal.webp",
      "badges": ["Hill Station", "Family"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Palani Andavar Temple, Kodaikanal, Silver Cascade Waterfalls. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Kodaikanal Lake, Bryant Park, Coaker’s Walk, Chettiar Park, Kurinji Andavar Temple. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Pine Forest, Guna Cave, Pillar Rocks, Green Valley View, Moyer Point and Silent Valley. Stay at Kodaikanal." },
        { "day": "Day 4", "text": "Back to Coimbatore." }
      ]
    },
    {
      "id": "ooty-mysore-4d",
      "title": "Ooty + Mysore",
      "route": "Coimbatore → Ooty → Mysore → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/mysore.webp",
      "badges": ["Hills", "Heritage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coonoor, Sims Park, Dolphin's Nose, Lamb's Rock, Ooty and Tea Garden. Stay at Ooty." },
        { "day": "Day 2", "text": "Rose Garden, Botanical Garden, Lake, Doddabetta Peak, Tea Factory, Wax Museum and Karnataka Garden. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty checkout, Pine Tree Forest, 9th Mile Shooting Spot, Pykara Waterfalls, Mudumalai or Bandipur Wildlife Safari and Mysore Palace. Stay at Mysore." },
        { "day": "Day 4", "text": "Mysore Zoo, Chamundeshwari Temple and back to Coimbatore." }
      ]
    },
    {
      "id": "munnarthekkady-4d",
      "title": "Munnar + Thekkady",
      "route": "Coimbatore → Munnar → Thekkady → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/thekkady.webp",
      "badges": ["Kerala", "Wildlife"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar, sightseeing at Lakkam Waterfalls and Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 2", "text": "Mattupatty Dam, Rose Garden, Echo Point, Tea Plantation and Top Station. Stay at Munnar." },
        { "day": "Day 3", "text": "Kalari and Kathakali live show, Spice Garden and optional off-road safari. Stay at Thekkady." },
        { "day": "Day 4", "text": "Periyar Wildlife Sanctuary, local sightseeing and back to Coimbatore." }
      ]
    },
    {
      "id": "coorgchikmagalur-4d",
      "title": "Coorg + Chikmagalur",
      "route": "Coimbatore → Coorg → Chikmagalur → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/chikmagalur.webp",
      "badges": ["Nature", "Coffee Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coorg. Scenic drive, check-in and relax. Stay at Coorg." },
        { "day": "Day 2", "text": "Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple, optional Dubare Elephant Camp and Cauvery Nisargadhama. Stay at Coorg." },
        { "day": "Day 3", "text": "Coorg to Chikmagalur. Visit Mullayanagiri Peak, Baba Budangiri and Hirekolale Lake. Stay at Chikmagalur." },
        { "day": "Day 4", "text": "Optional coffee plantation visit and return drop at Coimbatore." }
      ]
    },
    {
      "id": "coorgwayanad-4d",
      "title": "Coorg + Wayanad",
      "route": "Coimbatore → Coorg → Wayanad → Coimbatore",
      "duration": "4 Days / 3 Nights",
      "image": "images/coorg.webp",
      "badges": ["Nature", "Combo"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coorg. Scenic drive, check-in and relax. Stay at Coorg." },
        { "day": "Day 2", "text": "Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple, optional Dubare Elephant Camp and Cauvery Nisargadhama. Stay at Coorg." },
        { "day": "Day 3", "text": "Coorg to Wayanad. Visit Edakkal Caves and Soochipara or Meenmutty Falls based on time. Stay at Wayanad." },
        { "day": "Day 4", "text": "Visit Pookode Lake, Lakkidi View Point and return to Coimbatore." }
      ]
    },
    {
      "id": "kodaikanal-madurai-rameswaram-4d",
      "title": "Kodaikanal + Madurai + Rameswaram",
      "route": "Coimbatore → Kodaikanal → Rameswaram → Madurai",
      "duration": "4 Days / 3 Nights",
      "image": "images/rameswaram.webp",
      "badges": ["Temple", "Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Palani Murugan Temple, Silver Cascade Waterfalls, Kodaikanal Lake, Bryant Park, Coaker’s Walk, Chettiar Park and Kurinji Andavar Temple. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Pine Tree Forest, Guna Cave, Pillar Rocks, Green Valley View, Moyer Point and Silent Valley. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Kodaikanal to Rameswaram, temple darshan and local sightseeing. Stay at Rameswaram." },
        { "day": "Day 4", "text": "Rameswaram to Madurai, Meenakshi Amman Temple and drop at Madurai Railway Station or Airport." }
      ]
    }
  ],

  "5D": [
    {
      "id": "ooty-5d",
      "title": "Ooty",
      "route": "Coimbatore → Ooty → Avalanche → Mudumalai → Coimbatore",
      "duration": "5 Days / 4 Nights",
      "image": "images/ooty.webp",
      "badges": ["Hill Station", "Leisure"],
      "itinerary": [
        { "day": "Day 1", "text": "Arrival and Coonoor sightseeing. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty sightseeing: Botanical Garden, Rose Garden, Ooty Lake, Thread Garden, Doddabetta Peak, Tea Factory and Museum, Wax Museum. Stay at Ooty." },
        { "day": "Day 3", "text": "Avalanche sightseeing. Visit Avalanche Lake, Emerald Lake by jeep if required, enjoy nature and return to Ooty. Stay at Ooty." },
        { "day": "Day 4", "text": "Pykara and Mudumalai. Visit Pykara Lake, Pykara Falls, Mudumalai Wildlife Sanctuary optional safari and return to Ooty. Stay at Ooty." },
        { "day": "Day 5", "text": "Check-out, optional local shopping and drop at Coimbatore or Mettupalayam." }
      ]
    },
    {
      "id": "ooty-kodaikanal-5d",
      "title": "Ooty + Kodaikanal",
      "route": "Coimbatore → Ooty → Kodaikanal → Coimbatore",
      "duration": "5 Days / 4 Nights",
      "image": "images/ooty-kodaikanal.webp",
      "badges": ["Combo", "Hill Stations"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coonoor and Ooty. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty sightseeing: Botanical Garden, Rose Garden, Ooty Lake, Thread Garden, Doddabetta Peak, Tea Factory and Museum, Wax Museum. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Kodaikanal. Scenic hill drive, check-in and evening leisure. Stay at Kodaikanal." },
        { "day": "Day 4", "text": "Kodaikanal sightseeing: Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 5", "text": "Kodaikanal to Coimbatore. Optional shopping or lake visit and drop at Coimbatore." }
      ]
    },
    {
      "id": "ooty-mysore-bangalore-5d",
      "title": "Ooty + Mysore + Bangalore",
      "route": "Coimbatore → Ooty → Mysore → Bangalore",
      "duration": "5 Days / 4 Nights",
      "image": "images/bangalore.webp",
      "badges": ["Hills", "City"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Coonoor and Ooty. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty sightseeing: Botanical Garden, Rose Garden, Ooty Lake, Thread Garden, Doddabetta Peak, Tea Factory and Museum, Wax Museum. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Mysore via Pykara. Visit Pykara Lake, Pykara Falls, drive via Mudumalai and Bandipur forest route, check-in. Stay at Mysore." },
        { "day": "Day 4", "text": "Mysore sightseeing: Mysore Palace, Chamundi Hills, Mysore Zoo, Brindavan Gardens and St. Philomena’s Church. Stay at Mysore." },
        { "day": "Day 5", "text": "Mysore to Bangalore. Visit Tipu Sultan’s Palace, Lalbagh Botanical Garden, Vidhana Soudha outside view and drop." }
      ]
    },
    {
      "id": "kodaikanal-munnar-5d",
      "title": "Kodaikanal + Munnar",
      "route": "Coimbatore → Munnar → Kodaikanal → Coimbatore",
      "duration": "5 Days / 4 Nights",
      "image": "images/kodaikanal-munnar.webp",
      "badges": ["Hills", "Kerala"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar. Scenic hill drive via waterfalls, check-in and relax. Stay at Munnar." },
        { "day": "Day 2", "text": "Munnar sightseeing: Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum and Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 3", "text": "Munnar to Kodaikanal. Scenic hill drive, check-in and evening leisure or lake visit. Stay at Kodaikanal." },
        { "day": "Day 4", "text": "Kodaikanal sightseeing: Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 5", "text": "Kodaikanal to Coimbatore. Optional shopping or lake visit and drop at Coimbatore." }
      ]
    },
    {
      "id": "kodaikanal-madurai-rameshwaram-5d",
      "title": "Kodaikanal + Madurai + Rameshwaram",
      "route": "Coimbatore → Kodaikanal → Rameshwaram → Madurai → Coimbatore",
      "duration": "5 Days / 4 Nights",
      "image": "images/rameswaram.webp",
      "badges": ["Temple", "Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Kodaikanal. Scenic hill drive, check-in, visit Kodaikanal Lake and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Kodaikanal sightseeing: Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave and Pine Forest. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Kodaikanal to Rameswaram. Visit Ramanathaswamy Temple and Pamban Bridge if time permits. Stay at Rameswaram." },
        { "day": "Day 4", "text": "Rameswaram to Madurai. Visit Dhanushkodi, APJ Abdul Kalam Memorial, proceed to Madurai and visit Meenakshi Amman Temple. Stay at Madurai." },
        { "day": "Day 5", "text": "Madurai to Coimbatore. Optional Thirumalai Nayakkar Mahal visit and drop at Coimbatore." }
      ]
    },
    {
      "id": "munnar-varkala-alleppey-5d",
      "title": "Munnar + Varkala + Alleppey",
      "route": "Coimbatore → Munnar → Varkala → Alleppey → Coimbatore",
      "duration": "5 Days / 4 Nights",
      "image": "images/alleppey.webp",
      "badges": ["Kerala", "Backwaters"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar. Scenic hill drive via Valara Falls and Cheeyappara Falls, check-in and relax. Stay at Munnar." },
        { "day": "Day 2", "text": "Munnar sightseeing: Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum and Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 3", "text": "Munnar to Varkala. Visit Varkala Beach, Cliff, Janardanaswamy Temple and leisure time at beach. Stay at Varkala." },
        { "day": "Day 4", "text": "Varkala to Alleppey. Houseboat check-in, backwater cruise experience and overnight stay. Stay at Alleppey." },
        { "day": "Day 5", "text": "Alleppey to Coimbatore. Check-out and return drop at Coimbatore." }
      ]
    }
  ],

  "6D": [
    {
      "id": "ooty-kodaikanal-madurai-6d",
      "title": "Ooty + Kodaikanal + Madurai",
      "route": "Coimbatore → Ooty → Kodaikanal → Madurai",
      "duration": "6 Days / 5 Nights",
      "image": "images/madurai.webp",
      "badges": ["Family", "Temple", "Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Isha and Coonoor to Ooty. Visit Isha Yoga Center, Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty sightseeing: Botanical Garden, Rose Garden, Ooty Lake, Thread Garden, Doddabetta Peak, Tea Factory and Museum, Wax Museum. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Kodaikanal. Scenic hill drive, check-in and evening leisure. Stay at Kodaikanal." },
        { "day": "Day 4", "text": "Kodaikanal sightseeing: Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 5", "text": "Kodaikanal to Madurai. Visit Meenakshi Amman Temple, Thirumalai Nayakkar Mahal and evening shopping. Stay at Madurai." },
        { "day": "Day 6", "text": "Madurai sightseeing. Visit Gandhi Memorial Museum, local markets and drop at Coimbatore or Madurai." }
      ]
    },
    {
      "id": "kodaikanal-ooty-mysore-6d",
      "title": "Kodaikanal + Ooty + Mysore",
      "route": "Coimbatore → Kodaikanal → Ooty → Mysore → Coimbatore",
      "duration": "6 Days / 5 Nights",
      "image": "images/mysore.webp",
      "badges": ["Hills", "Heritage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Palani Murugan Temple, Kodaikanal and Silver Cascade Waterfalls. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Pine Tree Forest, Guna Cave, Pillar Rocks, Moyer Point, Kurinji Andavar Temple, Rose Garden and Dolphin’s Nose. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Kodaikanal to Coonoor, Coonoor local sightseeing and transfer to Ooty. Stay at Ooty." },
        { "day": "Day 4", "text": "Rose Garden, Botanical Garden, Lake, Doddabetta Peak, Tea Factory and Wax Museum. Stay at Ooty." },
        { "day": "Day 5", "text": "Pine Tree Forest, 9th Mile Shooting Spot, Pykara Waterfalls, Pykara Dam, Kamarajar Dam, Mudumalai National Park and Mysore. Stay at Mysore." },
        { "day": "Day 6", "text": "Mysore Zoo, Mysore Palace, Chamundeshwari Temple and back to Coimbatore." }
      ]
    },
    {
      "id": "ooty-coorg-mysore-bangalore-6d",
      "title": "Ooty + Coorg + Mysore + Bangalore",
      "route": "Coimbatore → Ooty → Coorg → Mysore → Bangalore",
      "duration": "6 Days / 5 Nights",
      "image": "images/bangalore.webp",
      "badges": ["Hills", "City"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty via Coonoor sightseeing. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty local sightseeing including gardens, lake, viewpoints and tea factory. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Coorg via scenic route. Check-in and relax. Stay at Coorg." },
        { "day": "Day 4", "text": "Coorg sightseeing including Abbey Falls, Raja’s Seat, Madikeri Fort and Omkareshwara Temple. Stay at Coorg." },
        { "day": "Day 5", "text": "Coorg to Mysore. Visit Mysore Palace, Chamundi Hills and Brindavan Gardens. Stay at Mysore." },
        { "day": "Day 6", "text": "Mysore to Bangalore sightseeing and drop." }
      ]
    },
    {
      "id": "munnar-alleppey-varkala-kovalam-trivandrum-6d",
      "title": "Munnar + Alleppey + Varkala + Kovalam + Trivandrum",
      "route": "Coimbatore → Munnar → Alleppey → Varkala → Kovalam → Trivandrum",
      "duration": "6 Days / 5 Nights",
      "image": "images/kovalam.webp",
      "badges": ["Kerala", "Beaches"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar. Scenic hill drive and check-in. Stay at Munnar." },
        { "day": "Day 2", "text": "Munnar sightseeing including Mattupetty Dam, Echo Point, Tea Museum and Eravikulam National Park. Stay at Munnar." },
        { "day": "Day 3", "text": "Munnar to Alleppey. Enjoy backwater experience and stay." },
        { "day": "Day 4", "text": "Alleppey to Varkala. Visit Varkala Beach, cliff and temple. Stay at Varkala." },
        { "day": "Day 5", "text": "Varkala to Kovalam. Visit beaches and leisure time. Stay at Kovalam." },
        { "day": "Day 6", "text": "Trivandrum sightseeing and drop." }
      ]
    },
    {
      "id": "ooty-wayanad-coorg-6d",
      "title": "Ooty + Wayanad + Coorg",
      "route": "Coimbatore → Ooty → Wayanad → Coorg → Coimbatore",
      "duration": "6 Days / 5 Nights",
      "image": "images/wayanad.webp",
      "badges": ["Nature", "Combo"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty, Coonoor sightseeing and Ooty check-in. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty local sightseeing including gardens, lake, Doddabetta and tea factory. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Wayanad via scenic route. Stay at Wayanad." },
        { "day": "Day 4", "text": "Wayanad sightseeing including Edakkal Caves, waterfalls and viewpoints. Stay at Wayanad." },
        { "day": "Day 5", "text": "Wayanad to Coorg. Visit Coorg local places and stay." },
        { "day": "Day 6", "text": "Coorg sightseeing and return to Coimbatore." }
      ]
    }
  ],

  "7D": [
    {
      "id": "ooty-kodaikanal-munnar-7d",
      "title": "Ooty + Kodaikanal + Munnar",
      "route": "Coimbatore → Ooty → Kodaikanal → Munnar → Coimbatore",
      "duration": "7 Days / 6 Nights",
      "image": "images/munnar.webp",
      "badges": ["Full Vacation", "Premium"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore pickup, Coonoor sightseeing and transfer to Ooty. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty local sightseeing including Botanical Garden, Rose Garden, Ooty Lake and Doddabetta. Stay at Ooty." },
        { "day": "Day 3", "text": "Pykara, Pine Forest and Shooting Point sightseeing. Stay at Ooty." },
        { "day": "Day 4", "text": "Travel from Ooty to Kodaikanal. Stay at Kodaikanal." },
        { "day": "Day 5", "text": "Kodaikanal sightseeing including Pillar Rocks, Bryant Park, Guna Cave and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 6", "text": "Travel from Kodaikanal to Munnar. Stay at Munnar." },
        { "day": "Day 7", "text": "Munnar sightseeing and return to Coimbatore." }
      ]
    },
    {
      "id": "ooty-kodaikanal-madurai-rameswaram-7d",
      "title": "Ooty + Kodaikanal + Madurai + Rameswaram",
      "route": "Coimbatore → Ooty → Kodaikanal → Madurai → Rameswaram",
      "duration": "7 Days / 6 Nights",
      "image": "images/rameswaram.webp",
      "badges": ["Temple", "Hills"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty via Coonoor sightseeing. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty local sightseeing including gardens, lake, Doddabetta and tea factory. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Kodaikanal. Scenic drive and evening leisure. Stay at Kodaikanal." },
        { "day": "Day 4", "text": "Kodaikanal sightseeing including Pillar Rocks, Guna Cave, Pine Forest and Coaker’s Walk. Stay at Kodaikanal." },
        { "day": "Day 5", "text": "Kodaikanal to Madurai. Visit Meenakshi Amman Temple and local places. Stay at Madurai." },
        { "day": "Day 6", "text": "Madurai to Rameswaram. Temple darshan and local sightseeing. Stay at Rameswaram." },
        { "day": "Day 7", "text": "Dhanushkodi, Pamban Bridge, APJ Memorial and drop." }
      ]
    },
    {
      "id": "ooty-mysore-coorg-bangalore-7d",
      "title": "Ooty + Mysore + Coorg + Bangalore",
      "route": "Coimbatore → Ooty → Mysore → Coorg → Bangalore",
      "duration": "7 Days / 6 Nights",
      "image": "images/coorg.webp",
      "badges": ["Hills", "Heritage"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Ooty via Coonoor sightseeing. Stay at Ooty." },
        { "day": "Day 2", "text": "Ooty local sightseeing. Stay at Ooty." },
        { "day": "Day 3", "text": "Ooty to Mysore via Pykara and forest route. Stay at Mysore." },
        { "day": "Day 4", "text": "Mysore sightseeing including palace, zoo, Chamundi Hills and Brindavan Gardens. Stay at Mysore." },
        { "day": "Day 5", "text": "Mysore to Coorg. Visit local Coorg places. Stay at Coorg." },
        { "day": "Day 6", "text": "Coorg sightseeing including Abbey Falls, Raja’s Seat and Madikeri. Stay at Coorg." },
        { "day": "Day 7", "text": "Coorg to Bangalore sightseeing and drop." }
      ]
    },
    {
      "id": "kodaikanal-ooty-mysore-bangalore-7d",
      "title": "Kodaikanal + Ooty + Mysore + Bangalore",
      "route": "Coimbatore → Kodaikanal → Ooty → Mysore → Bangalore",
      "duration": "7 Days / 6 Nights",
      "image": "images/bangalore.webp",
      "badges": ["Hills", "City"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Kodaikanal via Palani. Stay at Kodaikanal." },
        { "day": "Day 2", "text": "Kodaikanal local sightseeing. Stay at Kodaikanal." },
        { "day": "Day 3", "text": "Kodaikanal to Ooty. Stay at Ooty." },
        { "day": "Day 4", "text": "Ooty local sightseeing including gardens, lake, Doddabetta and tea factory. Stay at Ooty." },
        { "day": "Day 5", "text": "Ooty to Mysore via Pykara and forest route. Stay at Mysore." },
        { "day": "Day 6", "text": "Mysore sightseeing including palace, Chamundi Hills, zoo and Brindavan Gardens. Stay at Mysore." },
        { "day": "Day 7", "text": "Mysore to Bangalore sightseeing and drop." }
      ]
    },
    {
      "id": "munnar-thekkady-varkala-alleppey-kovalam-7d",
      "title": "Munnar + Thekkady + Varkala + Alleppey + Kovalam",
      "route": "Coimbatore → Munnar → Thekkady → Varkala → Alleppey → Kovalam",
      "duration": "7 Days / 6 Nights",
      "image": "images/kovalam.webp",
      "badges": ["Kerala", "Premium"],
      "itinerary": [
        { "day": "Day 1", "text": "Coimbatore to Munnar. Scenic drive and check-in. Stay at Munnar." },
        { "day": "Day 2", "text": "Munnar sightseeing including Mattupetty Dam, Echo Point, Top Station and tea gardens. Stay at Munnar." },
        { "day": "Day 3", "text": "Munnar to Thekkady. Spice Garden, cultural show and local sightseeing. Stay at Thekkady." },
        { "day": "Day 4", "text": "Thekkady to Varkala. Visit beach and cliff. Stay at Varkala." },
        { "day": "Day 5", "text": "Varkala to Alleppey. Backwater and houseboat experience. Stay at Alleppey." },
        { "day": "Day 6", "text": "Alleppey to Kovalam. Beach leisure and sightseeing. Stay at Kovalam." },
        { "day": "Day 7", "text": "Trivandrum sightseeing and drop." }
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
