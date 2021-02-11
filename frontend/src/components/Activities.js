
const Activity = ({activity})=>{
    const {actImg, actTittle} = activity
    return (
      <>
      <div className="cajaActivity">
      <div className="activity" style={{
        backgroundImage:`url(${actImg})`
      }}>
   
      </div>
      <div className="tituloAct"><p>{actTittle}</p></div>
      </div>
      </>
    )
  }
  export default Activity