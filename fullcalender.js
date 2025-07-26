  // FullCalendar
            if (document.getElementById('calendar')) {
                var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
                    initialView: 'dayGridMonth',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listMonth'
                    },
                    themeSystem: 'standard',
                    height: 'auto',
                    events: [
                        {
                            title: 'Sunday Express Service',
                            daysOfWeek: [0],
                            startTime: '07:00:00',
                            endTime: '08:00:00',
                            backgroundColor: 'var(--navy-blue)',
                            borderColor: 'var(--navy-blue)',
                            description: 'Weekly express service for early risers',
                            location: 'Main Church'
                        },
                        {
                            title: 'Sunday Main Service',
                            daysOfWeek: [0],
                            startTime: '08:00:00',
                            endTime: '10:00:00',
                            backgroundColor: 'var(--liturgical-red)',
                            borderColor: 'var(--liturgical-red)',
                            description: 'Our primary weekly worship service',
                            location: 'Main Church'
                        },
                        {
                            title: 'Parish Council Meeting',
                            start: '2024-10-15T14:00:00',
                            end: '2024-10-15T16:00:00',
                            backgroundColor: 'var(--gold)',
                            borderColor: 'var(--gold)',
                            description: 'Monthly meeting of the parish council',
                            location: 'Parish Hall'
                        },
                        {
                            title: 'Choir Practice',
                            daysOfWeek: [4],
                            startTime: '18:00:00',
                            endTime: '20:00:00',
                            backgroundColor: '#3788d8',
                            borderColor: '#3788d8',
                            description: 'Weekly rehearsal for the church choir',
                            location: 'Choir Room'
                        },
                        {
                            title: 'Bible Study',
                            daysOfWeek: [2],
                            startTime: '18:30:00',
                            endTime: '20:00:00',
                            backgroundColor: '#6B7280',
                            borderColor: '#6B7280',
                            description: 'Weekly scripture study and discussion',
                            location: 'Parish Hall'
                        },
                        {
                            title: 'Food Drive',
                            start: '2024-10-22',
                            allDay: true,
                            backgroundColor: '#10B981',
                            borderColor: '#10B981',
                            description: 'Community food collection for local food bank',
                            location: 'Church Entrance'
                        }
                    ],
                    eventClick: function(info) {
                        $('#eventTitle').text(info.event.title);
                        const startDate = info.event.start;
                        const endDate = info.event.end;
                        let dateStr = startDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                        $('#eventDate').html('<strong>Date:</strong> ' + dateStr);
                        let timeStr = '';
                        if (!info.event.allDay) {
                            const startTime = startDate.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit'
                            });
                            let endTime = endDate ? endDate.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit'
                            }) : '';
                            timeStr = startTime + (endTime ? ' - ' + endTime : '');
                            $('#eventTime').html('<strong>Time:</strong> ' + timeStr);
                        } else {
                            $('#eventTime').html('<strong>Time:</strong> All Day');
                        }
                        $('#eventDescription').html('<strong>Description:</strong> ' +
                            (info.event.extendedProps.description || 'No description available'));
                        $('#eventLocation').html('<strong>Location:</strong> ' +
                            (info.event.extendedProps.location || 'TBD'));
                        $('#eventModal').css('display', 'block');
                    },
                    eventTimeFormat: {
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: 'short'
                    }
                });
                calendar.render();
            }
