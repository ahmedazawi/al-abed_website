sudo docker container rm --force alabed
sudo docker build -t alabed -f uat.DockerFile . 
sudo docker run --rm -d -it -p 3000:80 --name alabedcontainer alabed