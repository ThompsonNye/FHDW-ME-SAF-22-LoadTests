PGPASSWORD=password psql -h localhost -U postgres -p 55432 -c "DELETE FROM \"Cars\";"
PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Consumptions\";"
k6 run k6-files/small-post.js
PGPASSWORD=password psql -h localhost -U postgres -p 55432 -c "DELETE FROM \"Cars\";"
PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Consumptions\";"
