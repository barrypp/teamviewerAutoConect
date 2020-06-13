# teamviewerAutoConnect
teamviewer Auto Connect with password provided by general password manager

If you are using teamviewer(Lan only mode), it will not save password for you. But general password manager will save password for you when you using web page.

So I created this little web page, so that your password manager can autofill in the password and this web will call teamviewer with password.

When password manager is properly configured, you can connect to remote desktop with one click (maybe two for UAC)

## config

1. get nodejs
2. get teamviewer
3. npm install
4. config password manager, let it autofill http://localhost:47653 with ip and password

## USE

./run.bat "path-to-teamviewer.exe"