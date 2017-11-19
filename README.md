# Initialize automated deploy pipeline for openwhisk actions (as soon as repository is updated redeploy function on openWhisk)

* used toolchain and git: https://github.com/BenediktKrueger/masterThesisBot
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
5. test action --> wsk action invoke --blocking --result conversationPackage/packageAction --param lines "[\"and now\", \"for something completely\", \"different\" ]"

wsk action list


# next steps

* develop openwhisk locally and push automatically to git
* normally necessary to deploy to cloud before testing the code
* how to do it local: https://www.raymondcamden.com/2017/01/09/quick-tip-for-testing-openwhisk-actions-locally



* lately I'm into serverless architectures
* they are for some kind of applications like chatsbots or iot applications my preffered way
* still i don't see a lot projects using them
* without thinking about automatic deployment and using git its easy to setup and usable 
* I want to show how i configured an automatic pipeline in order to deploy automatically after a new push 
* using external npm packages and dependencies as well
* explain process general process
* there are some usefull preinstalled libaries like request to perform api calls

* start with the project setup - git, local testing, development, automatic deployment, example installation of conversation service (external npm packages)


* but not a lot of different preinstalled packages so what can you do? 
* install them an abuse of the concept?? 

* concept of serverless 
* one of the disadvatages of serverless approach is that developer basically rely on provider of the service for devOps tools 


* example conversation service - create a conversation service and copy the username, password, and version into environment variables
* Usage of environment variables via deploy script
* need to create a package in script and add to this package environment variables to ensure security e.g. for credentials

* in code you can easily use them 

* open tasks: if in built script for first time create/ afterwards update
	* local running of code
	* detailed article: https://medium.com/openwhisk/a-slightly-improved-way-to-test-openwhisk-functions-locally-4b26ad320192

