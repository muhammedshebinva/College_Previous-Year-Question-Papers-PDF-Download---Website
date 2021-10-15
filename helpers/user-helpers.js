var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
const { response } = require('express')
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password=await bcrypt.hash(userData.Password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
               // console.log(data)
               resolve(userData)
            })    
        })
    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        console.log("login Failed");
                        resolve({status:false})
                    }
                })
            }else{
                console.log("login Failed");
                resolve({status:false})
            }
        })
    },
    getAllUsers:()=>{
        return new Promise(async(resolve,reject)=>{
            let users=await db.get().collection(collection.USER_COLLECTION).find().toArray()
            resolve(users)
        })
    },
    getUsersOfSelected_C:(C_Name)=>{
        return new Promise(async(resolve,reject)=>{
            let users_C= await db.get().collection(collection.USER_COLLECTION).find({cource:C_Name}).toArray()
            resolve(users_C)
            
        })
    },
    delete_Users_Of_Selected_Course:(UsersOf_C)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.USER_COLLECTION).deleteMany({cource:UsersOf_C}).then((response)=>{
            resolve(response)
           })
                
           
        })
    }
}