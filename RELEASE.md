# Releasing invoice-svc

> This is the team's current (pre-pipeline) runbook — the hand-built release path
> that INC-0471 and INC-0478 expose. The CD labs replace it with the pipeline.

1. On your laptop:  `npm ci && npm run build`
2. Pack:  `tar czf invoice-$V.tar.gz dist node_modules package.json .env`
3. Copy:  `scp invoice-$V.tar.gz deploy@web-01:/srv/releases/`
4. On web-01:  unpack into `/srv/invoice`, then `sudo systemctl restart invoice`
