console.log('Nexus worker starting...');

// Placeholder loop so the process stays alive.
// Real job processing (BullMQ) gets wired in during Milestone 6.
setInterval(() => {
  console.log('worker heartbeat:', new Date().toISOString());
}, 5000);
