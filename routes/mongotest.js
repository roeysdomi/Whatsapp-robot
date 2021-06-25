
var jobs = require('../models/Jobs');
var tuser=require('../models/tsuriusers');
const mongoose = require('mongoose');




const enterjob=(name_v,company_v,details_v)=>
{
    var usr=new jobs ({name:name_v,company:company_v,details:details_v})

  return usr.save()
}
const enterjob2=(prop)=>
{
    const {jobid,text,details,type,location,company,title,pic}=prop;
    var usr=new jobs ({title:title,company:company,details:details,type:type,location:location,pic:pic,jobid:jobid,text:text});

  return usr.save()
}

const showjobs=()=>
{
 console.log("showjobs");
 let k={d:"f"}
  return   jobs.find({},{}).sort({date:-1}).exec()


}
///-----------------------------------------------
const entertuser=(prop)=>
{
    const {name,pic}=prop;
    var usr=new tuser ({name:name,pic:pic});

  return usr.save()
}

const showtusers=()=>
{
 console.log("show users");
 let k={d:"f"}
  return   tuser.find({},{}).sort({date:-1}).exec()


}
const updatetuser=(prop)=>
{
    const {_id,pic}=prop;
  //  tuser.updateMany({_id:_id}, { $set: { pic: pic} });
  // try{
  //     tuser.update({_id:(_id)},  {$set: {pic:pic}});
  //     console.log("worked");
  // }catch(err)
  // {
  //    console.log("didnt update : "+err);
  // }

        tuser.findOneAndUpdate({_id:_id}, { $set: { pic: pic} }, {new: true}, (err, doc) => {
          if (err) {
              console.log("Something wrong when updating data!");
              // console.log(err);
          }

          console.log(doc);
      });

}
//----------------------------
exports.job=enterjob2;
exports.showjobs2=showjobs;
//-------------------
exports.entertuser=entertuser;
exports.showtusers=showtusers;
exports.updatetuser=updatetuser;
