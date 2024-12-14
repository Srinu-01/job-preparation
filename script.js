// Render Questions
function renderQuestions(data) {
    const container = document.getElementById("question-container");
  
    data.forEach((q, index) => {
      const card = document.createElement("div");
      card.classList.add("question-card");
  
      card.innerHTML = `
        <h2>Q${index + 1}: ${q.question}</h2>
        <ul class="options">
          ${q.options.map((opt) => `<li><button>${opt}</button></li>`).join("")}
        </ul>
       
        <div class="action-buttons">
          <button class="show-answer-btn">Show Answer</button>
          <button class="workspace-btn">Workspace</button>
          <button class="report-btn">Report</button>
        </div>
        <div class="answer-section">
          <p><strong>Correct Answer:</strong> ${q.correct}</p>
          <p><strong>Explanation:</strong> ${q.explanation}</p>
        </div>
        <div class="workspace-section" style="display: none;">
          <textarea placeholder="Write your workspace notes here..."></textarea>
        </div>
        <div class="report-section" style="display: none;">
          <textarea class="report-area" placeholder="Describe the issue..."></textarea>
          <button class="submit-report-btn">Submit Report</button>
        </div>
      `;
  
      // Add functionality to buttons
      const answerSection = card.querySelector(".answer-section");
      const workspaceSection = card.querySelector(".workspace-section");
      const reportSection = card.querySelector(".report-section");
  
      const showAnswerBtn = card.querySelector(".show-answer-btn");
      showAnswerBtn.addEventListener("click", () => {
        toggleSection(answerSection, showAnswerBtn, "Show Answer", "Hide Answer");
        // Hide other sections when answer is toggled
        workspaceSection.style.display = "none";
        reportSection.style.display = "none";
      });
  
      const workspaceBtn = card.querySelector(".workspace-btn");
      workspaceBtn.addEventListener("click", () => {
        toggleSection(workspaceSection, null, null, null);
        // Hide other sections when workspace is toggled
        answerSection.style.display = "none";
        reportSection.style.display = "none";
      });
  
      const reportBtn = card.querySelector(".report-btn");
      reportBtn.addEventListener("click", () => {
        toggleSection(reportSection, null, null, null);
        // Hide other sections when report is toggled
        answerSection.style.display = "none";
        workspaceSection.style.display = "none";
      });
  
      // Submit report functionality
      const submitReportBtn = card.querySelector(".submit-report-btn");
      submitReportBtn.addEventListener("click", () => {
        const reportText = card.querySelector(".report-area").value;
        console.log("Report Submitted:", reportText); // Replace with Google Docs integration
        alert("Report submitted successfully!");
        card.querySelector(".report-area").value = "";
        reportSection.style.display = "none";
      });
  
      container.appendChild(card);
    });
  }
  
  // Toggle section function
  function toggleSection(section, btn, showText, hideText) {
    if (section.style.display === "none" || !section.style.display) {
      section.style.display = "block";
      if (btn) {
        btn.textContent = hideText;
      }
    } else {
      section.style.display = "none";
      if (btn) {
        btn.textContent = showText;
      }
    }
  }
  
  // Initialize
  renderQuestions(questions);