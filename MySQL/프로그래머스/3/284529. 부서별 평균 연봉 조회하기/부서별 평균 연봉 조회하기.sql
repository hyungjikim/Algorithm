select e.DEPT_ID, d.DEPT_NAME_EN, round(avg(e.SAL)) as `AVG_SAL`
from HR_DEPARTMENT d
join HR_EMPLOYEES e on d.DEPT_ID = e.DEPT_ID
group by e.dept_id
order by `AVG_SAL` desc