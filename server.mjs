import express from 'express';
const app = express();
app.use(express.json());
const UPSTREAM = process.env.UPSTREAM || 'https://supabase.com';

app.get('/health', (_,res) => res.json({ ok:true, service:'supabase-api', routes:100 }));

app.get('/v1/branches/:branch_id_or_ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/branches/:branch_id_or_ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/branches/:branch_id_or_ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/branches/:branch_id_or_ref/push', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}/push', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/branches/:branch_id_or_ref/merge', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}/merge', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/branches/:branch_id_or_ref/reset', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}/reset', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/branches/:branch_id_or_ref/restore', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}/restore', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/branches/:branch_id_or_ref/diff', async (req, res) => {
  try {
    const upstream = new URL('/v1/branches/{branch_id_or_ref}/diff', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/available-regions', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/available-regions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/organizations', async (req, res) => {
  try {
    const upstream = new URL('/v1/organizations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/organizations', async (req, res) => {
  try {
    const upstream = new URL('/v1/organizations', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/oauth/authorize', async (req, res) => {
  try {
    const upstream = new URL('/v1/oauth/authorize', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/oauth/token', async (req, res) => {
  try {
    const upstream = new URL('/v1/oauth/token', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/oauth/revoke', async (req, res) => {
  try {
    const upstream = new URL('/v1/oauth/revoke', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/oauth/authorize/project-claim', async (req, res) => {
  try {
    const upstream = new URL('/v1/oauth/authorize/project-claim', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/snippets', async (req, res) => {
  try {
    const upstream = new URL('/v1/snippets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/snippets/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/snippets/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/profile', async (req, res) => {
  try {
    const upstream = new URL('/v1/profile', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/actions', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/actions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/actions/:run_id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/actions/{run_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/actions/:run_id/status', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/actions/{run_id}/status', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/actions/:run_id/logs', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/actions/{run_id}/logs', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/api-keys', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/api-keys', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/api-keys/legacy', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys/legacy', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/v1/projects/:ref/api-keys/legacy', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys/legacy', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/api-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/api-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/api-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/api-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/branches', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/branches', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/branches', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/branches', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/branches', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/branches', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/branches/:name', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/branches/{name}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/custom-hostname', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/custom-hostname', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/custom-hostname', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/custom-hostname', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/custom-hostname/initialize', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/custom-hostname/initialize', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/custom-hostname/reverify', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/custom-hostname/reverify', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/custom-hostname/activate', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/custom-hostname/activate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/jit-access', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/jit-access', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/v1/projects/:ref/jit-access', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/jit-access', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/network-bans/retrieve', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-bans/retrieve', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/network-bans/retrieve/enriched', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-bans/retrieve/enriched', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/network-bans', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-bans', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/network-restrictions', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-restrictions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/network-restrictions', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-restrictions', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/network-restrictions/apply', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/network-restrictions/apply', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/pgsodium', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/pgsodium', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/v1/projects/:ref/pgsodium', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/pgsodium', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/postgrest', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/postgrest', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/postgrest', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/postgrest', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/secrets', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/secrets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/secrets', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/secrets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/secrets', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/secrets', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/ssl-enforcement', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/ssl-enforcement', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/v1/projects/:ref/ssl-enforcement', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/ssl-enforcement', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PUT',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/types/typescript', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/types/typescript', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/vanity-subdomain', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/vanity-subdomain', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/vanity-subdomain', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/vanity-subdomain', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/vanity-subdomain/check-availability', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/vanity-subdomain/check-availability', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/vanity-subdomain/activate', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/vanity-subdomain/activate', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/upgrade', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/upgrade', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/upgrade/eligibility', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/upgrade/eligibility', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/upgrade/status', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/upgrade/status', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/readonly', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/readonly', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/readonly/temporary-disable', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/readonly/temporary-disable', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/read-replicas/setup', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/read-replicas/setup', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/read-replicas/remove', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/read-replicas/remove', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/health', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/health', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth/signing-keys/legacy', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys/legacy', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/config/auth/signing-keys/legacy', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys/legacy', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth/signing-keys', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/config/auth/signing-keys', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth/signing-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/config/auth/signing-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/config/auth/signing-keys/:id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/signing-keys/{id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/config/auth', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth/third-party-auth', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/third-party-auth', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/config/auth/third-party-auth', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/third-party-auth', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/config/auth/third-party-auth/:tpa_id', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/pause', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/pause', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/restart', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/restart', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/restore', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/restore', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/restore', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/restore', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/restore/cancel', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/restore/cancel', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/billing/addons', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/billing/addons', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch('/v1/projects/:ref/billing/addons', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/billing/addons', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'PATCH',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/billing/addons/:addon_variant', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/billing/addons/{addon_variant}', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/claim-token', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/claim-token', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/v1/projects/:ref/claim-token', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/claim-token', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'POST',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/v1/projects/:ref/claim-token', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/claim-token', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'DELETE',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: req.rawBody || JSON.stringify(req.body)
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/advisors/performance', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/advisors/performance', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/advisors/security', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/advisors/security', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/v1/projects/:ref/analytics/endpoints/logs.all', async (req, res) => {
  try {
    const upstream = new URL('/v1/projects/{ref}/analytics/endpoints/logs.all', UPSTREAM);
    for (const [k, v] of Object.entries(req.params)) upstream.pathname = upstream.pathname.replace(':' + k, v);
    for (const [k, v] of Object.entries(req.query)) upstream.searchParams.set(k, v);
    const r = await fetch(upstream, {
      method: 'GET',
      headers: { ...req.headers, host: undefined, 'user-agent': 'supabase-api-proxy/1.0' },
      body: undefined
    });
    res.status(r.status).set(Object.fromEntries(r.headers)).send(await r.text());
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('supabase-api on :' + PORT));
