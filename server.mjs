#!/usr/bin/env node
/**
 * supabase-api · HTTP proxy for Supabase
 * Sovereign estate wrapper for Supabase · Database + Auth + Storage
 * Docs: https://supabase.com/docs/reference/api
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Supabase' }));
  res.end(JSON.stringify({ name: 'supabase-api', wraps: 'Supabase', docs: 'https://supabase.com/docs/reference/api' }));
}).listen(PORT, () => console.log('supabase-api on', PORT));
