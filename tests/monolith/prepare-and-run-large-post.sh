export PGPASSWORD=password
psql -h localhost -U postgres -c "DELETE FROM \"Cars\";"
psql -h localhost -U postgres -c "DELETE FROM \"Consumptions\";"
k6 run k6-files/large-post.js
