const ViPasswordInput = (props) => {
    return (
  
      <div class="form-group" >
        <label>{props.title}</label>
        <input
          type="Password"
          onChange={props.handleInputChange}
          name ={props.name}
          value ={props.value}
        
        {...props}
        />
        { props.isSubmitted && props.value === '' &&
          <span class="label-danger" > 
          {props.errMessage} </span>
        }
      </div>
    );
  }
  export default ViPasswordInput;