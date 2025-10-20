/**
 * Service for interacting with Google Calendar API
 */
const CalendarService = {
  
  /**
   * Get events for a user within a date range
   * @param {string} userEmail - User's email
   * @param {Object} dateRange - Object with start and end dates
   * @returns {Array} Array of calendar events
   */
  getUserEvents: function(userEmail, dateRange) {
    try {
      const events = Calendar.Events.list(userEmail, {
        timeMin: dateRange.start.toISOString(),
        timeMax: dateRange.end.toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      });
      
      return events.items || [];
      
    } catch (error) {
      logError(`Failed to get events for ${userEmail}: ${error.message}`);
      return [];
    }
  },
  
  /**
   * Check if event has external attendees
   * @param {Object} event - Calendar event
   * @returns {boolean} True if has external attendees
   */
  hasExternalAttendees: function(event) {
    if (!event.attendees) return false;
    
    for (const attendee of event.attendees) {
      if (!attendee.resource && !isInternalEmail(attendee.email)) {
        return true;
      }
    }
    
    return false;
  },
  
  /**
   * Get room resources from event
   * @param {Object} event - Calendar event
   * @returns {Array} Array of room resource attendees
   */
  getRoomResources: function(event) {
    if (!event.attendees) return [];
    
    return event.attendees.filter(attendee => attendee.resource === true);
  }
};
