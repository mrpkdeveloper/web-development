1)create table manufacturer(id int , name char(10),country char(10),estd int);

2) i.  insert into manufacturer values(6,"ford","america",1903);
   ii. insert into manufacturer values(7,"honda","japan",1940);

3) create table factory(id int , city char(10),state char(10),manuf_id int,capacity int);

4) i.   insert into factory values(5,"surat","gujrat",6,30000);
   ii.  insert into factory values(6,"chennai","tamil nadu",7,70000);

5)select state as 'statename'  , sum(capacity) as 'state capacity' from factory group by state;

6) 
   i.   select state as 'statename'  , sum(capacity) as 'state_capacity' from factory group by state order by state_capacity desc limit 1;
   (if two state have same capacity)
   ii. select state as 'statename'  , sum(capacity) as 'state_capacity' from factory group by state having state_capacity = (select sum(capacity) from factory group by state order by capacity desc limit 1);

 7) create table cars(id int , name char(10),manuf_id int , fact_id int , year int , total_made int);
 8) insert into cars values(6,"wagnor",2,5,2013,80000);
       