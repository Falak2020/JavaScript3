import axios from '../axios'

class AuthService {
    constructor() {
        this.authenticated = ''
        this.error=''
        this.userName=''
        this.status='log in'
    }
  
    login(payload,cb) {

        try{
            axios.post('/users/login',payload)
              .then(res=>{
                
                  if (res.status===200){
                    this.error=''
                    this.authenticated = res.data.token 
                    this.userName = res.data.username 
                    this.status='log out'
                  }
                  
                  else{
                    this.error='Incorrect email or password'
                    this.status='log in'
                  }
                  
               })
               .catch(err=>{
                  
                   this.error='Incorrect email or password'
                   this.status='log in'
               })
       }
        catch{
          this.error='Incorrect email or password'
          this.status='log in'
        }

      
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
  
    register(payload,cb){
      try{
        axios.post('/users/register',payload)
        .then(res=>{
          console.log(res)
            if (res.status===201){
              this.error=''
              this.login(payload)
            }
            
            else
            this.error='The user  is already exists'
         })
         .catch(err=>{
            
             this.error='The user  is already exists'
         })
      }
      catch{this.error='The user  is already exists'}
     
       setTimeout(cb, 2000)
    }


  }
  
  export default new AuthService();