import React , { useState,useEffect  } from 'react';
import Button from '@material-ui/core/Button';
import { Input } from 'antd';
import Card from '@material-ui/core/Card';

function NewFile()
{
  const [mydata, setData] = useState([]);
  const [search,setSearch]=useState();
 const fetchdata=()=>{
   //useEffect(() => {
    
    fetch(search) 
    .then(response => response.json())
      .then(mydata => setData(mydata));
    
     
  //});
   };
  //  useEffect(()=>{
     
  //  },[query])
function Search(e)
{
  const value=e.target.value
  setSearch(value)

}

  return(
    <div >
    <Card size="small"   style={{ width: 250 ,height:100,display:"flex",marginLeft:40,marginTop:-90}}>
        <div style={{marginLeft: 30,marginTop:10,color:"#ad1457"}}>
      {[mydata].map(nd => (
          <p key={nd.id}><b>Followers:{nd.followers}</b></p>
        
        ))}
        
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:90,display:"flex",marginLeft:350,marginTop:-97}}>
      <div style={{marginLeft: 30,marginTop:10,color:"#29b6f6"}}>
    {[mydata].map(nd => (
          <p key={nd.id}><b>Following:{nd.following}</b></p>
        ))}
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:90,display:"flex",marginLeft:650,marginTop:-102}}>
    <div style={{marginLeft: 30,marginTop:10,color:"#e65100"}}>
    {[mydata].map(nd => (
          <p key={nd.id}><b>Public Repos:{nd.public_repos}</b></p>
        ))}
        </div>
    </Card>
    <Card size="small"   style={{ width: 250 ,height:100,border:190,display:"flex",marginLeft:950,marginTop:-105}}>
    <div style={{marginLeft: 30,marginTop:10,color:"#01579b"}}>
    {[mydata].map(nd => (
          <p key={nd.login}><b>Public Gists:{nd.public_gists}</b></p>
        ))}
        </div>
    </Card>
    
     <div className="text">
    <Input  variant="outlined" size="large" style={{width:"90%",height:"60px",borderRadius:4,color:"#212121" ,borderWidth:2,marginTop:200,fontSize: "1.5rem", alignSelf:'center',borderWidth:2,borderColor:"black"}} placeholder="Enter the url" onChange={Search} />
       </div>
       
    <div className="text">
      <Button variant="outlined" color="black" style={{width:"20%",height:"60px",borderRadius:90,borderWidth:2,borderColor:"black",marginTop:"60px",backgroundColor:"slateblue" }} onClick={() => fetchdata()}>
     <b>Compare</b>
    </Button>
    {/* <Button variant="outlined" color="black" style={{marginTop:"40px",width:"20%",borderWidth:2,borderColor:"black"}}>
        <b><h2>Compare</h2></b>
      </Button> */}
  </div>
  </div>
    );
}
export default NewFile;