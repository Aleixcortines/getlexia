const fs = require('fs');
try { fs.unlinkSync('package-lock.json'); } catch (e) {}
try { fs.unlinkSync('yarn.lock'); } catch (e) {}
const ua = process.env.npm_config_user_agent || '';
if (!ua.startsWith('pnpm/')) {
  console.error('Use pnpm instead');
  process.exit(1);
}
