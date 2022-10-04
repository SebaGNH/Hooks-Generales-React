import React,{useState} from 'react'

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)


  const onChangeInput = (e) =>{
    const {name,value} = e.target;

    //Carga datos en el state
    setFormState({
      ...formState,
      [name]:value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }
  

  return {
    ...formState, //Para destructurar en el hook
    formState,
    onChangeInput,
    onResetForm
  }
}

export default useForm