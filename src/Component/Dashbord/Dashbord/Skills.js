import React,{useState} from 'react'

const Skills = () => {

    const [values,setvalues] = useState({
        first: '',
        second: '',
        third: ''
    
      });
      const [data,setdata] = useState([]);
      
    
    const datahandel = (e) =>{
      e.preventDefault();
    let objects = data
      let object = values
      
      objects.push(object)
      localStorage.setItem("item",JSON.stringify(objects))
      setdata(...data,objects)
      setvalues({
        ...values,
        object,
        first: '',
        second: '',
        third: ''
      })
      
    
      
    
    }



  return (
    <div>
      <div>

<h1>Skills</h1>
<form onSubmit={datahandel}>
 <label>first</label><br></br>
 <input type="text" placeholder='Enter your first skill' value={values.first}  onChange={(e)=>setvalues({...values,first:e.target.value})}/><br></br>
 <label>second</label><br></br>
 <input type="text" placeholder='Enter your second skill' value={values.second} onChange={(e)=>setvalues({...values,second:e.target.value})}/><br></br>
 <label>third</label><br></br>
 <input type="text" placeholder='Enter your third skill' value={values.third} onChange={(e)=>setvalues({...values,third:e.target.value})}/><br></br>
  <button  className='btn2' type='submit' >submit</button> 
 </form>

</div>
    </div>
  )
}

export default Skills
