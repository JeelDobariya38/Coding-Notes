# !/bin/bash

# Staging Files
Write-Host "Staging Files Changes...."
git add .

Write-Host ""

# Commiting Change
$message =  Read-Host "Enter a commit message"

Write-Host "Commiting the change..."
git commit -m "$message" 

Write-Host ""

# Pushing them to Remote
$res = Read-Host "Want to push it to remote (y/n)"

if ($res -eq "y") {
    Write-Host "Pushing your change...."
    git push
}

Write-Host ""
