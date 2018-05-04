A STELLAR Lumens (XLM) Crypto Wallet..!
Under Development. Feel free to contribute.

# Resolved module crypto not found error using instructions on:
https://www.npmjs.com/package/react-native-crypto

#TLDR; 
After doing npm install run this command:
# install node core shims and recursively hack package.json files in ./node_modules to add/update the "browser"/"react-native" field with relevant mappings 
./node_modules/.bin/rn-nodeify --hack --install
