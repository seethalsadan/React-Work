import './App.css';
import './style.css';
import 'react-bootstrap';
import { Button, Table } from 'react-bootstrap';

function App() {
  return (
   
    <div className='container-fluid mt-3'>
  <center>
   <h1 
   className='btn btn-info ms-5'>ORDER MATERIALS
   </h1> 
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#128308;
   <h1 
   className='btn btn-danger ms-5'>  REFERENCE DATA
   </h1> </center>
   <br/>
<center>
   <form>  
       
    <label> ORDER LIST ID  
            <input  type="text" placeholder='XXXX' />
        </label> &nbsp;
        <label className='red'>  
            BUILDING ID 
            <input className='red-input' type="text" placeholder='XXXX'/>  
        </label>  &nbsp;
        <label className='red'>BUILDING NAME

            <input style={{color:'red'}} type="text" placeholder='XXXX' />  
        </label>  &nbsp;
        <label className='red'>BUILDING ADDRESS  
            <input className='red' type="text"placeholder='XXXX' />  
        </label>  &nbsp;
      </form> <br />

      <label>ORDER DESCRIPTION  
            <input type="text" placeholder='XXXX' />  
        </label> <b>(refered from Building MicroService)</b> 
        </center> <br />
    <div className='container mt-2 mb-2'>
   <Table  striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>orderListItemUID</th>
          <th>ITEM NR.</th>
          <th className='red' >MATERIAL ID</th>
          <th className='red' >MAT.DESCRIPTION</th>
          <th>CURRENT QTY</th>
          <th>PREVIOUS QTY</th>
          <th>QTY DIFF</th>
          <th>Order Comment</th>
          <th><Button  >+</Button></th>
          <th><Button >-</Button></th>


        </tr>
      </thead>
      <tbody>
      <tr>
          <td>X</td>
          <td>XXXX</td>
          <td>1</td>
          <td>XXXX</td>
          <td>XXXXX</td>
          <td>8</td>
          <td>10</td>
          <td>-2</td>
          <td>XXXX</td>
        </tr>
        <tr>
        <td>X</td>
          <td>XXXX</td>
          <td>2</td>
          <td>XXXX</td>
          <td>XXXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
        </tr>
        <tr>
        <td>X</td>
          <td>XXXX</td>
          <td>3</td>
          <td>XXXX</td>
          <td>XXXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
          <td>XXXX</td>
        </tr>
      </tbody>
    </Table>
   <center>(refered from MaterialEntity)</center>  <br />
    <label>REMARKS 
            <input type="text"  placeholder='XXXX'/>  
        </label>  <br /> <br />

        <form>  
        <label>
            <p>PREP BY</p>
            <input name="name" placeholder='XXXX'/>
          </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <label>
            <p>CHK BY</p>
            <input name="name" placeholder='XXXX'/>
          </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 
          <label>
            <p>APPROVED BY</p>
            <input name="name"placeholder='XXXX' />
          </label> &nbsp;
      </form> <br />
        <form>  
        <label>
            <p>DATE</p>
            <input name="name" placeholder='XXXX'/>
          </label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <label>
            <p>DATE</p>
            <input name="name" placeholder='XXXX'/>
          </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <label>
            <p>DATE</p>
            <input name="name" placeholder='XXXX'/>
          </label>  &nbsp;
      
      </form>
    
    </div>
    &nbsp;  
   <h1 
   className='btn btn-info ms-5'>  SEND FOR CHK
   </h1>
   &nbsp;  &nbsp;  &nbsp;  &nbsp;
   <h1 
   className='btn btn-info ms-5'>  SEND FOR APP
   </h1>
   &nbsp;  &nbsp;  &nbsp;  &nbsp;
   <h1 
   className='btn btn-info ms-5'>  APPROVE
   </h1>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
   
   <h1 
   className='btn btn-info ms-5'>  DELETE
   </h1>
   <h1 
   className='btn btn-info ms-5'>  CANCEL
   </h1> 
   <h1 
   className='btn btn-info ms-5'>  SAVE
   </h1> 
   <br />
   <center>
    <h1 
   className='btn btn-success ms-5'> MATERIAL ORDER MICRO SERVICE
   </h1> </center>
  </div>
  );
}

export default App;
