#!/bin/bash
cd /home/kavia/workspace/code-generation/recipeexplorer-34960-67bca5b8/recipe_app_frontend_workspace/recipe_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

