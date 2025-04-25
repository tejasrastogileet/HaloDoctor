function processFile() {
    const file = document.getElementById("fileInput").files[0];
    const result = document.getElementById("result");
  
    if (!file) {
      result.innerText = "❗ Please upload a medical document.";
      return;
    }
  
    const name = file.name.toLowerCase();
    let output = "✅ Condition Detected: ";
  
    if (name.includes("diabetes")) {
      output += "Diabetes 🩸 — tracking and alerts activated.";
    } else if (name.includes("asthma")) {
      output += "Asthma 😮‍💨 — inhaler and AQI reminders set.";
    } else if (name.includes("hypertension")) {
      output += "Hypertension 💓 — BP tracking enabled.";
    } else {
      output = "🧠 No known condition detected.\nDefault health reminders active.";
    }
  
    result.innerText = output;
  }
  