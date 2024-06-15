# !/bin/bash



# Running Tests
echo "Running tests...."

# test command that exit with 0 on passing
echo "No Tests Found!!!"
echo "For add them edit the script!!!!"

if [ $? -eq 0 ]; then
    echo "Passed all test cases!!!!"
else
    echo "Test Failed!!!"
    exit 1
fi

echo ""



# Staging Files
echo "Staging Files Changes...."
git add .
echo ""



# Commiting Change
read -p "Enter a commit message: " message
echo "Commiting the change..."
git commit -m "$message" 
echo ""



# Pushing them to Remote
read -p "Want to push it to remote (y/n): " res

if [ $res -eq "y" ]; then
    echo "Pushing your change...."
    git push
fi

echo ""
