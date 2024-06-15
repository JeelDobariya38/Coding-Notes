# Running Tests
Write-Host "Running tests...."

# test command that exit with 0 on passing
Write-Host "No Tests Found!!!!"
Write-Host "For add them edit the script!!!!"

if ( $LASTEXITCODE -eq 0 ) {
    Write-Host "Passed all test cases!!!!"
} else {
    Write-Host "Test Failed!!!"
    EXIT 1
}

Write-Host ""



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

if ( $res -eq "y" ) {
    Write-Host "Pushing your change...."
    git push
}

Write-Host ""
