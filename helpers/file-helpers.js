var db=require('../config/connection')
var collection=require('../config/collections')
var objectId=require('mongodb').ObjectId

module.exports={

    addFile:(files,callback)=>{
        console.log(files);
        db.get().collection('file').insertOne(files).then((data)=>{
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
                    Year:fileDetails.Year ,

                    Sem1:fileDetails.Sem1,
                    Sem1Sub_name1:fileDetails.Sem1Sub_name1,
                    Sem1Sub_name2:fileDetails.Sem1Sub_name2,
                    Sem1Sub_name3:fileDetails.Sem1Sub_name3,
                    Sem1Sub_name4:fileDetails.Sem1Sub_name4,
                    Sem1Sub_name5:fileDetails.Sem1Sub_name5,
                    Sem1Sub_name6:fileDetails.Sem1Sub_name6,

                    Sem2:fileDetails.Sem2,
                    Sem2Sub_name1:fileDetails.Sem2Sub_name1,
                    Sem2Sub_name2:fileDetails.Sem2Sub_name2,
                    Sem2Sub_name3:fileDetails.Sem2Sub_name3,
                    Sem2Sub_name4:fileDetails.Sem2Sub_name4,
                    Sem2Sub_name5:fileDetails.Sem2Sub_name5,
                    Sem2Sub_name6:fileDetails.Sem2Sub_name6,

                    Sem3:fileDetails.Sem3,
                    Sem3Sub_name1:fileDetails.Sem3Sub_name1,
                    Sem3Sub_name2:fileDetails.Sem3Sub_name2,
                    Sem3Sub_name3:fileDetails.Sem3Sub_name3,
                    Sem3Sub_name4:fileDetails.Sem3Sub_name4,
                    Sem3Sub_name5:fileDetails.Sem3Sub_name5,
                    Sem3Sub_name6:fileDetails.Sem3Sub_name6,

                    Sem4:fileDetails.Sem4,
                    Sem4Sub_name1:fileDetails.Sem4Sub_name1,
                    Sem4Sub_name2:fileDetails.Sem4Sub_name2,
                    Sem4Sub_name3:fileDetails.Sem4Sub_name3,
                    Sem4Sub_name4:fileDetails.Sem4Sub_name4,
                    Sem4Sub_name5:fileDetails.Sem4Sub_name5,
                    Sem4Sub_name6:fileDetails.Sem4Sub_name6,

                    Sem5:fileDetails.Sem5,
                    Sem5Sub_name1:fileDetails.Sem5Sub_name1,
                    Sem5Sub_name2:fileDetails.Sem5Sub_name2,
                    Sem5Sub_name3:fileDetails.Sem5Sub_name3,
                    Sem5Sub_name4:fileDetails.Sem5Sub_name4,
                    Sem5Sub_name5:fileDetails.Sem5Sub_name5,
                    Sem5Sub_name6:fileDetails.Sem5Sub_name6,

                    Sem6:fileDetails.Sem6,
                    Sem6Sub_name1:fileDetails.Sem6Sub_name1,
                    Sem6Sub_name2:fileDetails.Sem6Sub_name2,
                    Sem6Sub_name3:fileDetails.Sem6Sub_name3,
                    Sem6Sub_name4:fileDetails.Sem6Sub_name4,
                    Sem6Sub_name5:fileDetails.Sem6Sub_name5,
                    Sem6Sub_name6:fileDetails.Sem6Sub_name6,

                    Year2:fileDetails.Year2 ,

                    Year2Sem1:fileDetails.Year2Sem1,
                    Year2Sem1Sub_name1:fileDetails.Year2Sem1Sub_name1,
                    Year2Sem1Sub_name2:fileDetails.Year2Sem1Sub_name2,
                    Year2Sem1Sub_name3:fileDetails.Year2Sem1Sub_name3,
                    Year2Sem1Sub_name4:fileDetails.Year2Sem1Sub_name4,
                    Year2Sem1Sub_name5:fileDetails.Year2Sem1Sub_name5,
                    Year2Sem1Sub_name6:fileDetails.Year2Sem1Sub_name6,

                    Year2Sem2:fileDetails.Year2Sem2,
                    Year2Sem2Sub_name1:fileDetails.Year2Sem2Sub_name1,
                    Year2Sem2Sub_name2:fileDetails.Year2Sem2Sub_name2,
                    Year2Sem2Sub_name3:fileDetails.Year2Sem2Sub_name3,
                    Year2Sem2Sub_name4:fileDetails.Year2Sem2Sub_name4,
                    Year2Sem2Sub_name5:fileDetails.Year2Sem2Sub_name5,
                    Year2Sem2Sub_name6:fileDetails.Year2Sem2Sub_name6,

                    Year2Sem3:fileDetails.Year2Sem3,
                    Year2Sem3Sub_name1:fileDetails.Year2Sem3Sub_name1,
                    Year2Sem3Sub_name2:fileDetails.Year2Sem3Sub_name2,
                    Year2Sem3Sub_name3:fileDetails.Year2Sem3Sub_name3,
                    Year2Sem3Sub_name4:fileDetails.Year2Sem3Sub_name4,
                    Year2Sem3Sub_name5:fileDetails.Year2Sem3Sub_name5,
                    Year2Sem3Sub_name6:fileDetails.Year2Sem3Sub_name6,

                    Year2Sem4:fileDetails.Sem4,
                    Year2Sem4Sub_name1:fileDetails.Year2Sem4Sub_name1,
                    Year2Sem4Sub_name2:fileDetails.Year2Sem4Sub_name2,
                    Year2Sem4Sub_name3:fileDetails.Year2Sem4Sub_name3,
                    Year2Sem4Sub_name4:fileDetails.Year2Sem4Sub_name4,
                    Year2Sem4Sub_name5:fileDetails.Year2Sem4Sub_name5,
                    Year2Sem4Sub_name6:fileDetails.Year2Sem4Sub_name6,

                    Year2Sem5:fileDetails.Year2Sem5,
                    Year2Sem5Sub_name1:fileDetails.Year2Sem5Sub_name1,
                    Year2Sem5Sub_name2:fileDetails.Year2Sem5Sub_name2,
                    Year2Sem5Sub_name3:fileDetails.Year2Sem5Sub_name3,
                    Year2Sem5Sub_name4:fileDetails.Year2Sem5Sub_name4,
                    Year2Sem5Sub_name5:fileDetails.Year2Sem5Sub_name5,
                    Year2Sem5Sub_name6:fileDetails.Year2Sem5Sub_name6,

                    Year2Sem6:fileDetails.Year2Sem6,
                    Year2Sem6Sub_name1:fileDetails.Year2Sem6Sub_name1,
                    Year2Sem6Sub_name2:fileDetails.Year2Sem6Sub_name2,
                    Year2Sem6Sub_name3:fileDetails.Year2Sem6Sub_name3,
                    Year2Sem6Sub_name4:fileDetails.Year2Sem6Sub_name4,
                    Year2Sem6Sub_name5:fileDetails.Year2Sem6Sub_name5,
                    Year2Sem6Sub_name6:fileDetails.Year2Sem6Sub_name6

                }
            }).then((responce)=>{
                resolve()
            })
        })
    },
    
}