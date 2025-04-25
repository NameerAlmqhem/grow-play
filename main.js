document.addEventListener('DOMContentLoaded', function () {

  // Theme Toggle
  if (localStorage.getItem('theme') === 'pastel') {
    document.body.classList.add('pastel-theme');
  }

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('pastel-theme');
      localStorage.setItem('theme', document.body.classList.contains('pastel-theme') ? 'pastel' : 'default');
    });
  }

  // Reviews Hover
  const reviews = document.querySelectorAll('.review-card');
  reviews.forEach(review => {
    const popup = review.querySelector('.review-popup');
    const name = review.querySelector('h3')?.innerText;
    const text = review.querySelector('p')?.innerText;
    popup.innerHTML = `<strong>${name}</strong><br>${text}`;
  });

  // Admin Dashboard - Show More Button
  const kids = document.querySelectorAll(".kid-row");
  const showMoreBtn = document.getElementById("showMoreBtn");

  if (showMoreBtn) {
    kids.forEach((row, index) => {
      if (index >= 2) {
        row.style.display = "none";
      }
    });

    showMoreBtn.addEventListener("click", () => {
      kids.forEach(row => {
        row.style.display = "table-row";
      });
      showMoreBtn.style.display = "none";
    });
  }

  // Schedule Page - Display Current Week's Start Date
  function getStartOfWeek(date) {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff));
  }

  function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  }

  const today = new Date();
  const startOfWeek = getStartOfWeek(new Date(today));
  const formattedDate = formatDate(startOfWeek);

  const weekDateElements = document.querySelectorAll("[id^='week-date']");
  weekDateElements.forEach(el => {
    el.textContent = `Week starting: ${formattedDate}`;
  });

});