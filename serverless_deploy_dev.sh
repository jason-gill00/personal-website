# npm install
# next build
# yarn build
npm run build

if grep -q 'Error' "sls_deploy_out.txt";
then
    cd ..
    echo "deployment Error detected!" 
    exit -1
else
    cd ..
fi