function PriceCard(props){
  const cardstyles ={    
    textAlign: "center",
   
  }
  const card={
    margin:"10px",
    padding:"20px",
    backgroundColor: "white",
    borderRadius: "20px",

  }

  const btn={
    minWidth: "250px",
    borderRadius: "20px",
  }
  
  const container={
    margin:"20px",
  }

  
 
  return(
   
      <div className="d-inline-flex bg-primary">
        <div className="card" style={card}>
          <div className="card-title"  style={cardstyles}>
              <h6 class="opacity-50">{props.head1}</h6>
              <h1>{props.head2}</h1>
              <hr />
          </div>
        
          <div className="card-body">
            <h6 className="card-text">✓ {`${props.users} users`}</h6>
            {props.storage? <h6 class="opacity-100"> ✓ 50GB Storage</h6>: <h6 class="opacity-50">✕ 50GB Storage</h6>}
            {props.uPublicPro ? <h6 class="opacity-100">✓ Unlimited Public Projects</h6>:<h6 class="opacity-50">✕ Unlimited Public Projects</h6>}
            {props.comAcs ? <h6 class="opacity-100">✓ Community Access</h6>: <h6 class="opacity-50">✕ Community Access</h6>}
            {props.uPrivatePro ? <h6 class="opacity-100">✓ Unlimited Private Prijects</h6> : <h6 class="opacity-50">✕ Unlimited Private Prijects</h6>}
            {props.dPhoneSup ? <h6 class="opacity-100">✓ Dedicated Phone Support</h6>: <h6 class="opacity-50">✕ Dedicated Phone Support</h6>}
            {props.freeSubDom ? <h6 class="opacity-100">✓ Free Subdomain</h6> : <h6 class="opacity-50">✕ Free Subdomain</h6>}
            {props.monthlyRepo? <h6 class="opacity-100">✓ Monthly Status Reports</h6>: <h6 class="opacity-50">✕ Monthly Status Reports</h6>}
            
            <button type="button" class="btn btn-primary" disabled   style={btn}>Button</button>
          </div>
        </div>
      </div>
    
    
    
  );
}
export default PriceCard


