function solution(num_list) {
   const result = num_list.find((num) => num < 0);
   return num_list.indexOf(result) ?? -1
}