// JavaScript Code for Appointment Booking
const daysContainer = document.getElementById('days');
const monthElement = document.getElementById('month');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const confirmAppointmentButton = document.getElementById('confirmAppointment');

let currentMonth = 0; // january
let currentYear = 2025;
let selectedDay = null;

// Update Days in Calendar
function updateCalendar() {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  daysContainer.innerHTML = '';

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('button');
    dayElement.classList.add('btn', 'btn-light', 'day', 'mb-2');
    dayElement.textContent = day;

    // Add click event
    dayElement.addEventListener('click', () => {
      if (selectedDay) selectedDay.classList.remove('selected');
      dayElement.classList.add('selected');
      selectedDay = dayElement;
    });

    daysContainer.appendChild(dayElement);
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];
  monthElement.textContent = monthNames[currentMonth];
}

// Handle Month Navigation
prevMonthButton.addEventListener('click', () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
  currentMonth = (currentMonth + 1) % 12;
  updateCalendar();
});

// Confirm Appointment
confirmAppointmentButton.addEventListener('click', () => {
  const selectedTime = document.querySelector('input[name="time"]:checked').value;
  if (selectedDay) {
    alert(`Appointment Confirmed!\nDate: ${selectedDay.textContent} ${monthElement.textContent}\nTime: ${selectedTime}`);
  } else {
    alert('Please select a date!');
  }
});

// Initialize Calendar
updateCalendar();
