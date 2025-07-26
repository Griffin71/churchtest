// Handle Mobile Calendar Modal Toggle
  const openBtn = document.getElementById('openMobileCalendar');
  const closeBtn = document.getElementById('closeMobileCalendar');
  const mobileModal = document.getElementById('mobileCalendarModal');

  if (openBtn && closeBtn && mobileModal) {
    openBtn.addEventListener('click', () => {
      mobileModal.style.display = 'block';

      // Render calendar only if not already rendered
      if (!mobileModal.dataset.initialized) {
        const mobileCalendar = new FullCalendar.Calendar(document.getElementById('calendar-mobile'), {
          initialView: 'listMonth',
          events: calendar.getEvents(), // Reuse existing events
          themeSystem: 'standard',
          eventTimeFormat: {
            hour: '2-digit',
            minute: '2-digit',
            meridiem: 'short'
          }
        });
        mobileCalendar.render();
        mobileModal.dataset.initialized = true;
      }
    });

    closeBtn.addEventListener('click', () => {
      mobileModal.style.display = 'none';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
      if (e.target === mobileModal) {
        mobileModal.style.display = 'none';
      }
    });
  }

            // Event modal close
            $('#closeEventModal').on('click', function() {
                $('#eventModal').css('display', 'none');
            });
            $(window).on('click', function(event) {
                if ($(event.target).is('#eventModal')) {
                    $('#eventModal').css('display', 'none');
                }
            });
// Handle desktop calendar modal toggle