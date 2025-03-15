MODLIST=modlist.json

echo "#!/bin/sh" > .git/hooks/post-merge
echo "java -jar InstanceSync.jar" >> .git/hooks/post-merge

echo "Done setting up hooks"
java -cp InstanceSync.jar wfphantom.instancesync.ModlistUpdater $MODLIST
java -jar InstanceSync.jar
