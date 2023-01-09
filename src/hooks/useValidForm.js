import { useEffect, useState } from "react"


export const useValidForm = () => {
   const [ confirmPassword, setConfirmPassword ] = useState('')
   const [ confirmedPassword, setConfirmedPassword ] = useState('')
   const [ alertError, setAlertError ] = useState('')


    const valid = {
        email:{
            successPattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,  
            errorPattern: '',
            messageError: 'Email incorreto'
        }, 
        name:{
            successPattern: /^([A-Za-z]{3,}\s)(([A-Za-z]{1,}\s?){1,})$/,
            errorPattern: [(x) => x.length  < 3, (x) => x.split(' ').length < 2],
            messageError:{
                0: 'O nome deve conter no mínimo 3 caracteres',
                1: 'Adicione o sobrenome'
            },

        },
        password:{
            successPattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
            errorPattern: [(x) => x.length  < 8, (x) => x.length  > 8],
            messageError:{
                0:'A senha deve conter no mínimo  8 caracteres',
                1:'Senha maior que 8 caracteres',
            }

        },
        passwordConfirmation:{
            successPattern:confirmPassword ,
            errorPattern: [],
            messageError: confirmedPassword===confirmPassword?'':'As senhas não correspondem'

        },
    }
  

    const validForm = (text, inputType, setText ) => {
        setText(text)
        setAlertError('')
       
        if(inputType === 'password') setConfirmPassword(text)
        if(inputType === 'passwordConfirmation') setConfirmedPassword(text)
        if((inputType !== 'passwordConfirmation' && valid[inputType].successPattern.test(text)) || (inputType === 'passwordConfirmation' && valid[inputType].successPattern === text  )){
            console.log('ok ',inputType)

        }else{
            if(valid[inputType].errorPattern.length > 0){
                for (let index = 0; index < valid[inputType].errorPattern.length; index++) {
                    if(valid[inputType].errorPattern[index](text)){
                        console.log(index)
                        console.log(valid[inputType].messageError[index]);
                        break
                    }
                }
            }else{
                console.log(valid[inputType].messageError);
                setAlertError(valid[inputType].messageError)

            }
        }
      

    }
    return {validForm, alertError}

} 