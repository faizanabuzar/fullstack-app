#!/bin/bash
# wait-for-db.sh

# Wait for the MySQL container to be ready
until mysql -h"$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" -e 'SELECT 1' &>/dev/null; do
  echo "Waiting for database to be ready..."
  sleep 2
done
echo "Database is ready!"

