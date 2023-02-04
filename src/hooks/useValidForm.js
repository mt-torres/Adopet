import {  useState } from "react"


export const useValidForm = () => {
   const [ confirmPassword, setConfirmPassword ] = useState('')
   const [ confirmedPassword, setConfirmedPassword ] = useState('')


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
            successPattern: /^[0-9a-zA-Z$*_&@#]{8,}/, //corrigir pattern
            errorPattern: [(x) => x.length  < 8],
            messageError:{
                0:'A senha deve conter no mínimo  8 caracteres',
               // 1:'Senha maior que 8 caracteres',
            }

        },
        passwordConfirmation:{
            successPattern:confirmPassword ,
            errorPattern: [],
            messageError: confirmedPassword===confirmPassword?'':'As senhas não correspondem'

        },
    }
  

    const validForm = (e, inputType, setText ) => {
        setText(e.target.value)
        
        if(inputType === 'password') setConfirmPassword(e.target.value)
        if(inputType === 'passwordConfirmation') setConfirmedPassword(e.target.value)
        if((inputType !== 'passwordConfirmation' && valid[inputType].successPattern.test(e.target.value)) || (inputType === 'passwordConfirmation' && valid[inputType].successPattern === e.target.value  )){
            console.log('ok ',inputType)
            e.target.setCustomValidity('')

        }else{
            if(valid[inputType].errorPattern.length > 0){
                for (let index = 0; index < valid[inputType].errorPattern.length; index++) {
                    if(valid[inputType].errorPattern[index](e.target.value)){
                        console.log(index)
                        console.log(valid[inputType].messageError[index]);
                        e.target.setCustomValidity(valid[inputType].messageError[index])
                        break
                    }
                }
            }else{
                e.target.setCustomValidity(valid[inputType].messageError)

            }
        }
      

    }
    return {validForm}

} 