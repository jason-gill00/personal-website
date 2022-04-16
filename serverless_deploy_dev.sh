cd ./services
npm install
next build

if grep -q 'Error' "sls_deploy_out.txt";
then
    cd ..
    echo "deployment Error detected!" 
    exit -1
else
    cd ..
fi