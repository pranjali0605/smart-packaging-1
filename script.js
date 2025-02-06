document.addEventListener("DOMContentLoaded", function () {
    // Simulating the QR code scan result (this should be dynamic in real-world application)
    let freshnessStatus = "warning"; // Possible values: "fresh", "warning", "spoiled"

    let statusTitle = document.getElementById("status-title");
    let statusIcon = document.getElementById("status-icon");
    let message = document.getElementById("message");
    let shelfLife = document.getElementById("shelf-life");
    let tipsList = document.getElementById("tips-list");

    // Define messages & images for each state
    let data = {
        fresh: {
            title: "Your food is fresh! ✅",
            icon: "images/fresh.png",
            message: "This food is safe to eat. Enjoy!",
            shelfLife: "5-7",
            tips: [
                "Store in a refrigerator at 4°C (40°F).",
                "Keep in an airtight container for longer freshness.",
                "Consume before the estimated expiry date."
            ]
        },
        warning: {
            title: "Consume Soon! ⚠",
            icon: "images/warning.png",
            message: "Your food is nearing spoilage. Consume it soon!",
            shelfLife: "2-3",
            tips: [
                "Check for unusual smell or texture.",
                "Keep it at a lower temperature to extend shelf life.",
                "Consider cooking or freezing to prevent waste."
            ]
        },
        spoiled: {
            title: "Warning! Food May Be Spoiled ❌",
            icon: "images/spoiled.png",
            message: "It is unsafe to eat this food. Please discard it properly.",
            shelfLife: "0",
            tips: [
                "Do not consume if it smells sour or looks discolored.",
                "Dispose of it in a compostable or biodegradable waste bin.",
                "Clean storage areas to prevent contamination."
            ]
        }
    };

    // Apply the correct data based on freshness status
    statusTitle.innerText = data[freshnessStatus].title;
    statusIcon.src = data[freshnessStatus].icon;
    message.innerText = data[freshnessStatus].message;
    shelfLife.innerText = data[freshnessStatus].shelfLife;

    // Add storage tips
    data[freshnessStatus].tips.forEach(tip => {
        let li = document.createElement("li");
        li.innerText = tip;
        tipsList.appendChild(li);
    });
});

// Function to show extra information
function showMoreInfo() {
    document.getElementById("info-section").style.display = "block";
}