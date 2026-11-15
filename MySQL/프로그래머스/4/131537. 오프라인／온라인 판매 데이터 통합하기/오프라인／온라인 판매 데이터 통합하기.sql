-- 코드를 입력하세요
SELECT sales_date, product_id, user_id, sales_amount
from online_sale
where sales_date between ('2022-03-01') and ('2022-03-31')
union all
select sales_date, product_id, null as 'USER_ID', sales_amount
from offline_sale
where sales_date between ('2022-03-01') and ('2022-03-31')

order by sales_date asc, product_id asc, user_id asc;