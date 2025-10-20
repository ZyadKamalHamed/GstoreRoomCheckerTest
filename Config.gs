const CONFIG = {
  // YOUR COMPANY EMAIL DOMAIN (without @)
  COMPANY_DOMAIN: 'thegstore.com.au',
  
  // YOUR GOOGLE CHAT SPACE ID (see setup instructions below)
  // Leave empty string if sending DMs directly to users
  CHAT_SPACE_ID: '',
  
  // NOTIFICATION SETTINGS
  TIMEZONE: 'Australia/Sydney',
  CHECK_TIME_HOUR: 9, // 9am daily check
  
  // DATE RANGE TO CHECK
  DAYS_TO_CHECK: 2, // Today and tomorrow
  
  // CALENDAR RESOURCE TYPES TO MONITOR
  // These are the resource types in your Google Workspace
  ROOM_RESOURCE_TYPE: 'ROOM',
  
  // LOGGING OPTIONS
  ENABLE_DETAILED_LOGS: true,
  
  // ERROR NOTIFICATION EMAIL (optional - for admin alerts)
  ADMIN_EMAIL: 'zyad.hamed@thegstore.com.au',
  
  // DRY RUN MODE (set to true for testing without sending messages)
  DRY_RUN: false
};
