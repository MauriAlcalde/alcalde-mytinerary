
const Activity = ({activity})=>{
    const {actImg, actTittle} = activity
    return (
      <div className="activity">
        <img src={actImg} alt=""/>
        <p>{actTittle}</p>
      </div>
    )
  }
  export default Activity