import User from "../models/user.model.js";

export const create=async (req,res)=>{

    try{

        const userData=new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User Data Not Found"})
        }
        const savaData=await userData.save();
        res.status(200).json({msg:"User Created Succeessfully"});

    }
    catch(error){
        res.status(500).json({error:error})
    }
}

export const getAll= async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({msg:"Users Data Not Found"})
        }
        res.status(200).json(userData);

        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
}

export const getOne= async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Data Not Found"})
        }
        res.status(200).json(userExist);


        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
}



export const Update = async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Data Not Found"})
        }
        const updatedDate=await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User Updated Succeessfully"});

        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
}


export const userDelete=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Not Exist"})
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Succeessfully!"});
    } catch (error) {
        res.status(500).json({error:error})
        
    }
}