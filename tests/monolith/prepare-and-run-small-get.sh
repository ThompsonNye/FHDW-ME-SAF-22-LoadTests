PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Cars\";"
PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Consumptions\";"
PGPASSWORD=password psql -h localhost -U postgres -c "INSERT INTO \"Cars\" (\"Id\", \"Name\") VALUES ('4d246d4d-dfa3-45ef-92c7-e3f731641012', 'car');"
PGPASSWORD=password psql -h localhost -U postgres -c "INSERT INTO \"Consumptions\" (\"Id\", \"DateTime\", \"Distance\", \"Amount\", \"IgnoreInCalculation\", \"CarId\") VALUES ('e00613c8-9c30-48ed-82b9-31bdbaea6d1d', '2022-06-01 17:22:00+00', 0, 0, FALSE, '4d246d4d-dfa3-45ef-92c7-e3f731641012');"
k6 run k6-files/small-get.js
PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Cars\";"
PGPASSWORD=password psql -h localhost -U postgres -c "DELETE FROM \"Consumptions\";"
