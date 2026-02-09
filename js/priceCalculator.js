// keep track of selected option
let selectedType = null;



const priceSlabs = {
  front: [
    { min: 1, max: 5, rate: 50 },
    { min: 6, max: 10, rate: 45 },
    { min: 11, max: 20, rate: 40 },
    { min: 21, max: 30, rate: 35 },
    { min: 31, max: 50, rate: 30 },
    { min: 51, max: 9999, rate: 25 }
  ],

  back: [
    { min: 1, max: 5, rate: 100 },
    { min: 6, max: 10, rate: 70 },
    { min: 11, max: 20, rate: 65 },
    { min: 21, max: 30, rate: 60 },
    { min: 31, max: 50, rate: 55 },
    { min: 51, max: 9999, rate: 50 }
  ],

  both: [
    { min: 1, max: 5, rate: 100 },
    { min: 6, max: 10, rate: 85 },
    { min: 11, max: 20, rate: 80 },
    { min: 21, max: 30, rate: 75 },
    { min: 31, max: 40, rate: 70 },
    { min: 41, max: 50, rate: 65 },
    { min: 51, max: 100, rate: 60 },
    { min: 101, max: 9999, rate: 55 }
  ],

  // SUBLIMATION
  sub_front: [
    { min: 1, max: 5, rate: 50 },
    { min: 6, max: 10, rate: 45 },
    { min: 11, max: 20, rate: 40 },
    { min: 21, max: 30, rate: 35 },
    { min: 31, max: 50, rate: 30 },
    { min: 51, max: 9999, rate: 25 }
  ],

  sub_back: [
    { min: 1, max: 5, rate: 100 },
    { min: 6, max: 10, rate: 70 },
    { min: 11, max: 20, rate: 65 },
    { min: 21, max: 30, rate: 60 },
    { min: 31, max: 50, rate: 55 },
    { min: 51, max: 9999, rate: 50 }
  ],

  sub_both: [
    { min: 1, max: 5, rate: 100 },
    { min: 6, max: 10, rate: 85 },
    { min: 11, max: 20, rate: 80 },
    { min: 21, max: 30, rate: 75 },
    { min: 31, max: 40, rate: 70 },
    { min: 41, max: 50, rate: 65 },
    { min: 51, max: 100, rate: 60 },
    { min: 101, max: 9999, rate: 55 }
  ],
  
  /* ================= RUBBER FRONT ================= */
  rubber_front: [
    { min: 1, max: 5, rate: 35 },
    { min: 6, max: 10, rate: 45 },
    { min: 11, max: 30, rate: 55 },
    { min: 31, max: 50, rate: 40 },
    { min: 51, max: 9999, rate: 35 }
  ],

  /* ================= RUBBER BACK ================= */
  rubber_back: [
    { min: 1, max: 5, rate: 35 },
    { min: 6, max: 10, rate: 45 },
    { min: 11, max: 30, rate: 55 },
    { min: 31, max: 50, rate: 40 },
    { min: 51, max: 9999, rate: 35 }
  ],

  /* ================= RUBBER BOTH ================= */
  rubber_both: [
    { min: 1, max: 5, rate: 45 },
    { min: 6, max: 10, rate: 55 },
    { min: 11, max: 30, rate: 65 },
    { min: 31, max: 50, rate: 50 },
    { min: 51, max: 9999, rate: 45 }
  ]
};



// SHOW PRICE SLABS WHEN OPTION IS CLICKED
function showSlab(type, element) {
  selectedType = type;

  // remove active class from all boxes
  document.querySelectorAll(".option-box").forEach(box => {
    box.classList.remove("active");
  });

  // highlight selected box
  element.classList.add("active");

  const slabDiv = document.querySelector(".slab-section");
  slabDiv.innerHTML = "<h3>Price Slabs</h3>";

  priceSlabs[type].forEach(slab => {
    slabDiv.innerHTML += `
      <p>
        ${slab.min} – ${slab.max} pcs :
        <strong>₹${slab.rate}</strong> / piece
      </p>
    `;
  });

  // clear previous result
  document.getElementById("result").innerText = "";
}

// CALCULATE TOTAL PRICE
function calculatePrice() {
  const qty = parseInt(document.getElementById("qty").value);
  const result = document.getElementById("result");

  if (!selectedType) {
    result.innerText = "Please select a print option first";
    return;
  }

  if (!qty || qty <= 0) {
    result.innerText = "Please enter a valid quantity";
    return;
  }

  const slab = priceSlabs[selectedType].find(
    s => qty >= s.min && qty <= s.max
  );

  if (!slab) {
    result.innerText = "Quantity not available in price slabs";
    return;
  }

  const total = qty * slab.rate;

  result.innerText = `Total Price: ₹${total} (₹${slab.rate} per piece)`;
}
