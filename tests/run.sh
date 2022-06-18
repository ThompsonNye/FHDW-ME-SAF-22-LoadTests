docker stack deploy -c ../../FHDW-ME-SAF-22-Microservices/docker-compose.yaml -c ../../FHDW-ME-SAF-22-Microservices/docker-compose.replicas4.yaml --with-registry-auth saf
echo "Waiting 30 seconds..."
sleep 30
k6 run warmup.js
docker container prune -f
echo "Waiting 5 seconds..."
sleep 5
cd microservices
./prepare-and-run-small-get.sh
