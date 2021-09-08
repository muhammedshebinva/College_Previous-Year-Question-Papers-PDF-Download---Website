var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
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
    // doadminSignup:(adminData)=>{
    //     return new Promise(async(resolve,reject)=>{
    //         adminData.Password=await bcrypt.hash(adminData.Password,10)
    //         db.get().collection(collection.ADMIN_COLLECTION).insertOne(adminData).then((data)=>{
    //            // console.log(data)
    //            resolve(adminData)
    //         })    
    //     })
    // },
    // doAdminLogin:(adminData)=>{
    //     return new Promise(async(resolve,reject)=>{
    //         let loginStatus=false
    //         let response={}
    //         let admin=await db.get().collection(collection.ADMIN_COLLECTION).findOne({Email:adminData.Email})
    //         if(admin){
    //             bcrypt.compare(adminData.Password,admin.Password).then((status)=>{
    //                 if(status){
    //                     console.log("login success");
    //                     response.user=user
    //                     response.status=true
    //                     resolve(response)
    //                 }else{
    //                     console.log("login Failed");
    //                     resolve({status:false})
    //                 }
    //             })
    //         }else{
    //             console.log("login Failed");
    //             resolve({status:false})
    //         }
    //     })
    // }
}