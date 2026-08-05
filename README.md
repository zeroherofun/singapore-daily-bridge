# Singapore Daily — bridge (news aggregator)

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — featured Chin Swee Road story + Latest headlines |
| `preland.html` | Full preland with `{offer}` |
| `singapore.html` … `world.html` | Section lists (plain headlines) |
| `article-*.html` | Safety / neutral news articles |

## Footer

Only legal links (Cookie, Terms, Privacy, Impressum) + copyright — like white pages for Google.

## Push updates to GitHub

```powershell
$env:GITHUB_TOKEN = "your_token_here"
powershell -ExecutionPolicy Bypass -File push-to-github.ps1
```

Live: https://zeroherofun.github.io/singapore-daily-bridge/
