# Initialize automated deploy pipeline for openwhisk actions (as soon as repository is updated redeploy function on openWhisk)

* function can be called with or without params: https://console.bluemix.net/docs/openwhisk/openwhisk_actions.html#openwhisk_actions

* problematic with external npm packages is that they have to be installed first
	* first run it locally
	* create js file and package.js with dependecies
	* run npm install local
	* zip everything into a file and than run wsk --> wsk action create packageAction --kind nodejs:default action.zip 

* setup Bluemix CLI
* setup CloudFoundry pLugin
* setup wsk CLI
* sso in console with temporary code


cd C:\Users\IBM_ADMIN\Box Sync\Work\Coding\0masterarbeit\Github\masterThesisBot 

1. wsk.exe download
2. wsk.exe from CLI
3. in local cli --> wsk bluemix login --sso --namespace benedikt.krueger@de.ibm.com_ben
4. export whisk auth --> wsk property get --auth --> text.txt
4. prepare cli in deploy pipeline with script and use whisk auth 

wsk action list


# next steps

* develop openwhisk locally and push automatically to git
