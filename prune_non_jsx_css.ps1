# PowerShell script to delete all files that are NOT .jsx or .css in this repository
# WARNING: This will permanently remove files. Make a backup before running.

$allowed = @('.jsx', '.css')
Get-ChildItem -Path . -Recurse -File | Where-Object { $allowed -notcontains $_.Extension } | ForEach-Object {
    Write-Host "Deleting: $($_.FullName)"
    Remove-Item -LiteralPath $_.FullName -Force -ErrorAction Stop
}

Write-Host "Prune complete. Only .jsx and .css files remain (directories preserved)."