# !/bin/bash

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
