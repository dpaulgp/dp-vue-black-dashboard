 docker build -t vue-app:v1.0 .

 docker run -it -p 8080:80 --name dp-control-produccion-test vue-app:v1.0

docker run -it -p 8080:80 -p 8443:443 --name dp-control-produccion-test vueappregistry.azurecr.io/vue-app:v1.0

az acr credential show --name vueappregistry

docker login vueappregistry.azurecr.io --username vueappregistry --password pass

docker pull vueappregistry.azurecr.io/vue-app:v1.0