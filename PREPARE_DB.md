```sql
create database edu;
create user eduuser identified by 'Aakash9@';
use edu; 
grant all privileges on edu to eduuser;
grant all privileges on edu.* to eduuser;
	```