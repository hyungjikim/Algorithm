-- 코드를 입력하세요
select warehouse_id, warehouse_name, address, ifnull(freezer_yn, 'N')
from FOOD_WAREHOUSE
where ADDRESS like '경기도%';
