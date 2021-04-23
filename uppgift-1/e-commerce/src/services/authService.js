import axios from '../axios'

class AuthService {
    constructor() {
        this.authenticated = ''
        this.error=''
    }
  
    login(payload,cb) {

        try{
            axios.post('/users/login',payload)
              .then(res=>{
                  console.log(res)
                  if (res.status===200){
                    this.error=''
                    this.authenticated=res.data.token 
                  }
                  
                  else
                  this.error='Incorrect email or password'
               })
               .catch(err=>{
                   console.log(err)
                   this.error='Incorrect email or password'
               })
       }
        catch{this.error='Incorrect email or password'}

      //väntar på servern
      setTimeout(cb, 1000)
    }
  
    // logout(cb) {
    //   this.authenticated = false
    //   //väntar på servern
    //   setTimeout(cb, 1000)
    // }
  
    // isAuthenticated() {
    //   return this.authenticated
    // }
  
  }
  
  export default new AuthService();