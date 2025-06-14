async function findfun(res, Model){
    try{
        const result = await Model.find();
        if(result){
            res.status(200).json(result);
        }
        else {
            res.status(400).send("sorry, No data found");
        }
    }catch (error){
        console.error(error);
        res.status(500).send("serrver Error!")
    }
    }

    module.exports=findfun;