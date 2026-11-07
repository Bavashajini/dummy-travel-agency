// JavaScript Logic for Sri Lanka Travel Agency Webpage

// Complete list of 25 Districts of Sri Lanka
const districtsData = [
    { name: "Colombo", highlight: "Gangaramaya Temple & Galle Face Green", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80", desc: "Commercial hub rich in colonial architecture, luxury dining, and waterfront parks." },
    { name: "Gampaha", highlight: "Henarathgoda Botanical Garden", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80", desc: "Home to Sri Lanka's first rubber tree and serene freshwater wetlands." },
    { name: "Kalutara", highlight: "Kalutara Bodhiya & Richmond Castle", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80", desc: "Famous for its hollow stupa, palm-fringed beaches, and spice gardens." },
    { name: "Kandy", highlight: "Temple of the Sacred Tooth Relic", img: "https://images.unsplash.com/photo-1588598056972-bc2f98bd34a3?auto=format&fit=crop&w=600&q=80", desc: "Cultural heartland surrounded by lush green tea hills and central lakes." },
    { name: "Matale", highlight: "Sigiriya Rock Fortress & Dambulla Cave Temple", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "UNESCO World Heritage marvels featuring ancient frescoes and cave shrines." },
    { name: "Nuwara Eliya", highlight: "Horton Plains & Gregory Lake", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80", desc: "Known as 'Little England' with cool hill climates, waterfalls, and tea estates." },
    { name: "Galle", highlight: "Galle Dutch Fort", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80", desc: "Cobblestone streets inside a living 17th-century Dutch colonial fortification." },
    { name: "Matara", highlight: "Mirissa Coconut Tree Hill & Dondra Lighthouse", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80", desc: "Southern coastline famed for whale watching, surfing, and southern tips." },
    { name: "Hambantota", highlight: "Yala National Park", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "World-renowned safari sanctuary with highest leopard density." },
    { name: "Jaffna", highlight: "Nallur Kandaswamy Kovil & Jaffna Fort", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80", desc: "Vibrant Northern peninsula renowned for Dravidian temples and islands." },
    { name: "Kilinochchi", highlight: "Iranamathu Tank & Water Tower Monument", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80", desc: "Agricultural heartland with historic water reservoirs and bird sanctuaries." },
    { name: "Mannar", highlight: "Adam's Bridge Sandbanks & Baobab Trees", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80", desc: "Ancient trading port featuring ancient baobabs and migratory flamingo havens." },
    { name: "Mullaitivu", highlight: "Chundikkulam National Park & Coastlines", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "Pristine untouched beaches and tranquil wetland sanctuaries." },
    { name: "Vavuniya", highlight: "Kanduvalai Archaeological Site", img: "https://images.unsplash.com/photo-1588598056972-bc2f98bd34a3?auto=format&fit=crop&w=600&q=80", desc: "Gateway town connecting northern plains with central heritage sites." },
    { name: "Trincomalee", highlight: "Koneswaram Temple & Pigeon Island", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80", desc: "Deep natural harbor with marine national parks for snorkeling." },
    { name: "Batticaloa", highlight: "Singing Fish Lagoon & Dutch Fort", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80", desc: "Peaceful eastern lagoons and palm-dotted coastal stretches." },
    { name: "Ampara", highlight: "Arugam Bay", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80", desc: "World famous surfing destination and Kumana National Park safari access." },
    { name: "Kurunegala", highlight: "Ethagala (Elephant Rock) Temple", img: "https://images.unsplash.com/photo-1588598056972-bc2f98bd34a3?auto=format&fit=crop&w=600&q=80", desc: "Ancient royal capital overlooked by a giant seated Buddha statue on giant rock." },
    { name: "Puttalam", highlight: "Wilpattu National Park & Kalpitiya Lagoons", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "Dolphin watching hubs, kitesurfing, and lake-filled leopard reserves." },
    { name: "Anuradhapura", highlight: "Ruwanwelisaya & Jaya Sri Maha Bodhi", img: "https://images.unsplash.com/photo-1588598056972-bc2f98bd34a3?auto=format&fit=crop&w=600&q=80", desc: "First ancient capital of Sri Lanka featuring massive brick stupas." },
    { name: "Polonnaruwa", highlight: "Gal Viharaya Rock Statues", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "Medieval kingdom ruins surrounded by Parakrama Samudra reservoir." },
    { name: "Badulla", highlight: "Ella Gap & Nine Arches Bridge", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80", desc: "Hill country favorite with hiking peaks and iconic rail bridges." },
    { name: "Monaragala", highlight: "Buduruwagala Rock Carvings", img: "https://images.unsplash.com/photo-1588598056972-bc2f98bd34a3?auto=format&fit=crop&w=600&q=80", desc: "7th-century rock-cut colossal Buddha statues surrounded by wilderness." },
    { name: "Ratnapura", highlight: "Adam's Peak (Sri Pada) & Gem Mines", img: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80", desc: "'City of Gems' and sacred mountain pilgrimage peak." },
    { name: "Kegalle", highlight: "Pinnawala Elephant Orphanage", img: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=600&q=80", desc: "Sanctuary for orphaned elephants along the Ma Oya riverbed." }
];

// Budget Data presets
const budgetData = {
    small: {
        title: "Small / Economy Budget ($10 - $25 per night)",
        stays: "Backpacker Hostels, Guesthouses, Homestays",
        transport: "Public Express Buses & Local Trains",
        highlights: "Shared room or private fan room, local street food recommendations, free Wi-Fi, community travel guides."
    },
    medium: {
        title: "Medium / Comfort Tier ($30 - $85 per night)",
        stays: "3-Star Boutique Hotels, Eco-lodges, Beach Cabanas",
        transport: "Metered Taxis, Private Tuk-Tuks, Air-Conditioned Intercity Express",
        highlights: "Private AC rooms, complimentary breakfast, pool access, curated tour driver contact details."
    },
    high: {
        title: "High Luxury / Premium Tier ($90 - $350+ per night)",
        stays: "5-Star Luxury Resorts, Heritage Villas, Private Bungalows",
        transport: "Private Chauffeur-driven SUV / Van, Helicopter Transfers",
        highlights: "All-inclusive packages, infinity pools, private beach access, dedicated 24/7 personal travel guide."
    }
};

// Render Districts Grid
function renderDistricts(list) {
    const grid = document.getElementById("districtGrid");
    grid.innerHTML = "";
    list.forEach(district => {
        const card = document.createElement("div");
        card.className = "district-card";
        card.onclick = () => openModal(district);
        card.innerHTML = `
            <img src="${district.img}" alt="${district.name}" class="district-img">
            <div class="district-info">
                <h3>${district.name}</h3>
                <p><strong>Precious Site:</strong> ${district.highlight}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Districts by Search
function filterDistricts() {
    const input = document.getElementById("districtSearch").value.toLowerCase();
    const filtered = districtsData.filter(d => d.name.toLowerCase().includes(input));
    renderDistricts(filtered);
}

// Modal Management
function openModal(district) {
    const modal = document.getElementById("districtModal");
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <h2 style="color: #0369a1; margin-bottom: 0.5rem;">${district.name} District</h2>
        <img src="${district.img}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
        <p><strong>Key Attraction:</strong> ${district.highlight}</p>
        <p style="margin: 0.8rem 0;">${district.desc}</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e2e8f0;">
        <h4 style="margin-bottom: 0.5rem;">Recommended Travel & Stay:</h4>
        <ul>
            <li><strong>Transport:</strong> Local Taxis, Buses, and Tuk-Tuks directly available.</li>
            <li><strong>Stay Range:</strong> Hostels from $12/night | Hotels from $45/night.</li>
        </ul>
        <button style="margin-top: 1.5rem; background: #0284c7; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-weight: bold;" onclick="closeModal()">Close Details</button>
    `;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("districtModal").style.display = "none";
}

// Budget Tab Switcher
function switchBudget(tier) {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    const data = budgetData[tier];
    const display = document.getElementById("budgetDisplay");
    display.innerHTML = `
        <div class="budget-card">
            <h3>${data.title}</h3>
            <p style="margin-top: 0.8rem;"><strong>Accommodation Options:</strong> ${data.stays}</p>
            <p style="margin-top: 0.5rem;"><strong>Recommended Transport:</strong> ${data.transport}</p>
            <p style="margin-top: 0.5rem;"><strong>Includes:</strong> ${data.highlights}</p>
        </div>
    `;
}

// Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
    renderDistricts(districtsData);
    switchBudget('small');

    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isVisible = content.style.display === "block";
            document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
            content.style.display = isVisible ? "none" : "block";
        });
    });
});

// Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    document.getElementById("contactForm").reset();
    document.getElementById("formSuccess").style.display = "block";
}
