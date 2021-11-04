export default function timeConverter(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
    const date = a.getDate();
    const year = a.getFullYear();
    const month = a.getMonth();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = `${date}.${month}.${year} ${hour}:${min}:${sec}`;
  return time;
}