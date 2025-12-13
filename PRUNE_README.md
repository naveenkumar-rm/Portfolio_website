This repository contains a helper script to remove all files except `.jsx` and `.css`.

How to run (Windows PowerShell):

1. Open PowerShell in the repository root (`d:\Portfolio_website`).
2. (Optional) Create a backup or commit your repo first.
3. Run:

```powershell
.\prune_non_jsx_css.ps1
```

The script will delete files that do not have `.jsx` or `.css` extensions. Use with caution.