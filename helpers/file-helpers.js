var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId

module.exports={

    addFile:(file,callback)=>{
        console.log(file);
        db.get().collection('file').insertOne(file).then((data)=>{
            console.log(data);
            callback(data.insertedId);
        })
    },
    getAllFiles:()=>{
        return new Promise(async(resolve,reject)=>{
            let files=await db.get().collection(collection.FILE_COLLECTION).find().toArray()
            resolve(files)
        })
    },
    deleteFile:(fileId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION).deleteOne({_id:objectId(fileId)}).then((response)=>{
                //console.log(response);
                resolve(response)
            })
        })
    },
    getFileDetails:(fileId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION).findOne({_id:objectId(fileId)}).then((file)=>{
                resolve(file)
            })
        })
    },
    updateFile:(fileId,fileDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.FILE_COLLECTION)
            .updateOne({_id:objectId(fileId)},{
                $set:{
                    Name:fileDetails.Name,
                    Category:fileDetails.Category,
                    Year:fileDetails.Year 
                }
            }).then((responce)=>{
                resolve()
            })
        })
    }

}