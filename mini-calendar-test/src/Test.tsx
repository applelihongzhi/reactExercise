import Calendar from "./App"
function Test(){
    return <div>
      <Calendar value={new Date('2023-3-1')} onChange={(date:Date) => {
        alert(date.toLocaleDateString())
      }}></Calendar>
    </div>
  }
  export default Test;
