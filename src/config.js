"use strict";
// Service configuration. Lab 8 ("break production on purpose") changes `port`
// to 3001 so the post-deploy health check on :3000 fails and the release rolls back.
module.exports = {
  port: Number(process.env.PORT || 3000),
};
// customer lookup cache (stub)
