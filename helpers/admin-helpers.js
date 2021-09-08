var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
const { response } = require('express')

module.exports={
    
    doadminSignup:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            adminData.Password=await bcrypt.hash(adminData.Password,10)
        db.get().collection(collection.ADMIN_COLLECTION).insertOne(adminData).then((data)=>{
            console.log(adminData)
            resolve(adminData)
        })
        })
        
    },
    doadminLogin:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let responce={}
            let admin=await db.get().collection(collection.ADMIN_COLLECTION).findOne({Email:adminData.Email})
            if(admin){
                bcrypt.compare(adminData.Password,admin.Password).then((loginStatus)=>{
                    if(loginStatus){
                        console.log("login success");
                        response.admin=admin
                        response.loginStatus=true
                        resolve(response)
                    }else{
                        console.log("login Failed");
                        resolve({loginStatus:false})
                    }
                })
            }else{
                console.log("login Failed");
                resolve({loginStatus:false})
            }
        })
    }


    
}