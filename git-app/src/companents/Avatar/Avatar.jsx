import './Avatar.css'
function Avatar({data}){
    const rawData = new Date(data.createId)
    const day = rawData.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    return(
        <div className="avatar">
            
            <div className="photo">
                 <img src={data.url} alt="" />
                <div className="name"><h2>{data.name}</h2>
                <span>Create ID: {day}</span>
                </div>
            </div>
        </div>
    )
}

export default Avatar;